import { Donation, Contact, SecondHero, GreenhillSupport, GreenhillDescription, GreenhillBody } from '.././components/components'
import { Helmet } from "react-helmet"

export default function GreenhillAmaniSchool() {
    return (
        <div>
            <Helmet>
                <title>The Greenhill Amani School and Elimu Partners Kenya - Educating and Serving Children in Kenya.</title>
                <meta name="description" content="The Greenhill Amani School serves over 160 students in the lush, green hills of western Kenya. It was founded in 2014 and nurtures academics, spiritual growth, and nutrition for children in pre-school to fifth grade." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.elimupartnerskenya.com/greenhill-amani-school" />
                <link rel="alternate" hreflang="en" href="https://www.elimupartnerskenya.com/greenhill-amani-school" />
                <link rel="alternate" hreflang="es" href="https://www.elimupartnerskenya.com/greenhill-amani-school" />
            </Helmet>
            <SecondHero />
            <GreenhillDescription />
            <Donation />
            <Contact />
        </div>
    )
}