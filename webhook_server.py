#!/usr/bin/env python3
"""
BuzzNewz Auto-Deploy Webhook Server
Listens for AdSense ID updates and auto-deploys
"""

from flask import Flask, request, jsonify
import subprocess
import os
import re

app = Flask(__name__)

SITE_DIR = "/home/ev/buzznewz"
GITHUB_REPO = "Evansxm/buzznewz"


def update_adsense(publisher_id):
    """Update AdSense ID in all HTML files"""
    os.chdir(SITE_DIR)

    # Update all HTML files
    result = subprocess.run(
        ["sed", "-i", f"s/ca-pub-XXXXXXXXXXXXXX/{publisher_id}/g", "*.html"],
        capture_output=True,
        text=True,
    )

    # Commit and push
    subprocess.run(["git", "add", "."], capture_output=True)
    subprocess.run(
        ["git", "commit", "-m", f"Update AdSense ID to {publisher_id}"],
        capture_output=True,
    )
    subprocess.run(["git", "push", "origin", "main"], capture_output=True)

    return True


@app.route("/webhook/adsense", methods=["POST"])
def adsense_webhook():
    """Webhook endpoint for AdSense updates"""
    data = request.json

    if not data or "publisher_id" not in data:
        return jsonify({"error": "Missing publisher_id"}), 400

    publisher_id = data["publisher_id"]

    try:
        update_adsense(publisher_id)
        return jsonify(
            {
                "status": "success",
                "message": f"Updated AdSense ID to {publisher_id}",
                "deployed": True,
            }
        )
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
