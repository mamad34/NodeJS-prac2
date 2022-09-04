// const submitForm = async (event) => {
//   const form = document.querySelector("form");
//   const title = document.querySelector("#title");
//   const artist = document.querySelector("#artist");
//   const h4 = document.querySelector("h4");

//   const titleContent = title.value;
//   const artistContent = artist.value;

//   console.log("dick ", titleContent, artistContent);
//   const res = await fetch("http://localhost:3000/get-lyrics", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       user: {
//         artist: artistContent,
//         title: titleContent,
//       },
//     }),
//   });
//   console.log("aaaa");
// event.preventDefault();
// form.addEventListener("submit", (e) => {
//   const titleContent = title.value;
//   const artistContent = artist.value;
//   console.log(titleContent);
//   console.log(artistContent);
//   // e.preventDefault();
//   fetch("http://localhost:3000/get-lyrics", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       user: {
//         artist: artistContent,
//         title: titleContent,
//       },
//     }),
//   }).then((response) => {
//     console.log(response);
//   });
// });
// };

const onSubmit = (e) => {
  e.preventDefault();
};

const handleClick = async (e) => {
  const title = document.querySelector("#title");
  const artist = document.querySelector("#artist");
  const titleContent = title.value;
  const artistContent = artist.value;
  const res = await fetch("http://localhost:3000/get-lyrics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        artist: artistContent,
        title: titleContent,
      },
    }),
  });
  const aa = await res.text();
  const h4 = document.querySelector("h4");
  h4.innerText = aa;
  // e.preventDefault();
};
