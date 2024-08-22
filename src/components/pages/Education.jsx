import '/src/components/styles/education.css'

const Education = () => {
  return (
    <div>
       {/* education */}
       <div className='edu'>
        <h2>Education</h2>
      <div className='edu-right'>
        <div className='edu-box'>
            <h4>Manav Rachna University </h4>
            <p className='year'>2021-2025</p>
            <p>B.Tech. Computer Science</p>
        </div>
        <div className='edu-box'>
            <h4>Bharat Mata Saraswati Bal Mandir</h4>
            <p className='year'>2020-2021</p>
            <p>Senior Secondary School</p>
        </div>
        <div className='edu-box'>
            <h4>Sri Sathya Sai Vidya Vihar</h4>
            <p className='year'>2018-2019</p>
            <p>Secondary School</p>
        </div>
      </div> 
    </div>
    </div>
  )
}

export default Education
