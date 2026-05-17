# 🚀 QUICK START GUIDE - Netlify Deployment

## ⚡ Fastest Way (2 Minutes)

### Step 1: Unzip the File
```
kuvempu-law-college.zip → Extract to folder
```

### Step 2: Deploy to Netlify (Drag & Drop)
1. Go to https://app.netlify.com
2. Sign in (free account required)
3. Drag the unzipped folder onto the page
4. **Done!** Your site is live ✓

Your Netlify URL will look like: `https://xyz-abc-123.netlify.app`

---

## 📝 Setup with GitHub (For Weekly Auto-Updates)

### Step 1: Create GitHub Repo
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/kuvempu-college.git
git push -u origin main
```

### Step 2: Connect Netlify to GitHub
1. https://app.netlify.com → "New site from Git"
2. Select GitHub
3. Authorize & Select `kuvempu-college` repo
4. Click Deploy

### Step 3: Enable Auto-Deploy
- Every `git push` → Auto-deploys to Netlify
- No manual uploading needed!

---

## 🔧 Using Admin Panel

### Access Admin:
- Click **Admin** button in header, OR
- Visit: `yoursite.netlify.app/admin.html`

### Do This Weekly:
1. ✓ Add faculty members
2. ✓ Upload photos
3. ✓ Update logo (if needed)
4. ✓ **BACKUP DATA**: Admin → Backup → Download

---

## ⚠️ Important: Data Backup

**Your data is stored in BROWSER ONLY** (localStorage)

**Every week:**
```
Admin Panel → Backup Data → Download Backup
```

This prevents data loss if browser is cleared.

---

## 🎨 Quick Customization

### Update College Info:
Edit `index.html` lines 1-50:
- College name
- Address
- Phone numbers
- Email addresses

### Change Colors:
Edit `styles.css` lines 1-20:
- Change `--primary-blue` from `#1e3a8a`
- Change `--accent-gold` from `#b8860b`

---

## 🆘 Need Help?

### Check Netlify Logs:
1. Go to https://app.netlify.com
2. Find your site
3. Click "Deploys" tab
4. Check latest deployment status

### Common Issues:
- **404 Error**: Make sure all files are uploaded
- **Styling broken**: Clear browser cache (Ctrl+Shift+Delete)
- **Photos not showing**: Use Admin → Backup to save data

---

## 📱 Test on Mobile
Your site is responsive!
- Desktop: ✓ Perfect
- Tablet: ✓ Perfect  
- Mobile: ✓ Perfect

---

## 🎯 Next Steps

1. ✓ Deploy to Netlify
2. ✓ Add faculty photos via Admin
3. ✓ Customize college information
4. ✓ Share your site!

**Your new website is ready!** 🎉

---

Need more help? See README.md for complete documentation.
