// Step 1: Import Routes and Route from react-router-dom
// Routes = container for all your routes
// Route = defines a single route (path + component)
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'

// Step 2: Import our page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      {/* Navbar appears on ALL pages */}
      <Navbar />

      {/* Routes defines which component to show based on the URL */}
      <Routes>
        {/* When URL is "/", show Home component */}
        <Route path="/" element={<Home />} />

        {/* When URL is "/about", show About component */}
        <Route path="/about" element={<About />} />

        {/* When URL is "/contact", show Contact component */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
