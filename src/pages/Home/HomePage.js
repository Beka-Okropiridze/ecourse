
import { Hero } from "./homecomponents/Hero";
import { FeatureProducts } from "./homecomponents/FeatureProducts";
import { Testemonials } from './homecomponents/Testemonials';
import { Faq } from './homecomponents/Faq'; 

export const HomePage = () => {
  return (
    <main>
        <Hero />
        <FeatureProducts />
        <Testemonials />
        <Faq />
    </main>
  )
}
