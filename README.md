# AksharTech Website

A modern, responsive website for AksharTech IT services company built with React and Flask.

## Features

- 📱 Responsive design that works across all devices
- 🎨 Modern UI with animations and transitions
- 🔒 Secure admin interface for content management
- 📊 Visitor tracking and analytics dashboard
- 🛠️ Dockerized deployment for easy setup
- 🔄 CI/CD pipeline with GitHub Actions

## Technology Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- Axios for API communication

### Backend
- Flask web framework
- SQLAlchemy ORM
- Flask-Admin for content management
- Flask-Login for authentication
- SQLite database (extensible to PostgreSQL)

### Infrastructure
- Docker for containerization
- Nginx for serving the frontend
- GitHub Actions for CI/CD
- Cloudflare for CDN (future deployment)

## Project Structure

```
akshartech/
├── backend/                  # Flask backend
│   ├── models/               # Database models
│   ├── routes/               # API endpoints
│   ├── forms/                # Form definitions
│   ├── admin/                # Admin interface
│   ├── app.py                # Application entry point
│   └── Dockerfile            # Backend container definition
│
├── frontend/                 # React frontend
│   └── akshartech-frontend/
│       ├── src/
│       │   ├── components/   # Reusable UI components
│       │   ├── pages/        # Page components
│       │   ├── services/     # API services
│       │   ├── App.tsx       # Main application component
│       │   └── index.css     # Global styles
│       ├── nginx/            # Nginx configuration
│       └── Dockerfile        # Frontend container definition
│
├── .github/
│   └── workflows/            # GitHub Actions CI/CD
│
└── docker-compose.yml        # Docker compose configuration
```

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Git

### Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/akshartech.git
   cd akshartech
   ```

2. Start the development environment:
   ```bash
   docker-compose up
   ```

3. Access the website at http://localhost:80

4. Access the admin interface at http://localhost:5000/admin

### Development Workflow

#### Backend Development

1. Make changes to the Flask backend code
2. The changes will be automatically applied due to the volume mount in docker-compose.yml

#### Frontend Development

1. Navigate to the frontend directory:
   ```bash
   cd frontend/akshartech-frontend
   ```

2. Install dependencies (first time only):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Access the frontend at http://localhost:3000

## Deployment

### Using Docker Compose (Local Deployment)

1. Build and start the containers:
   ```bash
   docker-compose up -d --build
   ```

2. Access the website at http://localhost:80

### Using GitHub Actions (CI/CD)

The project includes GitHub Actions workflows that:

1. Build and test the application
2. Build Docker images
3. Push the images to GitHub Container Registry
4. Deploy to a self-hosted runner (for local deployment)

To use this workflow:

1. Set up a self-hosted GitHub Actions runner on your server
2. Push your code to the main branch
3. The workflow will automatically build, test, and deploy the application

### Future Cloudflare Deployment

To deploy using the akshartech.us domain with Cloudflare:

1. Configure DNS settings in Cloudflare to point to your server
2. Update the Nginx configuration to use the custom domain
3. Set up SSL certificates using Cloudflare's SSL options

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
