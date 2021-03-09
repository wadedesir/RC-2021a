//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let link  = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
let search

document.querySelector('button').addEventListener('click', setData)
function setData(){
  search = document.querySelector('input').value
  fetch(link + search.toLowerCase())
    .then(res => res.json())
    .then(data => {
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('h3').innerText = data.drinks[0].strInstructions
      console.log(data.drinks[0]);
    })
    .catch(err => {
      alert(`Please enter a valid drink. \nError: ${err}`)
      console.log(`error ${err}`);
    })
}
