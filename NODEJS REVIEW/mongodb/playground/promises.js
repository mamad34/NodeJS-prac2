const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([1, 4, 7]);
    reject("Error heppend");
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log("success", result);
  })
  .catch((error) => {
    console.log(error);
  });
