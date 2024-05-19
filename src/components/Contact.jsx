import React from 'react'


const Contact = () => {
  return (
    <>
      <div className='contact'>
          <div className='input'>
            <div id="heading">
              <h2>Contact Us</h2>

            </div>
            <form>
              <div>
                <label htmlFor="name">Name </label>
                <input type="text" id="name" placeholder='Enter Name'/>
              </div>

              <div>
                <label htmlFor="email">Email </label>
                <input type="email" id="email" placeholder='Enter Email'/>
              </div>

              <div>
                <label htmlFor="msg">Message </label>
                <input type="text" id="msg" placeholder='Any Queries/Suggestions?'/>
              </div>

                <input type="submit" id="submit"/>
            </form>
          </div>
      </div>
    
    </>
  );
}

export default Contact