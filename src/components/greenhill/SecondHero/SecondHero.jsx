import './secondHero.css'
import { Link } from 'react-router-dom';

export default function SecondHero() {
    return (
        <div className='secondHero__container'>
            <div className='secondHero__subcontainer'>
                <h1 className='secondHero__header'>The Greenhill Amani School</h1>
                <p className='secondHero__paragraph'>Founded in 2014 to nurture academics, spiritual growth, and nutrition for children in pre-school to fifth grade.</p>
                <div className='secondHero__button--container'>
                    <a className='secondHero__link' href='/#donation'>
                        <button className='secondHero__button button__quinary'>Donate</button>
                    </a>
                    <Link to='/contact-us'>
                        <button className='secondHero__button button__primary'>Contact us!</button>
                    </Link>
                </div>
            </div>
            <div className='secondHero__subcontainer'>
                <img className='secondHero__subcontainer--image' src='/images/student-waving.JPG' alt='Kenyan Child' />
            </div>
        </div>
    )
}