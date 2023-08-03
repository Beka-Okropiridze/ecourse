
export async function login(userDetails) {

    const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(userDetails)
    });

    if(!response.ok){ 
        throw {message: response.statusText, status: response.status}
    }
    const data = await response.json();
    console.log(data);
    
    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
    }

    return data
};


export async function register(authDetail) { 
    const response = await fetch("http://localhost:8000/register", {
            method: "POST",
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(authDetail)
        });

        if(!response.ok){ 
            throw {message: response.statusText, status: response.status}
        }

        const data = await response.json();
        
        if(data.accessToken) { 
            sessionStorage.setItem("token", JSON.stringify(data.accessToken))
            sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
          }
        
    return data
};


export function logout() { 
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("cbid")
}