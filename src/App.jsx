import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'


import Layout from './components/Layout'

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
