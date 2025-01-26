import './serve.css'

export default function Serve() {
    return (
        <div className='serve__container'>
            <div className='serve__subcontainer'>
                <div className='serve__image--container'>
                    <img className='serve__image' src='/images/playingOnPlayground.jpg' alt='Kenyan children playing on a playground.' />
                </div>
                <div className='serve__paragraph--container'>
                    <p className='serve__paragraph'>
                        We serve <span>180 children</span> from pre-school to grade six.
                    </p>
                </div>
            </div>
        </div>
    )
}