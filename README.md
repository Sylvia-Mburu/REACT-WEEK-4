DAILY TASKS
A modern, responsive Student Management System built with React, Vite, and Tailwind CSS. This application allows you to create, read, update, and delete student records with a clean and intuitive interface.

🚀 Features
✨ Create new tasks:Add tasks with title, description, due date, priority, and tags.
📝 Edit tasks inline from the task card.
🗑️ Delete tasks from the list.
Mark tasks complete with a single click.
📱 Responsive Design: Built with Tailwind CSS for a mobile-friendly experience
⚡ Fast Development: Powered by Vite for lightning-fast HMR (Hot Module Replacement)
🎨 Modern UI: Clean, card-based interface with smooth interactions
🛠️ Tech Stack
React 19.1.1 - UI Library
Vite 7.1.7 - Build Tool & Dev Server
Tailwind CSS 4.1.14 - Utility-first CSS Framework
ESLint - Code Linting
React Compiler - Optimized React performance
📋 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v18 or higher)
npm or yarn package manager
🔧 Installation
Clone the repository

Install dependencies

npm install
Start the development server

npm run dev
Open your browser Navigate to http://localhost:5173 (or the port shown in your terminal)

📁 Project Structure
daily-tasks/
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   └── logo.svg
│   │
│   ├── components/
│   │   ├── Header.jsx          # Top navigation bar with app title
│   │   ├── TaskCard.jsx        # Individual task card with edit/delete
│   │   └── TaskForm.jsx        # Form for adding or editing tasks
│   │
│   ├── pages/
│   │   ├── Home.jsx            # Main dashboard or landing page
│   │   └── Tasks.jsx           # Page listing all tasks
│   │
│   ├── lib/
│   │   └── api.js              # API functions for CRUD operations
│   │
│   ├── hooks/
│   │   └── useTasks.js         # Custom hook for task state and logic
│   │
│   ├── context/
│   │   └── TaskContext.jsx     # React context for global task state
│   │
│   ├── utils/
│   │   └── formatDate.js       # Utility function to format dates
│   │
│   ├── App.jsx                 # Root component with routes
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global Tailwind CSS styles
│
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── tailwind.config.cjs
├── vite.config.js
└── README.md

🎯 Available Scripts
npm run dev - Start development server
npm run build - Build for production
npm run lint - Run ESLint
npm run preview - Preview production build
🔌 API Integration
The application expects a backend API with the following endpoints:

GET /api/tasks - get all tasks

POST /api/tasks - create a task

PUT /api/tasks/:id - update a task

DELETE /api/tasks/:id - delete a task

🎨 Customization
Tailwind CSS
This project uses Tailwind CSS v4. To customize the styling:

Modify the index.css file for global styles
Use Tailwind utility classes directly in your components
Check Tailwind CSS Documentation for more options
React Compiler
The React Compiler is enabled for optimized performance. See the React Compiler Documentation for more information.

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

📝 License
This project is part of my learning in full stack software development

📚 Related Resources
React Documentation
Vite Documentation
Tailwind CSS Documentation
PLP MERN Stack Development
👥 Course Information
Week 3 Make-up Class - PLP MERN Stack Development, July Cohort


Built with ❤️ by SYLVIA MBURU