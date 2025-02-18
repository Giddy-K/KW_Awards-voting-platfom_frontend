# KW Awards Voting Platform Frontend

A React-based web application for managing and voting in the KW Awards ceremony. The platform includes user registration, voting system, admin dashboard, and various other features.

## 🚀 Features

- User registration for nominees
- Voting system
- Admin dashboard with statistics and charts
- Responsive design for mobile and desktop
- Real-time data visualization
- Genre-based filtering
- Search functionality
- Artist approval system

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## ⚙️ Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd kw-awards-voting-platfom-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Tech Stack

- **React** (v18.3.1) - Frontend framework
- **Redux Toolkit** (v2.5.1) - State management
- **React Router DOM** (v6.29.0) - Routing
- **Recharts** (v2.15.1) - Data visualization
- **Lucide React** (v0.263.1) - Icons
- **Tailwind CSS** (v3.4.17) - Styling
- **Vite** (v6.1.0) - Build tool

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Navbar/          # Navigation component
│   └── store/           # Redux store configuration
│       └── slices/      # Redux slices
├── pages/               # Page components
│   ├── Register/        # Nominee registration
│   └── admin/          # Admin dashboard
├── assets/             # Static assets
└── App.jsx             # Main application component
```

## 🔄 Component Relationships

### App.jsx
- Main application component
- Sets up routing using React Router
- Integrates Redux store
- Includes Navbar component
- Defines routes for different pages

### Components

#### Navbar (components/Navbar/index.jsx)
- Responsive navigation bar
- Handles mobile menu toggle
- Contains links to all major sections
- Sticky positioning for better UX

#### Store (components/store/Store.jsx)
- Configures Redux store
- Integrates dashboard reducer

#### Dashboard Slice (components/store/slices/dashboardSlice.jsx)
- Manages dashboard state
- Includes reducers for stats, pending artists, and recent votes
- Defines initial state and actions

### Pages

#### Register (pages/Register/index.jsx)
- Nominee registration form
- Handles form state using React useState
- Form validation and submission logic

#### AdminDashboard (pages/admin/AdminDashBoard.jsx)
- Comprehensive dashboard with statistics
- Integrates charts using Recharts
- Includes filtering and search functionality
- Shows pending approvals and recent votes
- Responsive design with sidebar navigation

## 🎨 Styling

The project uses Tailwind CSS for styling with:
- Responsive design principles
- Custom color schemes
- Flexible grid layouts
- Interactive components
- Smooth transitions and animations

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 💡 Development Notes

1. **State Management**
   - Redux is used for global state management
   - Local state with useState for component-specific state
   - Redux slices for modular state management

2. **Routing**
   - Protected routes for admin section
   - Dynamic routing for different sections
   - Nested routes where applicable

3. **Performance**
   - Lazy loading for routes
   - Optimized chart rendering
   - Responsive image handling
   - Efficient state updates

4. **Best Practices**
   - Component reusability
   - Proper error handling
   - Consistent coding style
   - Mobile-first approach

## 🤝 Contributing

1. git add .
2. Create your feature branch (`git checkout -b feature/KW_Awards-voting-platfom_frontend`)
3. Commit your changes (`git commit -m 'Add some KW_Awards-voting-platfom_frontend'`)
4. Push to the branch (`git push origin feature/KW_Awards-voting-platfom_frontend`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.