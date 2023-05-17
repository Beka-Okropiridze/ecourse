
import { Hero } from "./homecomponents/Hero";
import { FeatureProducts } from "./homecomponents/FeatureProducts";
import { Testemonials } from './homecomponents/Testemonials';
import { Faq } from './homecomponents/Faq'; 
import { useTitle } from "../../hooks/useTitle";

export const HomePage = ({title}) => {

  useTitle(title)

  return (
    <main>
        <Hero />
        <FeatureProducts />
        <Testemonials />
        <Faq />
    </main>
  )
}
