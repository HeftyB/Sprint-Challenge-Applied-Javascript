// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

let cards = document.querySelector(".cards-container");

function getCards () {
    axios.get("https://lambda-times-backend.herokuapp.com/articles")
        .then( datas => {
            for ( let key in datas.data.articles ) {
                datas.data.articles[key].forEach( item => {
                    let { authorName, authorPhoto, headline } = item;

                    let card = document.createElement("div");
                    let headlines = document.createElement("div");
                    let author = document.createElement("div");
                    let imgContainer = document.createElement("div");
                    let img = document.createElement("img");
                    let authorsNames = document.createElement("span");

                    card.classList.add("card");
                    headlines.classList.add("headline");
                    author.classList.add("author");
                    imgContainer.classList.add("img-container");

                    card.appendChild(headlines);
                    card.appendChild(author);
                    author.appendChild(imgContainer);
                    imgContainer.appendChild(img);
                    author.appendChild(authorsNames);

                    img.setAttribute("src", `${authorPhoto}`);

                    headlines.textContent = `${headline}`;
                    authorsNames.textContent = `${authorName}`;

                    cards.appendChild(card);
                } )
            }
        })
        .catch( error => {
            console.log(error);
            debugger
        })
        .finally( () => {
            console.log("Done!")
        })
}
getCards();

