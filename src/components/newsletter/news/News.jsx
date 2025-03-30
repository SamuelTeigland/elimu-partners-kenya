import './news.css'
import { Link } from 'react-router-dom';

export default function News() {
    return (
        <div className='news__container'>
            <h2 className='news__subheader'>Sorry!</h2>
            <h1 className='news__header'>No News Yet</h1>
            <p className='news__paragraph'>Please <span>sign up</span> below to receive our newsletters and stay tuned!</p>
            <div className='news__subcontainer'>
                <Link to="/" className='news__link'>
                    <button className="news__button button__primary">Home</button>
                </Link>
                <Link to="/contact-us" className='news__link'>
                    <button className="news__button button__tertiary">Contact Us</button>
                </Link>
            </div>
        </div>
    )
}