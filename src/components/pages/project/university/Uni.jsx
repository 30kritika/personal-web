import '/src/components/pages/project/university/uni.css'
import uni from '/src/images/uni.jpg'
import { Link } from 'react-router-dom'
import { GrGithub } from "react-icons/gr";

const Uni = () => {
  return (
    <div className='project-card'>
        
            <img src={uni} className='project-image'/>
            <div className='project-details'>
                <h3>Weather App</h3>
                <p className='project-detail'>August 2024</p>
                <p className='project-description'>Weather app that fetches data from OpenWeatherMap 
                API and displays the current weather.</p>
                <div className='project-tags'>
                    <span className='react'>React JS</span>
                    <span className='javas'>JavaScript</span>
                    <span className='api'>API</span>
                    <span className='css'>CSS</span>
                </div>
                <Link to="https://learnnest.netlify.app/"><button className='project-button'>Website</button></Link>
                <Link to="https://github.com/30kritika/E-learning-"><button className='project-button right'><GrGithub /></button></Link>
            </div>
        </div> 
  )
}

export default Uni
