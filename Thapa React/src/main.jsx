// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './Profile.jsx'
import App from './App.jsx'
import Movie from './Movie.jsx'
import EventHandling from './components/eventhandling/EventHandling.jsx'
import { EventProps } from './components/eventhandling/EventProps.jsx'
import { EventPropagation } from './components/eventhandling/EventPropagation.jsx'


createRoot(document.getElementById('root')).render(
<>
  {/* // <StrictMode> */}
    {/* <App /> */}
{/* <Movie/> */}
{/* <EventHandling></EventHandling> */}
{/* <EventProps/> */}
<EventPropagation/>
{/* <Profile/> */}
  // {/* </StrictMode>, */}
</>
)
