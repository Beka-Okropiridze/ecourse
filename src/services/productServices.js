

export async function getFeatureProducts() { 

        const response = await fetch("http://localhost:8000/444/featured_products")
        const data = await response.json()

        return data
};


export async function getProducts(searchTerm) { 

    const response = await fetch(`http://localhost:8000/444/products?name_like=${searchTerm ? searchTerm : ''}`)
     if(!response.ok) { 
        throw {message: response.statusText, status: response.status}
    }
    const data = await response.json()

    return data
};

export async function getProductDetails(params) { 

    const response = await fetch(`http://localhost:8000/444/products/${params.id}`);
    const data = await response.json();

    return data
};