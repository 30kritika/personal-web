import Education from './Education'
import Footer from './Footer'
// import Internship from './Internship'
import Navbar from './Navbar'
import '/src/components/styles/about.css'
import main from '/src/images/img.jpeg'

const About = () => {
  return (
    <div className='about container'>
    <Navbar/>

    {/* about */}
      <div className='main'>
        <div className='about-left'>
          <h2>About </h2>
          {/* <p className='para'>I’m Kritika Baghel, a passionate front-end developer currently
          pursuing a degree in Computer Science at Manav Rachna University.
          My journey in technology began with an interest in creating dynamic
          and interactive web applications, which led me to develop skills 
          in HTML5, CSS, JavaScript, and ReactJS.</p> */}
          <p className='para'>I’m Kritika Baghel, a passionate front-end 
          developer currently pursuing a degree in Computer Science at 
          Manav Rachna University. My journey in technology began with an 
          interest in creating dynamic and interactive web applications, 
          which led me to develop skills in HTML5, CSS, JavaScript, and 
          ReactJS.<br/>
          Front-End Developer with a strong command of HTML5, CSS, 
          and JavaScript, specializing in creating dynamic, responsive, 
          and user-friendly web applications using ReactJS. Adept at 
          leveraging modern front-end frameworks to build intuitive 
          interfaces that prioritize performance and scalability.<br/>
          With a keen eye for detail and a passion for problem-solving, I 
          excel in designing and developing software solutions that meet 
          high standards of quality in fast-paced environments. My 
          experience includes delivering robust applications that are 
          optimized for performance and better user experience, and tailored to meet the 
          evolving needs of users.<br/>
          I am committed to continuous learning and staying up-to-date with the latest
          industry trends and technologies. My goal is to advance my technical expertise and 
          contribute to innovative projects that make a meaningful impact.</p>
        </div>
        <div className='about-right'>
        <img src={main} alt='' className='about-img'/>
        </div>
      </div>
      <Education/>
      {/* <Internship /> */}
      <Footer />
    </div>
  )
}

export default About
