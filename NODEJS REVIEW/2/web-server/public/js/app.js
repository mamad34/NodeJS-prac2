fetch("http://puzzle.mead.io/puzzle").then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});
const form = document.querySelector("form");
const search = document.querySelector("input");
const h4 = document.querySelector("h4");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(search.value);
  h4.innerText = "loading";
  fetch(`http://localhost:3000/weather?address=${search.value}`).then(
    (response) => {
      response.json().then((data) => {
        console.log(data);
        if (data.error) {
          h4.textContent = data.error;
        } else {
          console.log(data.timezone);
          console.log(data.weather);
          console.log(data.forcast);
          search.value = "";
          h4.innerText =
            data.timezone + " " + data.weather + " " + data.forcast;
        }
      });
    }
  );
});
