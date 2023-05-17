import { useEffect } from "react"
import { useLocation } from "react-router-dom"



export const useTitle = (title) => {

    const { pathname } = useLocation()

    useEffect(() => { 
        document.title = title
    }, [pathname, title])

  return null
};
