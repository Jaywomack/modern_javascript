/***
 * DOM
 */
/**
 * <div class="container">
        <div class="card" style="width: 18rem;">
          <img src="https://images.unsplash.com/photo-1536663815808-535e2280d2c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlzYm9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
 */
    // Target Dom Elements
 let addCityButton = document.getElementById('add-city')
 let cardContainer = document.getElementById('cards-section')
 cardContainer.style.border = '10px solid red'


 // Add event listeners
 addCityButton.addEventListener('click',(e)=> {
    createNewCityCard()
    e.preventDefault()
 })

 // create card dom elements
let cardImg = document.createElement('img')
let cardBody = document.createElement('div')
let cardH5 = document.createElement('h5')
let cardP = document.createElement('p')
let cardA = document.createElement('a')


