// Get data from zenquotes API

export async function fetchData(){
    
    const res = await fetch("https://zenquotes.io/api/quotes")
    const data = await res.json()

    return data
}