import React from 'react'
import './style.css'

function Menu(props) {
  return (
    
    <div className="c2">
      {/* <a href="javascript:window.location=goto('index')"> */}
      <h1 className="title">Miguel Á<span className="lesskerning">lv</span>arez</h1>
      {/* </a> */}
      <info-section>
        {/* <p><span className="icon">🙂</span></p> */}
        <p>Hello! I'm an <span className="bolder">interaction designer</span> with crafting skills and passion</p>
        <p>Status: available</p> 
        <p>Location: Barcelona</p>

        <div className="col">
          <p><a href="https://www.linkedin.com/in/miguel-angel-alvarez-2ba1b2a/" target="_blank">LinkedIn</a></p>
          <p><a href="http://screeeeen.com/" target="_blank">videogames </a></p>
          <p><a href="https://github.com/screeeen" target="_blank">github</a></p>
          <p><a href="https://www.dropbox.com/s/jjutmcj39zmytlu/00_One%20Page%20Resume.pdf?dl=0" target="_blank">resume</a></p>
        </div>
      </info-section>

       <div className="menu-content">
         <info-section>
           {/* <p><span className="icon">✍</span></p> */}
           <div className="flex-grid">
             <div className="col">
               <p><a href="#eh">· Emergency Heroes</a></p>
               <p><a href="#belote">· Belote</a></p>
               <p><a href="#screen">· Screen Implosion</a></p>
               <p><a href="#downhill">· Downhill*</a></p>
               <p><a href="#cca">· Cabin Crew Device</a></p>
               <p><a href="#inflight">· Inflight VR</a></p>
               <p><a href="#amasc">· AMASC</a></p>
               <p><a href="#illustration">· Illustration</a></p>
               <p><a href="#animation">· Animation</a></p>
             </div>
           </div>
         </info-section>
       </div>
     <info-section className="contact-form">
        {/* <p><span className="icon">✉️</span></p> */}
        <div className="thank-you" hidden>
          <p className="">Thank you!</p>
          <p className="">I will get back to you shortly.</p>
        </div>

        <form id="serverless-contact-form" method="POST">
          <input type="text" name="name" id="name" className="form-control" placeholder="Name" required></input>
          <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"
            placeholder="Email Address" required></input>
          <div className="form-group">
            <textarea className="form-control" name="message" id="message" rows="3"
              placeholder="Write here your proposal"></textarea>
          </div>
          {/* <Button type="submit" value="send" /> */}
        </form>
      </info-section>
    </div>
  )
}

export default Menu
