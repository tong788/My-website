import Home from '../src/components/Home'
import Profile from '../src/components/Profile'
import Achievement from './components/Achievement'
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
