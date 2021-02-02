console.log('%c HI', 'color: firebrick')
let imgUrlDa = 0;
function getImgJson() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImgs(json))
  }

console.log("test")

console.log(resp)
function renderImgs(json) {

}
