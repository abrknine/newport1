import "./Form.css"

import React from 'react'

const Form = () => {
  return (
    <div>
      <form  action="https://getform.io/f/e7b42868-4897-4698-affa-544c6edfcf76" method='POST'>
     <label >Your Name</label>
     <input name="name" type="text" />
     <label > Email</label>
     <input name="Email" type="email" />
     <label >Subject</label>
     <input name="Subject" type="text" />
     <label >Message</label>
     <textarea name="name" placeholder="Type ypur message here"  rows="6"></textarea>
     <button className="btn">Submit</button>

      </form>
    </div>
  )
}

export default Form
