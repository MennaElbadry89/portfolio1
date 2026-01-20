import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/Contacts/Contact'
import Projects from './pages/projects/Projects'
import Skills from './pages/skills/Skills'


import Layout from './pages/layout/Layout'

function App() {

  const router = createBrowserRouter([
    {
      path : '/' ,
      element : <Layout />,
      children : [
        {path : "/" , element : <Home/>},
        {path : "about" , element : <About/>},
        {path : "contact" , element : <Contact/>},
        {path : "skills" , element : <Skills/>},
        {path : "projects" , element : <Projects/>},

      ]
    }
  ])
 

  return <RouterProvider router={router}/>
}

export default App
