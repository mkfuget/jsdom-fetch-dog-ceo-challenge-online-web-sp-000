console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let imgUrlData = fetch(imgUrl)
  .then(resp => resp.json())
console.log("test")

console.log(imgUrlData.message)
