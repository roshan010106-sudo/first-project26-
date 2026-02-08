# Portfolio Website - Setup Instructions

## Quick Start Guide

Follow these simple steps to get your portfolio website running locally.

## Prerequisites

Before you begin, make sure you have:
- **Node.js** installed (version 14 or higher)
  - Check by running: `node --version`
  - Download from: https://nodejs.org/

## Step-by-Step Setup

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- express (web server)
- @supabase/supabase-js (database)
- cors (cross-origin support)
- dotenv (environment variables)

### Step 2: Verify Environment Variables

The `.env` file should already be configured with Supabase credentials:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

If not, add these variables to the `.env` file.

### Step 3: Start the Server

Run the development server:

```bash
npm start
```

You should see:
```
🚀 Server is running on http://localhost:3000
📊 Health check: http://localhost:3000/api/health
```

### Step 4: Open in Browser

Open your browser and navigate to:
```
http://localhost:3000
```

You should see your portfolio website with all animations and features working!

## Testing Features

### 1. Test Navigation
- Click on navigation links to scroll to sections
- Scroll down to see navbar hide/show behavior
- Resize browser to test mobile hamburger menu

### 2. Test Theme Toggle
- Click the moon/sun icon in the navbar
- Theme should switch between dark and light modes
- Preference is saved in localStorage

### 3. Test Animations
- Scroll through the page to see elements fade in
- Watch the typewriter effect in hero section
- Observe statistics counter animation
- See skill bars animate on scroll

### 4. Test Project Filtering
- Click filter buttons (All, Web Apps, Mobile, Design)
- Projects should filter dynamically

### 5. Test Contact Form
- Fill out the contact form
- Submit with valid data
- Check for success message
- Verify data is saved in Supabase

### 6. Test Scroll to Top
- Scroll down the page
- Click the floating button in bottom-right
- Page should scroll smoothly to top

## API Endpoints Testing

### Health Check
```bash
curl http://localhost:3000/api/health
```

### Submit Contact Form (via curl)
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

### Get All Messages
```bash
curl http://localhost:3000/api/messages
```

## Project Structure Overview

```
portfolio-website/
├── public/                 # Frontend files (static assets)
│   ├── index.html         # Main HTML file
│   ├── 404.html           # Custom 404 page
│   ├── css/
│   │   └── style.css      # All styles and animations
│   └── js/
│       ├── main.js        # Main JavaScript functionality
│       └── projects-data.js  # Project data
├── server/                # Backend files
│   └── index.js          # Express server and API routes
├── .env                  # Environment variables
├── package.json          # Dependencies and scripts
├── README.md             # Full documentation
└── SETUP.md             # This file
```

## Common Issues & Solutions

### Issue 1: Port Already in Use
**Error**: `Port 3000 is already in use`

**Solution**: Either stop the other process or change the port:
```javascript
// In server/index.js, change:
const PORT = process.env.PORT || 3001;
```

### Issue 2: Database Connection Failed
**Error**: Supabase connection errors

**Solution**:
1. Check `.env` file has correct credentials
2. Verify Supabase project is active
3. Check internet connection

### Issue 3: Form Submission Not Working
**Error**: Form doesn't submit or shows error

**Solution**:
1. Open browser console (F12) and check for errors
2. Verify server is running on port 3000
3. Check Supabase RLS policies allow inserts

### Issue 4: Animations Not Working
**Issue**: No animations on page

**Solution**:
1. Clear browser cache (Ctrl+Shift+R)
2. Check if JavaScript is enabled
3. Try a different browser

## Customization

### Update Your Information

1. **Personal Details** - Edit `public/index.html`:
   - Line 50: Change name in hero section
   - Line 170-180: Update About Me content
   - Line 400-420: Update contact information

2. **Projects** - Edit `public/js/projects-data.js`:
   - Add/remove/edit projects in the array
   - Change categories, titles, descriptions

3. **Skills** - Edit `public/index.html`:
   - Lines 250-300: Update skill names and percentages
   - Add new skill categories as needed

4. **Colors & Theme** - Edit `public/css/style.css`:
   - Lines 1-15: CSS custom properties
   - Change colors, fonts, spacing

### Add New Sections

1. Add HTML in `public/index.html`
2. Add styles in `public/css/style.css`
3. Add JavaScript functionality in `public/js/main.js` if needed
4. Add navigation link in navbar

## Development Tips

### Live Reload
For automatic reloading during development, consider installing nodemon:
```bash
npm install -g nodemon
nodemon server/index.js
```

### Debugging
- Use browser DevTools (F12) for frontend debugging
- Add `console.log()` statements in JavaScript
- Check Network tab for API requests
- Use `console.error()` for error tracking

### Performance Testing
- Use Lighthouse in Chrome DevTools
- Test on multiple devices and browsers
- Check page load speed
- Verify animations are smooth

## Deployment Ready

Once everything works locally, you're ready to deploy! See README.md for deployment options:
- Heroku
- Vercel
- Netlify
- DigitalOcean
- AWS

## Need Help?

Common resources:
- Check browser console for errors
- Review server logs in terminal
- Verify all files are saved
- Check Supabase dashboard for database issues
- Review the README.md for detailed documentation

## What's Next?

After getting it running:
1. Customize content with your information
2. Add your own projects
3. Upload images to assets folder
4. Test all features thoroughly
5. Deploy to production
6. Share your amazing portfolio!

---

**Enjoy your new interactive portfolio website! 🚀**
