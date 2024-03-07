import React from "react"
import { Link } from "react-router-dom"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle="Let's grow together" title='Best Online Education Expertise' />
            <p>Open up a world of possibilities. Affordable education, limitless learning</p>
            <div className='button'>
            <Link to='/about'>
              <button className="primary-btn btn">
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              </Link>
              <Link to="/courses">
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}
export default Hero
