url = `https://newsapi.org/v2/everything?sources=cnn,bbc-news&q=lifestyle&apiKey=${key}`

const recievedNews4 = (newsdata) => {
    const articlesDiv = document.querySelector(".artikel-box hideDIV")
    newsdata.articles.forEach((article,index) => {

      if(index <8){

  			//Here we create and add html elements to our html file
        const div = document.createElement("div")
        div.className = "artikel-box hideDIV"


  			div.innerHTML = `<h4>${article.title}</h4>`

        articlesDiv.appendChild(div)

  			//This fetches and add images to our articles
  			const img = document.createElement("img")
              img.src = article.urlToImage
              div.appendChild(img)

  			const link = document.createElement("a")
  					link.href = article.url
  					link.innerHTML = article.description
  					div.appendChild(link)

        }
    })
}

fetch(url)
  .then(response => response.json())
  .then(recievedNews4)
