import { Body } from "./components/Body"
import Footer from "./components/Footer"
import { Navbar } from "./components/Navbar"


function App() {
  

  return (
    <>
      <div className="flex flex-col items-center p-8 rounded-lg max-w-md mx-auto mt-20">
        <Navbar/>
        <Body/>
        <Footer/>
      </div>
    </>
  )
}

export default App
