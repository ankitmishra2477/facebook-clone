import React from 'react';
import "./Header.css"
import logo from "./img/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import TourIcon from '@mui/icons-material/Tour';
import AirplayIcon from '@mui/icons-material/Airplay';
import HouseIcon from '@mui/icons-material/House';
import TableViewIcon from '@mui/icons-material/TableView';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IconButton from '@mui/material/IconButton';
function Header() {
    
  return <div className='header'>


    <div className="header__left">
        
        <img src={logo} alt="" />
        <div className="header__input">

        <SearchIcon className='searchicon'/>
        <input type="text" />
        </div>
        
        
    </div>
    <div className="header__middle">
    <div className="header__opti`ons">
            <AirplayIcon/>
            <HomeIcon/>
            <TourIcon/>
            <HouseIcon/>
            <TableViewIcon/>

        </div>
    </div>
    <div className="header__left">
    <div className="header__avatar">
    <IconButton>
        <AccountCircleIcon/>
    </IconButton>
    <IconButton>
        <PlusOneIcon/>
    </IconButton>
    <IconButton>
        <ChatBubbleOutlineIcon/>
    </IconButton>
        </div>
    </div>

  </div>;
}

export default Header;
