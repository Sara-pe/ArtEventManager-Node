
import './App.css'
import { Header } from './layout/components/Header'
import { Footer } from './layout/components/Footer'
import { Outlet } from 'react-router'

function App() {


  return (
    <>
     <Header/>
     <main>
      <Outlet/>
     </main>
     <Footer/>
    </>
  )
}

export default App
