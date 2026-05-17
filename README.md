# RASHTRAKAVI KUVEMPU COLLEGE OF LAW - Website

Professional, elite, and dignified landing page for RASHTRAKAVI KUVEMPU COLLEGE OF LAW with an integrated admin control panel.

## 🎯 Features

### Public Website
- **Professional Landing Page**: Hero section, courses, faculty, committees
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Elite Blue Theme**: Dignified colors with gold accents
- **Dynamic Faculty Display**: Faculty information with photo support
- **Smooth Navigation**: Sticky header with smooth scrolling

### Admin Control Panel
- **Faculty Management**: Add, edit, delete faculty members
- **Photo Upload**: Upload and manage faculty member photos
- **Logo Management**: Upload custom college logo
- **Data Backup**: Download and restore data as JSON
- **Statistics Dashboard**: Quick overview of faculty and photos
- **Secure Storage**: All data stored in browser's localStorage

## 📁 File Structure

```
kuvempu-law-college/
├── index.html          # Main landing page
├── admin.html          # Admin control panel
├── styles.css          # Shared styling (blue, elite theme)
├── script.js           # Main page functionality
├── admin.js            # Admin panel functionality
├── netlify.toml        # Netlify configuration
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## 🚀 Deployment to Netlify

### Option 1: Direct Netlify Upload
1. Go to https://app.netlify.com
2. Sign up or log in with GitHub/Google
3. Click "Add new site" → "Deploy manually"
4. Drag and drop the unzipped folder
5. Your site will be live in seconds!

### Option 2: Git Integration (Recommended for automatic updates)

#### Step 1: Push to GitHub
```bash
# Initialize git if not done
git init
git add .
git commit -m "Initial commit: Kuvempu College website"

# Create a new repo on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/kuvempu-college.git
git branch -M main
git push -u origin main
```

#### Step 2: Connect to Netlify
1. Go to https://app.netlify.com/start
2. Select "GitHub" and authorize
3. Select your `kuvempu-college` repository
4. Click "Deploy"
5. Your site will auto-deploy on every push!

### Option 3: Using Netlify CLI
```bash
# Install Netlify CLI (if you have Node.js)
npm install -g netlify-cli

# Deploy from the project directory
netlify deploy --prod --dir=.
```

## 💾 Local Development

No build process needed! Just open `index.html` in a browser:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Or use any local server - the site is pure HTML/CSS/JS
```

Then visit: http://localhost:8000

## 🔧 Admin Panel Access

1. Click "Admin" link in the header OR
2. Go to: `yoursite.com/admin.html` (replace with your Netlify URL)

### Default Admin Dashboard Features:
- **Faculty Management**: Add, edit, delete faculty
- **Photo Upload**: Upload professional photos for each member
- **Logo Upload**: Custom college logo (appears in header)
- **Data Backup**: Download all data as JSON backup file
- **Data Restore**: Upload a previous backup to restore

## 📝 Weekly Content Updates

To update content weekly:

1. **Edit Faculty**: Admin panel → Faculty Management
2. **Update Photos**: Admin panel → Member Photos
3. **Backup Changes**: Admin panel → Download Backup (recommended weekly)
4. **Data Persists**: All changes saved in browser's localStorage

### Pro Tip: Automated Backups
Create a backup after each update to protect data:
- Admin Panel → Backup Data → Download Backup
- Store safely or version control it

## 🎨 Customization

### Change College Information
Edit `index.html`:
- College name, address, contact details
- Phone numbers and email addresses
- Course details and eligibility criteria

### Change Colors
Edit `styles.css` (first section):
```css
:root {
    --primary-blue: #1e3a8a;      /* Main color */
    --accent-gold: #b8860b;        /* Accent color */
    /* ... other colors ... */
}
```

### Add More Faculty
- **Via Admin Panel**: Admin → Faculty Management → Add New
- **Or Edit HTML**: Add faculty to `DEFAULT_FACULTY` in `admin.js`

## 🔐 Data Security

⚠️ **Important Notes:**
- Data is stored in **browser's localStorage** (not on servers)
- Data is **private to each visitor's browser**
- Data **does NOT sync** between devices automatically
- **Always backup data regularly** (Admin → Backup)
- For persistent backend, consider upgrading to:
  - Firebase Realtime Database
  - MongoDB
  - Custom Node.js backend

## 📱 Browser Compatibility

✅ Works on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🆘 Troubleshooting

### Photos Not Showing After Refresh?
- localStorage may be cleared → Re-upload photos
- Use Admin → Backup to save data

### Admin Panel Not Loading?
- Clear browser cache (Ctrl+Shift+Delete)
- Check if JavaScript is enabled

### Netlify Deployment Issues?
- Ensure all files are uploaded (index.html, admin.html, styles.css, script.js, admin.js)
- Check Netlify Build Logs: Site Settings → Deploys → Recent deploys

## 📧 Contact Information

**College Details:**
- Address: No.10, near Janapriya Apartment, Kadabagere, Bangalore – 562130
- Phone: 9886129222 / 9663695361
- Email: kuvempulawclg@gmail.com

## 📄 License

This website is created for RASHTRAKAVI KUVEMPU COLLEGE OF LAW. All content rights reserved.

---

**Last Updated**: 2024
**Version**: 1.0
**Theme**: Elite Blue & Gold
