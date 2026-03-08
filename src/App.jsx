import './App.css'
import image from "./assets/IMG_8005.PNG" 
import { useState } from 'react'

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
         
         <img src={image} alt="not working"/>
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
    </>
  )
}

function Project() {
  return (
    <>
      <p>my projects</p>
    </>
  )
}

function Blog() {
  return (
    <>
      <p>my blog</p>
    </>
  )
}

function Page() {
  const [currentPage, SetCurrentPage] = useState("Home");

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
