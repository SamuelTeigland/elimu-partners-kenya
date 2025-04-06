import { History, Values, Future, Donation } from '.././components/components'
import { Helmet } from "react-helmet"

function About() {

  return (
    <div>
      <Helmet>
        <title>Elimu Partners Kenya - All About Our Organization.</title>
        <meta name="description" content="Elimu Partners, Kenya was incorporated in 2024 and has pending 501-3C status with the IRS which will be confirmed in early 2025.  We are supporting the Greenhill Amani School by building foundational support in sharing the mission, fundraising, prayer, and supporting initiatives in Kenya for the school to become self-sustaining." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.elimupartnerskenya.com/about" />
        <link rel="alternate" hreflang="en" href="https://www.elimupartnerskenya.com/about" />
        <link rel="alternate" hreflang="es" href="https://www.elimupartnerskenya.com/about" />
      </Helmet>
      <History />
      <Future />
      <Values />
      <Donation />
    </div>
  )
}

export default About