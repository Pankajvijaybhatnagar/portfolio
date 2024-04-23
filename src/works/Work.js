import React from 'react'
import './work.css'
const Work = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">About Me</h2>
     <div className="worksBar">
      <img src="10.jpg" alt="" className="worksBarImg" />
      <div className="worksBarText">
       <h2>DAV PUBLIC SCHOOL, KURUKSHETRA</h2>
       <p>Percentage:66.5</p>
      </div>

     </div>
     <div className="worksBar">
      <img src="12.png" alt="" className="worksBarImg" />
      <div className="worksBarText">
       <h2>MAHARANA PRATAP PUBLIC SCHOOL, KURUKSHETRA</h2>
       <p>Percentage:59.2</p>
      </div>

     </div>
     <div className="worksBar">
      <img src="btech.jpg" alt="" className="worksBarImg" />
      <div className="worksBarText ">
       <h2>KURUKSHETRA UNIVERSITY</h2>
       <p>Percentage:70.66</p>
      </div>

     </div>
    </section>
  )
}

export default Work;