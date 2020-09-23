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

 const getIDs = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve([523, 883, 432, 974]);
   }, 1500);
 });

 const getRecipe = recID => {
   return new Promise((resolve, reject) => {
    setTimeout(ID => {
      const recipe = {title: 'Fresh Tomato Pasta', publisher: 'Jonas'};
      resolve(`${ID}: ${recipe.title}`);
    }, 1500, recID);
   });
 };

 const getRelated = publisher => {
   return new Promise((resolve, reject) => {
     setTimeout(pub => {
       const recipe = {title: 'Itallian Pizza', publisher: 'Jonas'};
       resolve(`${pub}: ${recipe.title}`);
     }, 1500, publisher);
   });
 };

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

async function getRecipesAW() {
  const IDs = await getIDs;
  console.log(IDs);
  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
  const publisher = await getRelated('Caleb');
  console.log(publisher);

  return recipe;
};

getRecipesAW().then(result => console.log(`${result} is the best recipe ever!!`));