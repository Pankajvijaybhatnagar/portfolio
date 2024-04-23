import React from 'react'
import './skill.css'
const Skill = () => {
  return (
  <section id='skills'>
   <span className="skillTitle"> What I Know</span>
   <span className="skillDesc">
 I have experience in the languages given below currently i am doing  training at CNT TECHNOLOGIES , chandigarh
 where i am working on projects on  all these languages.
 And ready to join new oportunities for my carrer growth and my personal growth also



   </span>
   <div className="skillBars">
     <div className="skillBar">
      <img src="html.png" alt="" className="skillBarImg" />
      <div className="skillBarText">
       <h2>html</h2>
       <p>7 months experience in html</p>
      </div>
    </div>
    <div className="skillBar">
      <img src="react.jpg" alt="" className="skillBarImg" />
      <div className="skillBarText">
       <h2>react</h2>
       <p>7 months experience in react</p>
      </div>

     </div>
     <div className="skillBar">
      <img src="css.png" alt="" className="skillBarImg" />
      <div className="skillBarText">
       <h2>css</h2>
       <p>7 months experience in css</p>
      </div>

     </div>
     <div className="skillBar">
      <img src="django.png" alt="" className="skillBarImg" />
      <div className="skillBarText">
       <h2>django</h2>
       <p>7 months experience in django as frontend and backend with knowledge of drf</p>
      </div>

     </div>
     <div className="skillBar">
      <img src="sql.png" alt="" className="skillBarImg" />
      <div className="skillBarText">
       <h2>sql</h2>
       <p>2 months  basic experience in sql</p>
      </div>

     </div>

   </div>

  </section>
  )
}

export default Skill ;