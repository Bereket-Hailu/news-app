let breakingImg = document.querySelector('#breakingImg')



const apiKey="5cf1f2dd23e74b7da77b04677290a868"

const fetchData = async (category,pageSize)=>{
    const url = 'https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=&{apiKey}'
    const data = await fetch( url)
    const response =  await data.json()
    console.log(response);
    return response.articles

}
//fetchData( 'general',5)
//adding breaking news
const add_breakingImg = (data)=>{
    breakingImg.innerHTML = ' <img src=${data[0].urlToImage}alt="image">'
}
fetchData( 'general',5).then(add_breakingNews)