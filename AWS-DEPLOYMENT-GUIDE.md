# 🚀 SanatanOrigin — AWS Deployment Guide

This guide provides complete, step-by-step instructions for deploying **SanatanOrigin** to your paid AWS account. 

Because SanatanOrigin is a high-performance web application (HTML5, Canvas, SVG, ES6, UTF-8 Sanskrit typography), the industry standard, production-grade AWS architecture is **AWS S3 + CloudFront CDN (or AWS Amplify)**. This gives you:
- **Instant Global Delivery**: Sub-50ms latency across India and worldwide via AWS CloudFront Edge locations.
- **Enterprise High Availability**: 99.999% uptime backed by Amazon's global infrastructure.
- **Free Automatic SSL/TLS**: Full HTTPS encryption via AWS Certificate Manager (ACM).
- **Near-Zero Running Cost**: For static assets, S3 + CloudFront typically costs less than $0.50 – $2.00/month even with heavy traffic.
- **Automatic CI/CD**: Automatic redeployments whenever you push code to GitHub.

---

## 🌟 Choose Your Deployment Method

| Method | Best For | Complexity | Time to Deploy |
| :--- | :--- | :---: | :---: |
| **Option 1: AWS Amplify (Recommended)** | Connects directly to GitHub repo, auto-builds on push, 1-click SSL & custom domain | **Easiest (No CLI needed)** | **3 minutes** |
| **Option 2: S3 + CloudFront (CloudFormation)** | Enterprise-grade isolated S3 + CloudFront with Origin Access Control (OAC) | **Intermediate (Browser GUI)** | **5 minutes** |
| **Option 3: GitHub Actions CI/CD** | Full automation: Every `git push origin main` auto-updates S3 & clears CloudFront | **Advanced (Automated)** | **5 minutes** |
| **Option 4: AWS App Runner / ECS (Docker)** | Running inside a containerized Nginx instance on AWS | **Container-based** | **10 minutes** |

---

## Option 1: AWS Amplify Hosting (Recommended — 3 Minutes)

This is the simplest, most powerful way to deploy directly from your GitHub repository `madhuptiwari/SanatanOrigin`.

