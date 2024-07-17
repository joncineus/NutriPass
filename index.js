//The code for NutriPass code
function searchFood(){
    const food = document.getElementById("searchTerm").value
    fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
    .then(response => response.json())

    console.log(response)
}