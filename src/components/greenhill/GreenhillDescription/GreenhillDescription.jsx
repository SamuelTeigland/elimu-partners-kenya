import './greenhillDescription.css'

export default function GreenhillDescription() {
    return (
        <div className="greenhillDescription__container">
            <p className='greenhillDescription__paragraph'>
                <span>The Greenhill Amani School serves over 160 students in the lush, green hills of western Kenya.</span> It was founded in 2014 and nurtures academics, spiritual growth, and nutrition for children in pre-school to fifth grade.
            </p>
            <div className='greenhillDescription__subcontainer'>
                <div className='greenhillDescription__image--container'>
                    <img className='greenhillDescription__image' src='/images/2024-new-classrooms.jpg' alt='Greenhill Amani School' />
                </div>
                <div className='greenhillDescription__text--container'>
                    <h2 className='greenhillDescription__header'>The Kenyan Ministry of Education sets a standardized curriculum. This includes:</h2>
                    <div className='greenhillDescription__text--subcontainer'>
                        <p className='greenhillDescription__text'>
                            ✓ Language (English, Kiswahili, indigenous)
                        </p>
                        <p className='greenhillDescription__text'>
                            ✓ Mathematics
                        </p>
                        <p className='greenhillDescription__text'>
                            ✓ Environmental Studies
                        </p>
                        <p className='greenhillDescription__text'>
                            ✓ Hygiene and Nutrition
                        </p>
                        <p className='greenhillDescription__text'>
                            ✓ Religious Education
                        </p>
                        <p className='greenhillDescription__text'>
                            ✓ Movement & Creative Activities
                        </p>
                    </div>
                    <p className="greenhillDescription__italic">
                        The students at Greenhill Amani School consistently perform in the top quartile of area schools.
                    </p>
                </div>
            </div>
        </div>
    )
}