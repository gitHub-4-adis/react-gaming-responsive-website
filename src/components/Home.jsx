import React from 'react'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillInstagram, AiFillYoutube} from 'react-icons/ai';

import vg from '../assets/boy.png';

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>GAMER's ADDA</h1>
          <p>Ab gaming non stop apne adde pe</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
          Esports is a booming global industry where skilled video gamers play competitively. In the same way that traditional sports have competitions in baseball, basketball, and football, esports encompasses competitions across a variety of video games.
          </p>
        </div>
      </div>

        <div className="home3" id="about">
          <div>
            <h2>WHO WE ARE?</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero tenetur impedit officiis beatae accusantium exercitationem odio, consequuntur nam, temporibus sint saepe repellendus sapiente sequi quos modi consequatur possimus doloribus quas!
            Quas non accusamus aut, quia accusantium ab illo nesciunt debitis sed suscipit reiciendis voluptates id, voluptate in ad sunt saepe nobis corrupti provident illum nisi at repellat. Itaque, asperiores a!
            Omnis praesentium molestiae repellat quis illo sequi fugit perspiciatis aut. Adipisci error esse fuga provident! Veniam fugiat sunt eaque, deserunt delectus facere sit repudiandae magnam commodi labore, quod natus fuga!
            Magnam dicta corporis culpa optio ut unde autem incidunt, recusandae reprehenderit perspiciatis beatae voluptatibus laboriosam ad enim quaerat provident qui velit tempore quos nisi mollitia architecto impedit praesentium! Dignissimos, quasi!</p>
          </div>
        </div>

        <div className="home4" id="brand">
          <div>
            <h2>BRANDS</h2>
            <div>
              <div className="icon">
                <AiFillGoogleCircle className='icons'/>
                Google
              </div>
              <div className="icon">
                <AiFillAmazonCircle className='icons'/>
                Amazon
              </div>
              <div className="icon">
                <AiFillInstagram className='icons'/>
                Instagram
              </div>
              <div className="icon">
                <AiFillYoutube className='icons'/>
                Youtube
              </div>
            </div>
          </div>

        </div>
    </>
  );
}

export default Home