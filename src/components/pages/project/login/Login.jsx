import '/src/components/pages/project/login/login.css'
import login from '/src/images/login.jpg'
import { Link } from 'react-router-dom'
import { GrGithub } from "react-icons/gr";

const Login = () => {
  return (
    <div className='project-card'>
        {/* login page  */}
            <img src={login} className='project-image'/>
            <div className='project-details'>
                <h3>Login Page</h3>
                <p className='project-detail'>July 2024</p>
                <p className='project-description'>Login page that takes 
                user input and validates it.</p>
                <div className='project-tags'>
                    <span className='react'>React JS</span>
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

export default Login
