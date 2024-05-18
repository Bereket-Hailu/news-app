<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
    // Get the breaking news link
    var breakingNewsLink = document.querySelector("#breakingNews a");

    // Add a click event listener to the breaking news link
    breakingNewsLink.addEventListener("click", function(event) {
        // Prevent the default action of the link (e.g., navigating to a new page)
        event.preventDefault();

        // Display an alert message
        alert("You clicked on the breaking news link!");
    });
});
=======
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
>>>>>>> 136adc05dcff63a3712a050ca8e714d3a702312d
