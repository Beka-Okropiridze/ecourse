

export async function getFeatureProducts() { 

        const response = await fetch("http://localhost:8000/featured_products")
        const data = await response.json()

        return data
};


export async function getProducts(searchTerm) { 

    const response = await fetch(`http://localhost:8000/products?name_like=${searchTerm ? searchTerm : ''}`)
    const data = await response.json()

    return data
};

export async function getProductDetails(params) { 

    const response = await fetch(`http://localhost:8000/products/${params.id}`);
    const data = await response.json();

    return data
};