import './sign-up.css'

export default function SignUp() {
    return (
        <div className='signup__container'>
            <h2 className='signup__header'><span>Sign Up</span> for Our Newsletter!</h2>

            <form className='signup__form' action="https://formsubmit.co/4568779cac6412ec4782c7b3ebda1647" method="POST">
                <input type="hidden" name="_subject" value="SUBMISSION: Newsletter Sign Up!"></input>
                <input type="hidden" name="_autoresponse" value="Thanks for signing up to our newsletter"></input>
                <input type="hidden" name="_cc" value="mstebbe@fishersumc.org"></input>
                <input type="hidden" name="_next" value="https://www.elimupartnerskenya.org"></input>
                <input type="hidden" name="_template" value="table"></input>

                <div className="signup__form--container">
                    <div className="signup__form--subcontainer">
                        <label
                            htmlFor="name"
                            className="signup__form--label signup__left"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className="signup__form--input signup__left"
                            id='name'
                            name='name'
                            required
                            placeholder='John'
                        />
                    </div>
                    <div className="signup__form--subcontainer">
                        <label
                            htmlFor="email"
                            className="signup__form--label signup__right"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="signup__form--input signup__right"
                            id='email'
                            name='email'
                            required
                            placeholder='example@elimupartnerskenya.org'
                        />
                    </div>
                </div>

                <div className='signup__button--container'>
                    <button className="signup__submit--button button__primary">
                        Sign Up!
                    </button>
                </div>
            </form>
            
        </div>
    )
}