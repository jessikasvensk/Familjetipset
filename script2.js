url = `https://newsapi.org/v2/everything?sources=cnn,bbc-news&q=lifestyle&apiKey=${key}`

const recievedNews2 = (newsdata) => {
    const articlesDiv = document.querySelector(".puffen")
    newsdata.articles.forEach((article,index) => {

      if(index == 1){

  			//Here we create and add html elements to our html file
        const div = document.createElement("div")
        div.className = "article"

        articlesDiv.appendChild(div)

  			//This fetches and add images to our articles
  			const img = document.createElement("img")
              img.src = article.urlToImage
              div.appendChild(img)

    const link = document.createElement("a")
          link.href = article.url
          link.innerHTML = `<h3>${article.title}</h3>`
          div.appendChild(link)

        }
    })
}

fetch(url)
  .then(response => response.json())
  .then(recievedNews2)
