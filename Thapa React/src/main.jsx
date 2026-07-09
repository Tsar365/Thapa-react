// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Movie from './movie.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
<Movie/>
  // {/* </StrictMode>, */}
)
