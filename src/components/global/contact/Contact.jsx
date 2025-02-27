import './contact.css'

export default function Contact() {
    return (
        <div className='contact__container' id='contact'>
            <div className="contact__header--container">
                <h1 className="contact__header">
                    Contact Us!
                </h1>
            </div>

            {/* start of form */}

            <div className='contact__form--container'>
                <form className='contact__form' action="https://formsubmit.co/395c919341c62f325f27afba96e5ab1" method="POST">
                    <input type="hidden" name="_subject" value="SUBMISSION: Contact Form"></input>
                    <input type="hidden" name="_autoresponse" value="Thanks for reaching out to Elimu Partners Kenya!  We will respond shortly."></input>
                    <input type="hidden" name="_cc" value="mstebbe@fishersumc.org"></input>
                    <input type="hidden" name="_next" value="https://www.elimupartnerskenya.org"></input>
                    <input type="hidden" name="_template" value="table"></input>

                    {/* Full Name */}
                    <div className='contact__form--wrapper'>
                        <label
                            htmlFor='name'
                            className='contact__label'
                        >
                            Full Name
                        </label>
                        <input
                            id='name'
                            name='name'
                            required
                            type='text'
                            className='contact__input'
                            placeholder='John Doe'
                        />
                    </div>

                    {/* Phone and Email */}
                    <div className='contact__form--subcontainer'>
                        <div className='contact__form--wrapper'>
                            <label
                                htmlFor='email'
                                className='contact__label'
                            >
                                Email
                            </label>
                            <input
                                id='email'
                                name='email'
                                required
                                type='email'
                                className='contact__input'
                                placeholder='example@elimupartnerskenya.org'
                            />
                        </div>

                        <div className='contact__form--wrapper'>
                            <label
                                htmlFor='phone'
                                className='contact__label'
                            >
                                Phone
                            </label>
                            <input
                                id='phone'
                                name='phone'
                                required
                                type='tel'
                                className='contact__input'
                                placeholder='(123) 456-7891'
                            />
                        </div>
                    </div>

                    {/* Notes */}
                    <div className='contact__form--wrapper'>
                        <label
                            htmlFor='note'
                            className='contact__label'
                        >
                            Notes
                        </label>
                        <textarea
                            id='note'
                            name='note'
                            required
                            className='contact__textarea'
                            placeholder='Optional: Additional information or requirements'
                        />
                    </div>

                    {/* Submit */}
                    <div className='contact__form--select'>
                        <button
                            type='submit'
                            className='button__primary form__button'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}