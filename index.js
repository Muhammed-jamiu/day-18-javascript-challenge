console.log("Day-18-javascript-challenge");
localStorage.clear();

//Callback
const doSomething = (callback, other) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback("It did not go well", skills);
    other(20, 4);
  }, 1000);
};
const other = (val1, val2) => {
  const sum = val1 + val2;
  //   console.log(sum);
};

const callback = (err, result) => {
  if (err) {
    // return console.log(err);
  }
  //   return console.log(result);
};
doSomething(callback, other);

///Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});
doPromise.then((result) => {
  // console.log(result);
});
//   .catch((error) => console.log(error));

///
const doPromises = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.includes("Node")) {
      resolve("fullstack developer");
    } else {
      //   reject("Something wrong has happened");
    }
  }, 2000);
});
doPromises
  .then((result) => {
    // console.log(result);
  })
  .catch((error) => console.error(error));
console.clear();

const url = "https://restcountries.com/v2/all";
// // countries api
// fetch(url)
//   .then((response) => response.json())
//   // accessing the API data as JSON
//   .then((data) => {
//     // getting the data
//     // console.log(data);
//   })
//   .catch((error) => console.error(error));

const catsAPI = "https://api.thecatapi.com/v1/breeds";
const fetchingData = fetch(url)
  .then((resp) => {
    resp.json().then((data) => {
      //   let dataFetched = data;
      //   console.log(data[4]);
      //   console.log(typeof data);
    });
  })
  .catch((error) => {
    console.error(error);
  });
console.log(fetchingData);

///
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    // console.log(countries);
  } catch (err) {
    // console.error(err);
  }
};

async function fetchingDatas() {
  try {
    const reps = await fetch(countriesAPI);
    let countriess = await resp.json();
    console.log(countriess);
  } catch (error) {
    console.error(error);
  }
}

console.log("===== async and await");
fetchData();
const countriesAPI = "https://restcountries.com/v2/all";

// fetch(countriesAPI)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
