console.log('%c HI', 'color: firebrick')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => console.log(json))
addbreedJson()
addImgJson()
const selectBox = document.getElementById('dog-breeds');
console.log(selectBox)
selectBox.addEventListener('change', (event) => {
  const ul = document.getElementById('dog-breeds')
  alert("test")
  for(let child=ul.firstChild; child!==null; child=child.nextSibling) {
      if(child.innerHTML.charAt(0) != this.value)
      {
        child.style = "none"
      }
  }

}, false)
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
  const ul = document.getElementById('dog-breeds')
  for(const key in json.message)
  {
    const li = document.createElement('li')
    li.onclick = function(){
      li.style.color = "red"
    }
    li.appendChild(document.createTextNode(key))
    ul.appendChild(li)
  }
}
