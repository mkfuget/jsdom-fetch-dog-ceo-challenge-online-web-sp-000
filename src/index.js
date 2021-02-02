console.log('%c HI', 'color: firebrick')
let imgUrlDa = 0;
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => console.log(json))
}

function getImgJson() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImgs(json))
  }

console.log("test")

console.log(resp)
function renderImgs(json) {
  const main = document.querySelector('main')
  json.forEach(message => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })

}
