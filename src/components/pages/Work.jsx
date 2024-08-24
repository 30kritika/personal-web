import Navbar from './Navbar'
import '/src/components/styles/work.css'
// import Internship from '/src/components/pages/Internship'
import Projects from './Projects'

const Work = () => {
  return (
    <div className='work container'>
      <Navbar/>
      <Projects/>
      {/* <Internship />  */}
    </div>
  )
}

export default Work
