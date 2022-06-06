

export async function fetchData(){
    const res = await fetch("https://zenquotes.io/api/today")
    const data = await res.json()

    return data
}