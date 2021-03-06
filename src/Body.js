import React from 'react';
import './Body.css'
import Header from './Header.js'
import {useDataLayerValue} from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';
const Body = ({spotify})=>{

    const [{discover_weekly},dispatch]= useDataLayerValue();

    return(
        <div className="body">
           
            <Header spotify={spotify}/>
            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="pic" />
                <div className="body__infoText">
                <strong>PLAYLIST</strong>
                <h2>Discover Weekly</h2>
    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body_shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                </div>    
                {/* list of songs */}
                {discover_weekly?.tracks.items.map(item=>{
                    return <SongRow track={item.track}/>
                })}
                </div>
        </div>    
    )
}
export default Body;