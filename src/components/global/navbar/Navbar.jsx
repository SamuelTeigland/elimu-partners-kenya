import './navbar.css'
import { MainLogo } from '../../.././assets/assets';

export default function Navbar() {
    return (
        <div className='navbar__container'>
            <a href='/' className='navbar__logo--container'>
                <MainLogo />
            </a>
        </div>
    )
}