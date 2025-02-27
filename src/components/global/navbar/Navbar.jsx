import './navbar.css'
import { MainLogo, Hamburger } from '../../.././assets/assets';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [ isVisible, setVisible ] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbar__container'>
                <a href='/' className='navbar__logo--container'>
                    <MainLogo />
                </a>
                <div className='navbar__link--container'>
                    <a href='#'>
                        Greenhill Academy
                    </a>
                    <a href='https://www.zeffy.com/donation-form/a166cdf1-90c8-4fa1-a29a-97cf0dc59ba1'>
                        Donate
                    </a>
                    <Link to='/contact-us'>
                        Contact Us
                    </ Link>
                    <Link to="/about">
                        About Us
                    </Link>
                    <div className='hamburger__container' onClick={
                        () => {
                            setVisible(!isVisible);
                        }
                    }>
                        <Hamburger />
                    </div>
                </div>
            </div>
            <div className={ isVisible === true ? 'hamburger__link--container shown__menu' : 'hamburger__link--container hidden__menu' }>
                <a href='#'>
                    Greenhill Academy
                </a>
                <a href='https://www.zeffy.com/donation-form/a166cdf1-90c8-4fa1-a29a-97cf0dc59ba1'>
                    Donate
                </a>
                <Link to='/contact-us'>
                    Contact Us
                </Link>
                <Link to="/about">
                    About Us
                </Link>
            </div>
        </div>
    )
}