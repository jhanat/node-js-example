# Simple Node.js Server 🚀

A simple, ready-to-test Node.js project with Express.js framework, perfect for server testing and API development.

## 🎯 Features

- ✅ Express.js web server
- ✅ RESTful API endpoints
- ✅ CORS enabled
- ✅ Security headers (Helmet)
- ✅ Request logging (Morgan)
- ✅ Static file serving
- ✅ Error handling
- ✅ Health check endpoints
- ✅ Sample CRUD operations
- ✅ Beautiful test interface

## 🏗️ Project Structure

```
aws-session-2/
├── app.js              # Main application file
├── package.json        # Project dependencies and scripts
├── .gitignore         # Git ignore patterns
├── .env.example       # Environment variables example
├── routes/
│   └── api.js         # API route handlers
├── public/
│   ├── index.html     # Test interface
│   ├── styles.css     # Styling
│   └── script.js      # Client-side JavaScript
├── .vscode/
│   └── tasks.json     # VS Code tasks
└── .github/
    └── copilot-instructions.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **For development (with auto-restart):**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   - Main server: http://localhost:3000
   - Test interface: http://localhost:3000/index.html
   - Health check: http://localhost:3000/health

## 📡 API Endpoints

### Core Endpoints
- `GET /` - Welcome message with API information
- `GET /health` - Server health check
- `GET /api/health` - API health check

### User Management API
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID

### Example API Usage

**Get all users:**
```bash
curl http://localhost:3000/api/users
```

**Create a new user:**
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'
```

**Get specific user:**
```bash
curl http://localhost:3000/api/users/1
```

## 🎨 Test Interface

The project includes a beautiful web interface for testing the API:

1. Start the server (`npm start`)
2. Open http://localhost:3000
3. Use the test buttons to interact with the API
4. View responses in the result area

## 🛠️ Development

### Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (placeholder)

### VS Code Tasks

The project includes VS Code tasks for easy development:

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
2. Type "Tasks: Run Task"
3. Select from:
   - "Start Node.js Server"
   - "Start Development Server"
   - "Install Dependencies"

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
PORT=3000
NODE_ENV=development
```

## 🔧 Configuration

The server uses the following default configuration:

- **Port:** 3000 (configurable via PORT environment variable)
- **CORS:** Enabled for all origins
- **Logging:** Combined format via Morgan
- **Security:** Basic security headers via Helmet
- **Static Files:** Served from `/public` directory

## 📦 Dependencies

### Production Dependencies
- **express** - Fast, unopinionated web framework
- **cors** - Enable CORS with various options
- **helmet** - Secure Express apps with various HTTP headers
- **morgan** - HTTP request logger middleware

### Development Dependencies
- **nodemon** - Automatically restart server during development

## 🧪 Testing the Server

### Method 1: Web Interface
1. Start server: `npm start`
2. Open: http://localhost:3000
3. Click test buttons to interact with API

### Method 2: Command Line
```bash
# Test welcome endpoint
curl http://localhost:3000

# Test health check
curl http://localhost:3000/health

# Test API endpoints
curl http://localhost:3000/api/users
curl http://localhost:3000/api/users/1
```

### Method 3: Browser
- Navigate to http://localhost:3000 for the main API response
- Navigate to http://localhost:3000/index.html for the test interface

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**
   - Change the PORT in `.env` file or stop other services on port 3000

2. **Dependencies not installed:**
   - Run `npm install` in the project directory

3. **Node.js not found:**
   - Install Node.js from https://nodejs.org/

### Error Handling

The server includes comprehensive error handling:
- 404 for unknown routes
- 500 for server errors
- Validation errors for API endpoints
- Structured error responses in JSON format

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the package.json file for details.

## 🎉 Ready to Test!

Your Node.js server is now ready for testing! The server provides:

- ✅ RESTful API endpoints
- ✅ Interactive test interface
- ✅ Health monitoring
- ✅ Error handling
- ✅ Development tools
- ✅ Production ready

**Start testing:** Run `npm start` and visit http://localhost:3000
