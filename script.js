const key = "6822cbd7354f4536aac2c62b869663fd"

/* Example url: https://newsapi.org/v2/top-headlines?q=bitcoin */
const url = `https://newsapi.org/v2/everything?sources=cnn,bbc-news&q=lifestyle&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".articles")
    newsdata.articles.forEach((article) => {

			//Here we create and add html elements to our html file
      const div = document.createElement("div")
      div.className = "news"


			div.innerHTML = `<h2>${article.title}</h2>
											<hr>
											`

      articlesDiv.appendChild(div)

			//This fetches and add images to our articles
			const img = document.createElement("img")
            img.src = article.urlToImage
            div.appendChild(img)



			const link = document.createElement("a")
					link.href = article.url
					link.innerHTML = article.description
					div.appendChild(link)

    })
}


//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.

fetch(url)
  .then(response => response.json())
  .then(recievedNews)
