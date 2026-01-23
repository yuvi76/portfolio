# Deployment Guide to GitHub Pages

Follow these steps to deploy your portfolio to GitHub Pages.

## 1. Initialize Git (If not already done)
If you haven't initialized a git repository in this folder yet:
```bash
git init
git add .
git commit -m "Initial commit"
```

## 2. Push to GitHub
Create a new repository on GitHub and run:
```bash
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

## 3. Install gh-pages
Since there was a permission issue during my attempt, please run this command in your terminal:
```bash
npm install --save-dev gh-pages
```

## 4. Deploy
Once `gh-pages` is installed, simply run:
```bash
npm run deploy
```

## 5. Configure GitHub Pages
1. Go to your repository on GitHub.
2. Navigate to **Settings > Pages**.
3. Under **Build and deployment > Branch**, ensure the source is set to **Deploy from a branch**.
4. Select the `gh-pages` branch and the `/root` folder.
5. Click **Save**.

> [!IMPORTANT]
> If your site is hosted at `username.github.io/repo-name`, you should update `next.config.js` to include the `basePath`:
> ```javascript
> const nextConfig = {
>   basePath: '/repo-name',
>   // ... other config
> }
> ```
