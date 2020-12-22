const { default: Axios } = require("axios");

requires Axios
let url =
  'api.openweathermap.org/data/2.5/weather?q={city name}&appid={c3aefd6ca6d654b410a60a3855d20345}';
axios.get(url).then((response) => {
  console.log(response.data);
});
