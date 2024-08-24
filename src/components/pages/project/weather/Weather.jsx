import '/src/components/pages/project/weather/weather.css'
import weather from '/src/images/weather.jpg'
import { GrGithub } from "react-icons/gr";
import { Link } from 'react-router-dom'

const Weather = () => {
  return (
    <div className='project-card'>
        
            <img src={weather} className='project-image'/>
            <div className='project-details'>
                <h3>Weather App</h3>
                <p className='project-detail'>May 2024</p>
                <p className='project-description'>Weather app that fetches data from OpenWeatherMap 
                API and displays the current weather.</p>
                <div className='project-tags'>
                    <span className='html'>HTML</span>
                    <span className='javas'>JavaScript</span>
                    <span className='api'>API</span>
                    <span className='css'>CSS</span>
                </div>
                <Link to="https://weather-application-kraftshala.netlify.app/"><button className='project-button '>Website</button></Link>
                <Link to="https://github.com/30kritika/weather-app"><button className='project-button right'><GrGithub /></button></Link>
            </div>
        </div> 
  )
}

export default Weather
