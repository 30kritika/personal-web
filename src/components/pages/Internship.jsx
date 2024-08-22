import '/src/components/styles/internship.css'
import { FaRegHandPointRight } from "react-icons/fa";

const Internship = () => {
  return (
    <div className="internship">
        <h2>Internship</h2>
        <div className='int-timeline'>
            <div className='int-box'>
                <h4>Lending Buddha</h4>
                <p className='time'>06 June 2024- 06 Aug 2024</p>
                <p><FaRegHandPointRight /> Working on industry projects to 
                ensure the client receives an excellent end product.
                Collaborating with cross-functional teams to drive efficient
                processes and leverage innovative technologies for optimal 
                results.</p>
                <p><FaRegHandPointRight /> Developed web apps with React JS 
                and MongoDB. Integrated frontend components for user 
                experience.Used MongoDB for efficient data storage, ensuring optimal performance.</p>
            </div>
            <div className='int-box'>
                <h4>GPCSSI-2024 Intern</h4>
                <p className='time'>02 June 2024- 02 July 2024</p>
                <p><FaRegHandPointRight /> Took part in a CTF. Guided team to 
                overcome varied challenges. Worked together to navigate 
                different levels using everyone skills to solve puzzles</p>
                <p><FaRegHandPointRight /> Met industry experts, tackled 
                projects, made creative tech solutions, collaborated with 
                teams for good results.</p>
            </div>
            <div className='int-box'>
                <h4>Cyber Security Intern</h4>
                <p className='time'>01 April 2024- 01 May 2024</p>
                <p><FaRegHandPointRight /> Coordinate cybersecurity 
             initiatives, such as network penetration testing that find 
             computer system vulnerabilities by breaking in and examining
              security measures and encrypted communication channels.</p>
            </div>
        </div>
    </div>
  )
}

export default Internship
