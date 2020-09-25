//setTimeout

// const secondFunction = () => {
//   setTimeout(() => console.log('Asynch Hey There'), 2000);
// }

// const firstFunction = () => {
//   console.log('first line');
//   secondFunction();
//   console.log('the end');
// }

// firstFunction();

/****************************
 * Promises
 */

//  const getIDs = new Promise((resolve, reject) => {
//    setTimeout(() => {
//      resolve([523, 883, 432, 974]);
//    }, 1500);
//  });

//  const getRecipe = recID => {
//    return new Promise((resolve, reject) => {
//     setTimeout(ID => {
//       const recipe = {title: 'Fresh Tomato Pasta', publisher: 'Jonas'};
//       resolve(`${ID}: ${recipe.title}`);
//     }, 1500, recID);
//    });
//  };

//  const getRelated = publisher => {
//    return new Promise((resolve, reject) => {
//      setTimeout(pub => {
//        const recipe = {title: 'Itallian Pizza', publisher: 'Jonas'};
//        resolve(`${pub}: ${recipe.title}`);
//      }, 1500, publisher);
//    });
//  };

//  getIDs.then(IDs => {
//    console.log(IDs)
//    return getRecipe(IDs[2]);
//  })
//  .then(recipe => {
//    console.log(recipe);
//    return getRelated('Caleb');
//  })
//  .then(recipe => {
//    console.log(recipe);
//  });

/******************
 * Async Await
 */

// async function getRecipesAW() {
//   const IDs = await getIDs;
//   console.log(IDs);
//   const recipe = await getRecipe(IDs[2]);
//   console.log(recipe);
//   const publisher = await getRelated('Caleb');
//   console.log(publisher);

//   return recipe;
// };

// getRecipesAW().then(result => console.log(`${result} is the best recipe ever!!`));

/*****************
 * AJAX calls with Fetch and Promises
 */

// function getWeather(woeid) {
//   fetch(`https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/${woeid}`)
//     .then(result => {
//       console.log(result);
//       return result.json();
//     })
//     .then(data => {
//       console.log(data);
//       const today = data.consolidated_weather[0];
//       let tempHighF = today.max_temp * (9 / 5) + 32;
//       let tempLowF = today.min_temp * (9 / 5) + 32;
//       console.log(`Today in ${data.title} the high will be ${tempHighF} and the low is ${tempLowF}, I can't wait for fall!`);
//     });
// };

// getWeather(2487956);
// getWeather(44418);


/***********************
 * AJAX calls with Fetch and Async/Await
 */

async function getWeatherAW(woeid) {
  try {
    const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`);
    const data = await result.json();
    const tomorrow = await data.consolidated_weather[1];

    let tempHighF = tomorrow.max_temp * (9 / 5) + 32;
    let tempMinF = tomorrow.min_temp * (9 / 5) + 32;
    console.log(`Weather tomorrow in ${data.title} includes a high of ${tempHighF} and a low of ${tempMinF}!`)
    return data;
  } catch (error){
    console.log(error);
  };
};

getWeatherAW(2487956);
getWeatherAW(44418).then(dataResult => console.log(dataResult));
