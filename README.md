# Portfolio Website

A modern, responsive portfolio website built with React (frontend) and Node.js/Express (backend).

## Features

- ✨ Modern and responsive design
- 🎨 Beautiful gradient animations
- 📱 Mobile-friendly
- 📧 Contact form with email functionality
- 🚀 Fast and optimized
- 💼 Professional portfolio sections

## Tech Stack

### Frontend
- React
- Framer Motion (animations)
- React Router
- Axios (HTTP client)
- CSS3 with custom animations

### Backend
- Node.js
- Express.js
- Nodemailer (email functionality)
- CORS enabled

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd c:\Users\User\OneDrive\Desktop\portfolio
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   - Edit the `.env` file in the root directory
   - Add your email credentials for the contact form:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

### Running the Application

**Development Mode (recommended for development):**
```bash
npm run dev
```
This will start both the React development server (port 3000) and the Express server (port 5000) concurrently.

**Or run them separately:**

**Start the backend server:**
```bash
npm run server
```

**Start the frontend (in a new terminal):**
```bash
npm run client
```

**Production Build:**
```bash
npm run build
npm start
```

### Accessing the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

## Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.js         # Main App component
│   │   └── App.css        # Global styles
│   └── package.json       # Frontend dependencies
├── server/                # Node.js backend
│   ├── routes/            # API routes
│   └── index.js          # Express server
├── .env                  # Environment variables
├── package.json          # Backend dependencies
└── README.md             # This file
```

## Customization

### Personal Information
Update the following files with your information:
- `client/src/components/Hero.js` - Your name and title
- `client/src/components/About.js` - Your background and experience
- `client/src/components/Skills.js` - Your technical skills
- `client/src/components/Projects.js` - Your projects
- `client/src/components/Contact.js` - Your contact information

### Styling
- Modify CSS files in `client/src/components/` to customize the design
- Update colors, fonts, and animations in the respective CSS files

### Email Configuration
For the contact form to work:
1. Use Gmail and enable 2-factor authentication
2. Generate an App Password
3. Update the `.env` file with your credentials

## Available Scripts

- `npm run dev` - Run both frontend and backend in development mode
- `npm run server` - Run only the backend server
- `npm run client` - Run only the frontend
- `npm run build` - Build the React app for production
- `npm start` - Run the production server
- `npm run install-all` - Install all dependencies (frontend and backend)

## Deployment

1. Build the React app: `npm run build`
2. Deploy the entire project to your hosting platform
3. Make sure to set environment variables on your hosting platform
4. The Express server will serve the built React app in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).
