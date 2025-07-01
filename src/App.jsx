import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Preview from './components/Preview'
import ForEducators from './components/ForEducators'
import ParentsPortal from './components/ForParents'

export default function App() {

  return (
    <div className='flex flex-col bg-gradient-to-r bg-parchment'>
    <Header />
      <div className='w-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/preview' element={<Preview />} />
          <Route path='/forEducators' element={<ForEducators />} />
          <Route path='/forParents' element={<ParentsPortal />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}