import { Link } from "react-router-dom"
import { useTitle } from "../hooks/useTitle"



export const PageNotFound = ({title}) => {

    useTitle(title)

  return (
    <main>
        <p className="text-4xl mt-14 text-center font-semibold text-red-600">
            Page Not Found
        </p>
        <Link to="/">
        <p className="text-center mt-4 text-xl">
            Go Back To Home Page
        </p>
        </Link>
    </main>
  )
}
