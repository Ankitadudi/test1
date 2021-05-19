import React from 'react'
import { Button } from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import './Header.css';

function Header() {
    return (
        <div className="header">
            
            <div className="header__left">
                <h1>SimpleSite</h1>
                <p>Make it from website or blog</p>
                <p>Customer Services</p>
                <p>Features</p>
                <p>Themes</p>
                <p>Our Blog</p>
                <p>Career</p>
            </div>
            <div className="header__right">
            <Button>LOG IN</Button>
            <LanguageIcon />
            <p>English</p>
            </div>
        </div>
    )
}

export default Header
