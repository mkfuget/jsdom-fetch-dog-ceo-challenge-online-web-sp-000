console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let imgUrlData = () =>{
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => console.log(json));
}

console.log("test")

console.log(imgUrlData)
