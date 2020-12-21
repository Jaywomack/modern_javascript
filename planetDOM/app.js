const app = document.querySelector('.app');
let obj;
fetch(
  'https://api.nasa.gov/planetary/apod?api_key=dvDrAjzrNpggDd1ABLCubVvMsel9GrGaPEyAHaFB'
)
  .then((res) => res.json())
  .then((data) => (obj = data))
  .then(() => {
    console.log(obj);
    const li = document.createElement('li');
    const copyright = li;
    copyright.appendChild(document.createTextNode(obj.copyright));
    const image = document.createElement('img');
    image.setAttribute('src', obj.hdurl);

    app.appendChild(image);
    app.appendChild(copyright);
  });
// Api key
//   7PqoQBFu95LdUCspg6W6j18uyUWhoXkcMqTNiPrJ
