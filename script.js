//setTimeout

const secondFunction = () => {
  setTimeout(() => console.log('Asynch Hey There'), 2000);
}

const firstFunction = () => {
  console.log('first line');
  secondFunction();
  console.log('the end');
}

firstFunction();