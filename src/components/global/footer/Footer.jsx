import './footer.css'
import { SecondaryLogo } from '../../../assets/assets'

export default function Footer() {
    return (
        <div className='footer__container'>
            <div className='footer__logo--container'>
                <SecondaryLogo />
            </div>
            <div className='footer__bottom--container'>
                <h2 className='footer__subheader'>Created with passion by <a target="_blank" rel="noopener noreferrer" href='https://websiteartificers.com'>Website Artificers</a> © 2024</h2>
            </div>
        </div>
    )
}