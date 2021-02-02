console.log('%c HI', 'color: firebrick')
let imgUrlDa = 0;
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => console.log(json))

getImgJson()
function getImgJson() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImgs(json))
  }

console.log("test")

function renderImgs(json) {
  const main = document.querySelector('main')
  for(let i=0; i<json.message.length; i++)
    const img = document.createElement('img')
    img.src = message[i]
    main.appendChild(img)
  })

}
