

export async function getFeatureProducts() { 

        const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`)
         if(!response.ok) { 
            throw {message: response.statusText, status: response.status} //eslint-disable-line
        }
        const data = await response.json()

        return data
};


export async function getProducts(searchTerm) { 

    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ''}`)
     if(!response.ok) { 
        throw {message: response.statusText, status: response.status} //eslint-disable-line
    }
    const data = await response.json()

    return data
};

export async function getProductDetails(params) { 

    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${params.id}`);
     if(!response.ok) { 
        throw {message: response.statusText, status: response.status} //eslint-disable-line
    }
    const data = await response.json();

    return data
};