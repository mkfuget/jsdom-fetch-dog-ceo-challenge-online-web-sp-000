console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const imgUrlData;
fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => imgUrlData);

console.log("test")

console.log(imgUrlData)
