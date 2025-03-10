import { assets } from '../../assets/assets'
import './Main.css'
import React from 'react'

const Main = () => {
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet"><p>
                    <span>Hello, Aniket</span></p>
                    <p>How can i help you Today</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>any text 1</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>



                    <div className="card">
                        <p>any text 2 </p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>



                    <div className="card">
                        <p>any text 3 </p>
                        <img src={assets.message_icon} alt="" />

                    </div>


                    <div className="card">
                        <p>any text 4 </p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here ' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div> <p className='bottom-info'>
                    Gemini may display incorrect output as it is in atesting phase.
                </p>
                </div>

               
            </div>
        </div>
    )
}

export default Main