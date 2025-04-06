import { Hero, Donation, Vision, Serve } from '.././components/components'
import { Helmet } from "react-helmet"

function Home() {

  return (
    <div>
      <Helmet>
        <title>Elimu Partners Kenya - Serving Underpriviledged Communities in Ekerenyo, Kenya.</title>
        <meta name="description" content="Elimu Partners Kenya: Create to serve and help to provide education to under-served areas of Kenya." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.elimupartnerskenya.com" />
        <link rel="alternate" hreflang="en" href="https://www.elimupartnerskenya.com" />
        <link rel="alternate" hreflang="es" href="https://www.elimupartnerskenya.com" />
      </Helmet>
      <Hero />
      <Donation />
      <Vision />
      <Serve />
    </div>
  )
}

export default Home