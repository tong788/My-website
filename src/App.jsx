import Home from './pages/Home'
import Profile from './pages/Profile'
import Achievement from './pages/Achievement'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="achievement" element={<Achievement />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
