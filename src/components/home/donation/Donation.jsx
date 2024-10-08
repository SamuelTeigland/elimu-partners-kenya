import './donation.css'

export default function Donation() {
    return (
        <div className='donation__container' id='donation'>
            <div className='donation__subcontainer'>
                <div className='donation__subcontainer--container' id='donation__left'>
                    <h2 className='donation__left--subheader'>Join Elimu Parnters Kenya</h2>
                    <p className='donation__left--paragraph'>Help make a difference!</p>
                    <div className='donation__left--subcontainer__link'>
                        <a target="_blank" rel="noopener noreferrer" href='mailto:contact@websiteartificers.com'>
                            <h3 className='donation__left--subcontainer--subheader'>Email us!</h3>
                            <p className='donation__left--subcontainer--paragraph'>Email <span>contact@websiteartificers.com</span> with any questions!</p>
                        </a>
                    </div>
                </div>
                <div className='donation__subcontainer--container' id='donation__right'>
                    <h2 className='donation__right--header'>Make a Donation</h2>
                    <h3 className='donation__right--subheader'>What we do:</h3>
                    <div className='donation__right--subcontainer--container'>
                        <p className='donation__right--paragraph'>
                            - Provide quality educational materials.

                        </p>
                        <p className='donation__right--paragraph'>
                            - Build schools and educational infrastructure.
                        </p>
                        <p className='donation__right--paragraph'>
                            - Teach and train school staff.
                        </p>
                        <p className='donation__right--paragraph'>
                            - Provide school meals.
                        </p>
                    </div>
                    <div className='donation__right--subcontainer--subcontainer'>
                        <a className='donation__right--subcontainer__link' href='https://www.zeffy.com/donation-form/a166cdf1-90c8-4fa1-a29a-97cf0dc59ba1'>
                            <button className='donation__button button__quinary'>Donate</button>
                        </a>
                        <p className='donation__right--subcontainer__paragraph'>or</p>
                        <a
                            className='donation__right--subcontainer__link'
                            target="_blank" rel="noopener noreferrer"
                            href='mailto:contact@websiteartificers.com'>
                            <p>Contact us!</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}