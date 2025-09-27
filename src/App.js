import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 100
    })
  }, [])

  return (
    <div className="App">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out">
              <h3 className="hero-title">
                I'm <span className="highlight">Jaskaran Singh</span>
              </h3>
              <h2 className="hero-subtitle">Wedding Photographer & Videographer</h2>
              <p className="hero-description">
                I capture real moments, emotions, and stories through my lens — both in photos and cinematic videos.
              </p>
              <p className="hero-tagline">
                Let's turn your special day into unforgettable memories.
              </p>
              <button className="cta-button" onClick={() => window.location.href = 'https://www.instagram.com/jass_____karxn?igsh=NjFzbjVxeTg0ZmNz'}>Get In Touch</button>
            </div>
            <div className="hero-image" data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-out">
              <div className="image-container">
                <img src="/js3.jpg" alt="Jaskran - Wedding Photographer" className="profile-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-content">
            <div className="about-image" data-aos="fade-right" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
              <div className="about-image-container">
                <img src="/js2.jpg" alt="Jaskran at work" className="about-img" />
              </div>
            </div>
            <div className="about-text" data-aos="fade-left" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
              <h2 className="about-title">Professional Wedding Photographer & Cinematic Videographer</h2>
              <p className="about-description">
                I'm a passionate visual storyteller who captures timeless moments through the lens. Whether it's the emotions of a wedding day, the fine details of a ceremony, or cinematic video highlights, I bring every frame to life.
              </p>
              <p className="about-description">
                With years of hands-on experience, I specialize in both photography and video production—delivering stunning visuals that speak louder than words. From creative compositions to high-quality editing, I aim to turn memories into unforgettable art.
              </p>
              <p className="about-cta">
                Let's create something beautiful together.
              </p>
              <button className="about-button" onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>View My Work</button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="skills-container">
          <div className="skills-header" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out">
            <h2 className="skills-title">My Photography & Videography Skills</h2>
            <p className="skills-subtitle">Capturing moments that last forever</p>
          </div>
          
          <div className="carousel-container" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out" data-aos-delay="200">
            <div className="carousel-track">
              <div className="carousel-slide">
                <div className="skill-card">
                  <img src="/sho1.jpg" alt="Portfolio Image 1" />
                </div>
              </div>
              
              <div className="carousel-slide">
                <div className="skill-card">
                  <img src="/sho2.jpg" alt="Portfolio Image 2" />
                </div>
              </div>
              
              <div className="carousel-slide">
                <div className="skill-card">
                  <img src="/sho3.jpg" alt="Portfolio Image 3" />
                </div>
              </div>
              
              <div className="carousel-slide">
                <div className="skill-card">
                  <img src="/sho4.jpg" alt="Portfolio Image 4" />
                </div>
              </div>
              
              <div className="carousel-slide">
                <div className="skill-card">
                  <img src="/sho5.jpg" alt="Portfolio Image 5" />
                </div>
              </div>
              
              <div className="carousel-slide">
                <div className="skill-card">
                  <img src="/sho6.jpg" alt="Portfolio Image 6" />
                </div>
              </div>
              
              <div className="carousel-slide">
                <div className="skill-card">
                  <img src="/sho7.jpg" alt="Portfolio Image 7" />
                </div>
              </div>
              
              <div className="carousel-slide">
                <div className="skill-card">
                  <img src="/sho8.jpg" alt="Portfolio Image 8" />
                </div>
              </div>
        
              
              <div className="carousel-slide">
                <div className="skill-card">
                  <img src="/sho10.jpg" alt="Portfolio Image 10" />
                </div>
              </div>
              
              <div className="carousel-slide">
                <div className="skill-card">
                  <img src="/sho11.jpg" alt="Portfolio Image 11" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App