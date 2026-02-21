#!/bin/bash
# Quick Deploy Script - Run with your AdSense ID
# Usage: ./deploy.sh ca-pub-YOUR-ID

if [ -z "$1" ]; then
    echo "Usage: ./deploy.sh <AdSense-Publisher-ID>"
    echo "Example: ./deploy.sh ca-pub-1234567890123456"
    exit 1
fi

PUBLISHER_ID=$1
echo "🚀 Updating AdSense ID: $PUBLISHER_ID"

# Update all HTML files
find . -name "*.html" -exec sed -i "s/ca-pub-XXXXXXXXXXXXXX/$PUBLISHER_ID/g" {} \;

# Commit
git add .
git commit -m "Update AdSense ID to $PUBLISHER_ID"

# Push to trigger deployment
git push origin main

echo "✅ Deployed! Site will be live in ~1-2 minutes"
