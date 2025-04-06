import './hero.css'
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <div className='hero__container'>
            <div className='hero__subcontainer'>
                <h1 className='hero__header'>Elimu Partners Kenya</h1>
                <p className='hero__paragraph'>Helping to provide education to under-served areas of Kenya.</p>
                <div className='hero__button--container'>
                    <a className='hero__link' href='/#donation'>
                        <button className='hero__button button__quinary'>Donate</button>
                    </a>
                    <Link to='/contact-us'>
                        <button className='hero__button button__primary'>Contact us!</button>
                    </Link>
                </div>
            </div>
            <div className='hero__subcontainer'>
                <img className='hero__subcontainer--image' src='/images/students-in-uniform.JPG' alt='Kenyan Child' />
            </div>
        </div>
    )
}