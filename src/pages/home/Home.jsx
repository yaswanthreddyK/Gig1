import React from 'react'
import Footer from '../../components/footer/Footer'
import "./Home.css"
import SearchBar from '../../components/searchBar/SearchBar'
function Home() {
  return (
    <main>
      <div className='home-1'>
      <div className='hero'>
        <div className='hero-content'>
          <h2 className='green'>Hire Sustainability, Climate Tech, ESG Professionals For Your Next Project</h2>
          <h2>Search For Projects that need your skills to accomplish the goals.</h2>
          <button>Get Started</button>
        </div>
      </div>
      </div>
      <div className='search'>
        <div className='search-div'>
       <SearchBar placeholder={"Type Job title, keywords"}/>
        </div>
      </div>

      <div className='home-2'>
        <div className='left-img-div'>
          <img src="../../../public/img/riverNtrees.jpg" loading='lazy' alt="" />
        </div>
        <div className='right-content'>
            <h2>For Sustainability Professionals</h2>

            <div className='sub-content-1'>
              <div className='sub-content-icon-div'>
                <img src="../../../public/img/grid.png"  alt="" />
              </div>
              <div className='sub-sub-content'>
                <p> Showcase your valuable skills and receive gig/job requirements direct to your inbox</p>
              </div>
            </div>
            <div className='sub-content-2'>
              <div className='sub-content-icon-div'>
                <img src="../../../public/img/search-gold.png"  alt="" />
              </div>
              <div className='sub-sub-content'>
                <p> Improve your ratings with every project completion. Request variable rates based on location, project complexity and duration</p>
              </div>
            </div>
            <div className='sub-content-3'>
              <div className='sub-content-icon-div'>
                <img src="../../../public/img/building.png"  alt="" />
              </div>
              <div className='sub-sub-content'>
                <p>Client Hirer contact you directly based on your skills, availability</p>
              </div>
            </div>

        </div>
      </div>

      <div className='home-3'>
        <div className='people-grid'>
          <img src="../../../public/img/peopleGrid.avif" loading="lazy" alt="" />
        </div>
        <div className='professional-content'>
          
          <h2>Green Gig Hiring Made Easy</h2>
          <p>Connecting hiring teams with skilled sustainability professionals globally Real time and fit for project hiring.</p>
          <p>Search and Book Sustainability Skilled Professionals Based on Project Requirements</p>
          <button>POST A JOB</button>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Home