console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let imgUrlData = fetch(imgUrl)
  .then(function(response) {
    return response.json();
  })
console.log(imgUrlData)
