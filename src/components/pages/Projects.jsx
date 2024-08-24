import Login from './project/login/Login'
import Weather from './project/weather/Weather'
import '/src/components/styles/project.css'
import University from '/src/components/pages/project/university/Uni'

const Projects = () => {
  return (
    <div className='pro container'>
        <div className='pro-head'>
            <h2>Projects</h2>
        </div>
        <Weather/>
            <Login/>
            <University />  
        
        
    </div>
  )
}

export default Projects
