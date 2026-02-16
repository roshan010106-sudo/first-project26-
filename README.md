# Modern Interactive Portfolio Website

A stunning, unique, and highly interactive personal portfolio website built with modern web technologies. Features advanced JavaScript animations, glassmorphism design, dark/light mode toggle, and a fully functional contact form backed by Supabase.

## Features

### Design & UI/UX
- **Unique Modern Design** - Glassmorphism effects with smooth animations
- **Dark/Light Mode** - Theme switcher with localStorage persistence
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Custom Cursor** - Interactive cursor animation (desktop only)
- **Loading Animation** - Beautiful loading screen on initial page load
- **Smooth Scrolling** - Seamless navigation between sections

### Interactive JavaScript Features
- **Typewriter Effect** - Animated text in hero section
- **Scroll Animations** - Elements fade in as you scroll using Intersection Observer API
- **Animated Statistics Counter** - Numbers count up when scrolled into view
- **Skill Progress Bars** - Animated skill bars with percentage indicators
- **Dynamic Project Cards** - Projects loaded and filtered using JavaScript
- **Project Filtering** - Filter projects by category (All, Web Apps, Mobile, Design)
- **Form Validation** - Real-time client-side validation with error messages
- **Scroll-to-Top Button** - Appears when scrolling down the page
- **Active Navigation** - Navigation links highlight based on scroll position
- **Hamburger Menu** - Responsive mobile navigation

### Backend & Database
- **Node.js + Express** - RESTful API for contact form
- **Supabase Database** - Contact form submissions stored securely
- **Form Submission** - Async form submission without page reload
- **Data Validation** - Server-side validation for security
- **Row Level Security** - RLS policies for secure data access

## Project Structure

```
portfolio-website/
├── public/
│   ├── css/
│   │   └── style.css           # All styles with animations
│   ├── js/
│   │   ├── main.js             # Main JavaScript functionality
│   │   └── projects-data.js    # Project data array
│   ├── assets/
│   │   └── images/             # Image assets
│   └── index.html              # Main HTML file
├── server/
│   └── index.js                # Express server with API endpoints
├── .env                        # Environment variables (Supabase credentials)
├── package.json                # Project dependencies
└── README.md                   # Project documentation
```

## Technologies Used

### Frontend
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with Flexbox, Grid, animations
- **JavaScript (ES6+)** - Advanced interactive features
  - DOM Manipulation
  - Event Delegation
  - Intersection Observer API
  - Fetch API
  - LocalStorage API

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Supabase** - Database (PostgreSQL)
- **dotenv** - Environment variable management
- **cors** - Cross-Origin Resource Sharing

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Environment Variables
The `.env` file is already configured with Supabase credentials:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Step 3: Run the Project
```bash
npm start
```

The server will start on `http://localhost:3000`

### Step 4: Build (if needed)
```bash
npm run build
```

## API Endpoints

### POST /api/contact
Submit a contact form message
- **Body**: `{ name, email, message }`
- **Response**: Success/error with message details

### GET /api/messages
Retrieve all contact messages (requires authentication)
- **Response**: Array of contact messages

### GET /api/health
Check server health status
- **Response**: `{ status: 'ok', message: 'Server is running' }`

## Database Schema

### contact_messages Table
- `id` (uuid) - Primary key
- `name` (text) - Sender's name
- `email` (text) - Sender's email
- `message` (text) - Message content
- `created_at` (timestamptz) - Submission timestamp
- `read` (boolean) - Message read status

### Row Level Security (RLS)
- Public insert access for contact form
- Authenticated read access for viewing messages
- Authenticated update access for marking as read

## Key JavaScript Features Explained

### 1. Custom Cursor Animation
Creates a custom cursor with a follower that smoothly tracks mouse movement using requestAnimationFrame for optimal performance.

### 2. Typewriter Effect
Displays rotating text with a typing animation, automatically cycling through different titles.

### 3. Intersection Observer
Efficiently detects when elements enter the viewport to trigger animations, improving performance over scroll event listeners.

### 4. Statistics Counter
Animates numbers counting up from 0 to their target values when scrolled into view.

### 5. Skill Progress Bars
Animates skill bars to their specified percentages with staggered timing for visual appeal.

### 6. Dynamic Project Filtering
Filters and re-renders project cards based on selected category without page reload.

### 7. Form Validation
Validates form fields in real-time with custom error messages and visual feedback.

### 8. Theme Toggle
Switches between dark and light themes, saving preference to localStorage for persistence.

### 9. Smooth Scroll
Implements smooth scrolling to anchor links with proper offset for fixed navigation.

### 10. Navigation State Management
Automatically updates active navigation link based on scroll position and hides navbar on scroll down.

## Customization Guide

### Update Personal Information
Edit `public/index.html`:
- Hero section text and description
- About me content and timeline
- Skills and percentages
- Contact information

### Add/Edit Projects
Edit `public/js/projects-data.js`:
```javascript
{
    id: 13,
    title: "Your Project",
    description: "Project description",
    category: "web", // web, mobile, or design
    tags: ["React", "Node.js"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
}
```

### Customize Colors
Edit CSS custom properties in `public/css/style.css`:
```css
:root {
    --primary-color: #00d4ff;
    --secondary-color: #0099ff;
    --accent-color: #00ffaa;
    /* ... more variables */
}
```

### Modify Animations
Adjust animation timings in `public/css/style.css`:
```css
@keyframes fadeInUp {
    /* Animation keyframes */
}
```

## Deployment Options

### Option 1: Traditional Hosting (Heroku, DigitalOcean, AWS)
1. Set up environment variables on hosting platform
2. Deploy code via Git or CLI
3. Ensure Node.js runtime is available
4. Start server with `npm start`

### Option 2: Vercel/Netlify (Serverless)
1. Connect Git repository
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `public`
3. Set environment variables in dashboard
4. Deploy automatically on push

### Option 3: Static Hosting + Supabase Functions
1. Deploy frontend to static hosting (Netlify, Vercel)
2. Convert API routes to Supabase Edge Functions
3. Update API endpoints in JavaScript

## Performance Optimizations

- **Lazy Loading** - Images and animations load only when needed
- **RequestAnimationFrame** - Smooth cursor animation without performance issues
- **Intersection Observer** - Efficient scroll-based animations
- **CSS Transforms** - Hardware-accelerated animations
- **Minimal Dependencies** - Lightweight with no heavy frameworks
- **Event Delegation** - Efficient event handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Security Features

- Input validation (client and server)
- SQL injection protection (Supabase parameterized queries)
- XSS prevention (sanitized inputs)
- Row Level Security (RLS) policies
- CORS configuration
- Environment variable protection

## Future Enhancements

- Blog section with CMS integration
- Contact form email notifications
- Project detail pages with modals
- Testimonials section
- Resume download functionality
- Analytics integration
- Image optimization
- PWA capabilities
- Multi-language support

## Troubleshooting

### Port Already in Use
Change the port in `.env` or `server/index.js`:
```javascript
const PORT = process.env.PORT || 3001; // Changed from 3000
```

### Supabase Connection Issues
- Verify credentials in `.env` file
- Check Supabase project is active
- Ensure RLS policies are correctly set

### Form Submission Fails
- Check browser console for errors
- Verify API endpoint is accessible
- Check network tab for request details

## Credits

Built with creativity and modern web standards. No template used - completely custom design and implementation.

## License

MIT License - Feel free to use this project for your own portfolio!

---

**Made with JavaScript, creativity, and attention to detail.**
"# first-project26-" 
"# first-project26-" 
"# first-project26-" 
"# first-project26-" 
