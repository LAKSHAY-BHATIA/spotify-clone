import React from 'react';
import './Player.css';
import Sidebar from './Sidebar.js';

import Body from './Body';
import Footer from './Footer'
const Player = ({spotify})=>{
    return(
<div className="player">
  <div className = "player__body">
    {/* sidebar */}
    <Sidebar/>
    {/* body */}
    <Body spotify={spotify}/>
    {/* footer */}
    <Footer/>
     </div>
    </div>
    )
}

export default Player;