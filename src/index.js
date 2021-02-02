console.log('%c HI', 'color: firebrick')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => console.log(json))

addImgJson()
addbreedJson()
function addImgJson() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImgs(json))
}
function renderImgs(json) {
  const main = document.querySelector('body')
  for(let i=0; i<json.message.length; i++)
  {
    const img = document.createElement('img')
    img.src = json.message[i]
    main.appendChild(img)
  }

}
function addbreedJson() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderbreeds(json))
}
function renderbreeds(json) {
  const main = document.querySelector('body')
  const ul = document.getElementById('dog-breeds')
  for(let i=0; i<json.message.length; i++)
  {
    const li = document.createElement('li')
    li.innerHTML = json.message[i]
    ul.appendChild(li)
  }
}
