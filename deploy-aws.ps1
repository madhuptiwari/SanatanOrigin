<#
.SYNOPSIS
    Automated AWS S3 & CloudFront Deployment Script for SanatanOrigin
.DESCRIPTION
    Syncs the website files to AWS S3 with production-grade caching and UTF-8 charset headers,
    and invalidates CloudFront cache for instant global updates.
.EXAMPLE
    .\deploy-aws.ps1 -BucketName "my-sanatan-origin-bucket" -Region "ap-south-1" -DistributionId "E1234EXAMPLE"
#>

param(
    [Parameter(Mandatory=$true)]
    [string]$BucketName,

    [Parameter(Mandatory=$false)]
    [string]$Region = "ap-south-1",

    [Parameter(Mandatory=$false)]
    [string]$DistributionId = ""
)

$ErrorActionPreference = "Stop"

Write-Host "`n========================================================" -ForegroundColor Cyan
Write-Host "  SanatanOrigin - AWS S3 & CloudFront Deployment" -ForegroundColor Yellow
Write-Host "========================================================`n" -ForegroundColor Cyan

# Check if AWS CLI is installed
if (-not (Get-Command "aws" -ErrorAction SilentlyContinue)) {
    Write-Host "[ERROR] AWS CLI was not found on your system." -ForegroundColor Red
    Write-Host "Please install AWS CLI from: https://aws.amazon.com/cli/" -ForegroundColor Yellow
    Write-Host "Or run these commands directly inside AWS CloudShell in your browser!" -ForegroundColor Green
    exit 1
}

Write-Host "[1/3] Uploading static assets to S3 bucket '$BucketName' (Region: $Region)..." -ForegroundColor Cyan
aws s3 sync . "s3://$BucketName" `
    --exclude ".git/*" `
    --exclude ".github/*" `
    --exclude "*.bak*" `
    --exclude "scratch/*" `
    --exclude "Dockerfile" `
    --exclude "nginx.conf" `
    --exclude "cloudformation-s3-cloudfront.yaml" `
    --exclude "deploy-aws.*" `
    --exclude "open-app.bat" `
    --exclude "index.html" `
    --cache-control "public, max-age=31536000, immutable" `
    --delete

Write-Host "[2/3] Uploading index.html with UTF-8 charset & revalidation headers..." -ForegroundColor Cyan
aws s3 cp index.html "s3://$BucketName/index.html" `
    --content-type "text/html; charset=utf-8" `
    --cache-control "public, max-age=0, must-revalidate"

if ($DistributionId) {
    Write-Host "[3/3] Creating CloudFront cache invalidation for distribution '$DistributionId'..." -ForegroundColor Cyan
    aws cloudfront create-invalidation --distribution-id $DistributionId --paths "/*"
    Write-Host "`n[SUCCESS] CloudFront invalidation created! Global edge caches are updating." -ForegroundColor Green
} else {
    Write-Host "`n[INFO] Skipped CloudFront invalidation (no DistributionId provided)." -ForegroundColor DarkGray
}

Write-Host "`n========================================================" -ForegroundColor Green
Write-Host "  Deployment Completed Successfully!" -ForegroundColor Green
Write-Host "========================================================`n" -ForegroundColor Green