### Step 1: Open AWS Amplify Console
1. Log into your [AWS Management Console](https://console.aws.amazon.com/).
2. In the top search bar, type **Amplify** and click **AWS Amplify**.
3. Click the orange button **"Create new app"** (or **"Deploy an app"**).

### Step 2: Link Your GitHub Repository
1. Under **"Start with an existing code repository"**, select **GitHub** and click **Next**.
2. If prompted, authorize AWS Amplify to access your GitHub account.
3. In the repository dropdown:
   - Select **`madhuptiwari/SanatanOrigin`**.
   - Select Branch: **`main`**.
4. Click **Next**.

### Step 3: Configure Build Settings
1. Amplify will automatically detect the [`amplify.yml`](./amplify.yml) file already present in the repository!
2. You do **not** need to change anything; it has already been pre-configured with UTF-8 Sanskrit headers, 1-year asset caching, and security headers.
3. Click **Next**.

### Step 4: Review and Deploy
1. Review your settings and click **Save and deploy**.
2. Amplify will provision the environment, deploy the files across the global AWS CDN, and issue a free SSL certificate.
3. In about 60–90 seconds, you will see a live URL (e.g., `https://main.d1234abcd.amplifyapp.com`).
4. Click the link — **your application is live!**

### Step 5: (Optional) Connect Your Custom Domain
1. In the Amplify left sidebar, click **Domain management**.
2. Click **Add domain**, enter your domain name (e.g. `sanatanorigin.com`).
3. Follow the DNS verification steps (Amplify automatically configures SSL).

---

## Option 2: AWS S3 + CloudFront CDN (Enterprise Architecture)

If you prefer full control over S3 bucket policies and CloudFront distributions, use the included CloudFormation template [`cloudformation-s3-cloudfront.yaml`](./cloudformation-s3-cloudfront.yaml).

### Step 1: Deploy the CloudFormation Stack
1. In the AWS Console, search for **CloudFormation** and open it.
2. Select your preferred Region in the top right (e.g., **Asia Pacific (Mumbai) `ap-south-1`** or **US East (N. Virginia) `us-east-1`**).
3. Click **Create stack** -> **With new resources (standard)**.
4. Under **Template source**, choose **Upload a template file**.
5. Click **Choose file** and select [`cloudformation-s3-cloudfront.yaml`](./cloudformation-s3-cloudfront.yaml) from your local project directory.
6. Click **Next**.
7. Enter a **Stack name** (e.g., `sanatan-origin-prod`).
8. Click **Next** -> **Next** -> check the acknowledgement box if shown -> click **Submit**.
9. Wait about 2–3 minutes until the stack status displays green **`CREATE_COMPLETE`**.

### Step 2: Retrieve S3 Bucket & CloudFront URL
1. Click on your stack name and go to the **Outputs** tab.
2. Note down:
   - **`WebsiteURL`**: Your live HTTPS CloudFront link (e.g. `https://d123456789.cloudfront.net`).
   - **`S3BucketName`**: Your private S3 bucket name.
   - **`CloudFrontDistributionId`**: Your distribution ID.

### Step 3: Upload Website Files to S3
You can upload either via the AWS Console UI or via AWS CloudShell (in your browser):

#### Method A: Using AWS CloudShell (Fastest, in your browser):
1. In the AWS Console top navigation bar, click the **CloudShell icon `>_`** (next to the search bar).
2. Once the terminal opens, clone the repository and sync:
   ```bash
   git clone https://github.com/madhuptiwari/SanatanOrigin.git
   cd SanatanOrigin
   ./deploy-aws.sh <YOUR_S3_BUCKET_NAME> <YOUR_CLOUDFRONT_DISTRIBUTION_ID>
   ```
3. Done! The files are uploaded with correct cache and UTF-8 headers.

#### Method B: Using S3 Console UI:
1. Search for **S3** in the AWS Console.
2. Click on your bucket name (`sanatan-origin-xxxx`).
3. Click **Upload** -> **Add files** and **Add folder**.
4. Select all project files (`index.html`, `app.js`, `styles.css`, `gods-data.js`, `cosmology-data.js`, `cosmic-background.js`, `cosmic-audio.js`, and favicon/icon images).
5. Click **Upload**.

---

## Option 3: Automated CI/CD with GitHub Actions

The repository includes a ready-to-use GitHub Actions workflow: [`.github/workflows/deploy-aws.yml`](./.github/workflows/deploy-aws.yml). Whenever you commit and push to `main`, GitHub automatically deploys to your AWS S3 bucket and clears the CloudFront cache.

### Step 1: Create an IAM User in AWS
1. In AWS Console, search for **IAM** -> **Users** -> **Create user**.
2. Username: `github-actions-sanatan-deployer`.
3. Do not enable AWS Management Console access; click **Next**.
4. Under **Attach policies directly**, attach:
   - `AmazonS3FullAccess` (or scoped to your bucket).
   - `CloudFrontFullAccess` (or scoped to create invalidations).
5. Click **Create user**.
6. Click on the newly created user -> go to **Security credentials** tab.
7. Under **Access keys**, click **Create access key** -> select **Command Line Interface (CLI)** -> click **Next** -> **Create access key**.
8. Copy the **Access Key ID** and **Secret Access Key**.

### Step 2: Add Secrets to Your GitHub Repository
1. Open your GitHub repo: [`https://github.com/madhuptiwari/SanatanOrigin`](https://github.com/madhuptiwari/SanatanOrigin).
2. Go to **Settings** -> **Secrets and variables** (in the left menu) -> **Actions**.
3. Click **New repository secret** and add the following 4 secrets:
   - `AWS_ACCESS_KEY_ID`: Your IAM access key ID.
   - `AWS_SECRET_ACCESS_KEY`: Your IAM secret access key.
   - `AWS_REGION`: e.g. `ap-south-1` (or your chosen region).
   - `S3_BUCKET_NAME`: Your S3 bucket name.
   - `CLOUDFRONT_DISTRIBUTION_ID`: (Optional) Your CloudFront distribution ID.
4. Any future `git push` to `main` will automatically build, upload, and invalidate cache globally!

---

## Option 4: Containerized Deployment (AWS App Runner / ECS)

If you need a containerized Nginx web server:

1. The project includes:
   - [`Dockerfile`](./Dockerfile): Production Alpine Nginx container.
   - [`nginx.conf`](./nginx.conf): Configured with UTF-8 charset, Gzip compression, 1-year immutable caching, and health-check route `/health`.
2. In AWS Console:
   - Open **AWS App Runner**.
   - Click **Create service**.
   - Source: Choose **Source code repository** -> connect `madhuptiwari/SanatanOrigin`.
   - Build provider: Choose **Dockerfile**.
   - Port: `80`.
   - Click **Deploy**.
3. App Runner automatically provisions a load-balanced, auto-scaling container service with a secure HTTPS URL.

---

## 🔒 Post-Deployment Checklist

- [x] **UTF-8 Sanskrit Encoding**: Verified zero mojibake and pure Devanagari rendering.
- [x] **Cache Control**: `index.html` revalidates immediately (`max-age=0, must-revalidate`), while JS/CSS/images are cached at edge locations for 1 year (`max-age=31536000, immutable`).
- [x] **Security Headers**: HSTS, X-Content-Type-Options (`nosniff`), and X-Frame-Options (`SAMEORIGIN`) are pre-configured.
- [x] **SPA Fallback**: Error pages 403 & 404 cleanly route to `index.html` so direct URLs and bookmarks work seamlessly.
