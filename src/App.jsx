import './App.css'
import image from "./assets/IMG_8005.PNG"
import { useState } from 'react'

import { motion } from "motion/react"






function Header({ SetCurrentPage }) {
  return (
    <header>
      <p>Fossele Wilfried</p>
      <nav className='navBar'>
        <button onClick={() => { SetCurrentPage("Home") }}> <a href='#'>Home</a> </button>
        <button onClick={() => { SetCurrentPage("About") }}>  <a href="#">About</a></button>
        <button onClick={() => { SetCurrentPage("Project") }}>  <a href="#">Project</a> </button>
        <button onClick={() => { SetCurrentPage("Blog") }}>  <a href="#">Blog</a> </button>




      </nav>
      <p>Download Resume</p>
    </header>
  )
}


function SocialMedia() {
  return (
    <div className='myAccounts'>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )

}

function Footer() {
  return (
    <footer>
      <p>all right reserved</p>
      <div className='footer_left'>
        <div>Projects</div>
        <div>Blog</div>
        <SocialMedia />
      </div>
    </footer>
  )
}

function Overview() {
  return (
    <div className='overview-container'>
      <div className='overview_content'>
        <div >
          <h1><span>Fossele Tazon</span> <br /> <span>Wilfried</span></h1>
          <p className='experience'></p>
        </div>

        <img src={image} alt="not working" />
      </div>

      <div className='get_to_know_me'>
        <button>Explore my journey</button><button className='download_Resume'> Download Resume</button>
      </div>
      <SocialMedia />

    </div>
  )

}

function InfoCards() {
  return (
    <div className='cards_container'>
      <div className='overview'></div>
      <div className='card'>
        <div className='card1'>experience</div>
        <div className='card2'>stories</div>
        <div className='card3'>archievement</div>
      </div>

    </div>
  )
}

function Home() {
  return (
    <>
      <Overview />
      <InfoCards />
    </>
  )
}

function About() {
  return (
    <>
      <p>About me</p>
      <motion.div
        animate={{
          scale: 2,
          transition: { duration: 2 }
        }}
      />
    </>
  )
}

function Project() {
  return (
    <>
      <p>my projects</p>
    
      
      <Feedback />
      <Drag/>
    </>
  )
}

function Feedback() {
  const [btn, setBtn] = useState(true)
  return (
    <div className={btn ? "nvisi" : "btn-container"}>
      <button className={btn ? 'btn' : 'dis-btn'} onClick={() => { setBtn(!btn) }}>Send feed back</button>
      <input className={btn ? "dis-btn-container" : "btn-container"} type='text' placeholder='Any feedbacks?' />
    </div>
  )
}

function Drag(){
return(
  <motion.div drag
  dragConstraints={{
    left: -50,
    top:-50,
    rigth: 50,
    bottom: 50
  }}
  dragElastic={0.3}
  > 
      drag me around
  </motion.div>
)

}

function Blog() {


  return (
    <>
      <p>my blog</p>
      <h2>Writings</h2>
      <div>
        <span id='caption'><a href="#">Caption</a></span>
        <p>little description</p>
        <p>date</p>
      </div>
      <div>
        <span className='caption'><a href="#">Caption</a></span>
        <p>little description</p>
        <p>date</p>
      </div>
    </>
  )
}

function Page() {
  const [currentPage, SetCurrentPage] = useState("Project");

  return (
    <div>
      <Header SetCurrentPage={SetCurrentPage} />
      <main>
        {currentPage === "Home" && <Home />}
        {currentPage === "About" && <About />}
        {currentPage === "Project" && <Project />}
        {currentPage === "Blog" && <Blog />}

      </main>

      <Footer />
    </div>

  )
}

function App() {

  return (
    <>
      <Page />
    </>
  )
}

export default App
