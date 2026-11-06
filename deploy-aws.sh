#!/usr/bin/env bash
# ==============================================================================
# SanatanOrigin - Automated AWS S3 & CloudFront Deployment Script
# Usage: ./deploy-aws.sh <S3_BUCKET_NAME> [CLOUDFRONT_DISTRIBUTION_ID] [REGION]
# ==============================================================================

set -e

BUCKET_NAME="$1"
DISTRIBUTION_ID="$2"
REGION="${3:-ap-south-1}"

if [ -z "$BUCKET_NAME" ]; then
  echo "Usage: ./deploy-aws.sh <S3_BUCKET_NAME> [CLOUDFRONT_DISTRIBUTION_ID] [REGION]"
  exit 1
fi

echo "========================================================"
echo "  Deploying SanatanOrigin to AWS S3 & CloudFront"
echo "  Bucket: $BUCKET_NAME | Region: $REGION"
echo "========================================================"

echo "[1/3] Syncing static assets to s3://$BUCKET_NAME..."
aws s3 sync . "s3://$BUCKET_NAME" \
  --exclude ".git/*" \
  --exclude ".github/*" \
  --exclude "*.bak*" \
  --exclude "scratch/*" \
  --exclude "Dockerfile" \
  --exclude "nginx.conf" \
  --exclude "cloudformation-s3-cloudfront.yaml" \
  --exclude "deploy-aws.*" \
  --exclude "open-app.bat" \
  --exclude "index.html" \
  --cache-control "public, max-age=31536000, immutable" \
  --delete

echo "[2/3] Uploading index.html with UTF-8 charset & revalidation headers..."
aws s3 cp index.html "s3://$BUCKET_NAME/index.html" \
  --content-type "text/html; charset=utf-8" \
  --cache-control "public, max-age=0, must-revalidate"

if [ -n "$DISTRIBUTION_ID" ]; then
  echo "[3/3] Creating CloudFront invalidation for distribution $DISTRIBUTION_ID..."
  aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*"
  echo "CloudFront cache invalidation initiated successfully!"
fi

echo "========================================================"
echo "  Deployment completed successfully!"
echo "========================================================"
