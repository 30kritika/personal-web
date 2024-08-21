import Navbar from './Navbar'
import '/src/components/styles/about.css'
import main from '/src/main.jpeg'
const About = () => {
  return (
    <div className='about'>
    <Navbar/>
      <div className='about-left'>
        <img src={main} alt='' className='about-img'/>
      </div>
      <div className='about-right'>
        <h2>About </h2>
      </div>
    </div>
  )
}

export default About
