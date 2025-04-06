import { Contact as ContactUs, Donation } from '../components/components'
import { Helmet } from "react-helmet"

export default function Contact() {
    return (
        <div>
            <Helmet>
                <title>Elimu Partners Kenya - Contact Us!</title>
                <meta name="description" content="Have questions about our work, or want to learn about ways that you can help?  Fill out our contact form and leave us a message!  We'll get back to you as soon as possible." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.elimupartnerskenya.com/contact-us" />
                <link rel="alternate" hreflang="en" href="https://www.elimupartnerskenya.com/contact-us" />
                <link rel="alternate" hreflang="es" href="https://www.elimupartnerskenya.com/contact-us" />
            </Helmet>
            <ContactUs />
            <Donation />
        </div>
    )
}