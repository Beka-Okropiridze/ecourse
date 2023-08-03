import { useEffect, useState } from "react"
import { ProductCard } from "../../../components"
import { getFeatureProducts } from "../../../services"
import { toast } from "react-toastify"


export const FeatureProducts = () => {

  const [products, setProducts] = useState([])

  useEffect(() => { 
    async function fetchProducts () {
      try{ 
        const data = await getFeatureProducts()
        setProducts(data)
      } catch(err){ 
        toast.error(err.message, {position: "bottom-right"})
      }
    }
    fetchProducts()
  }, [])

  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
        <div className="flex flex-wrap justify-between lg:flex-row">
          { 
          products.map((product) => { 
          return  <ProductCard key={product.id} product={product} />
          })
          }
        </div> 
    </section>
  )
}
//