import { SignUp, News } from '.././components/components'
import { Helmet } from "react-helmet"

function Newsletter() {
  return (
    <div>
      <Helmet>
        <title>Elimu Partners Kenya - Sign Up for Our Newsletter!</title>
        <meta name="description" content="Sign up for our newsletter!  Hear about the impact we are having on countless families and communities in Kenya, and learn about ways you can help support our mission." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.elimupartnerskenya.com/newsletter" />
        <link rel="alternate" hreflang="en" href="https://www.elimupartnerskenya.com/newsletter" />
        <link rel="alternate" hreflang="es" href="https://www.elimupartnerskenya.com/newsletter" />
      </Helmet>
      <News />
      <SignUp />
    </div>
  )
}

export default Newsletter