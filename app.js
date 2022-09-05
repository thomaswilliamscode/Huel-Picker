const log = item => console.log(item);


// What Problem Does This Solve? //

// Randomly Picks Huel Combinations So That I Dont Have To. It Will Not Chose A Combination That I Have Already Rated. It Will Save My Combinations Tried Along With My Rating Of Them.//



//  Array Of Huel Flavors // 
const huelFlavors = ['Chocolate','Banana','Cinnamon Roll','Cookies n Creme', 'Peanut Butter', 'Strawberry Shortcake'];

//  Array Of Flavors Already Tried. //
const triedFlavors = ['Chocolate Banana','Peanut Butter Banana', 'Cookies n Creme Strawberry Shortcake'];

//  Array Of Potential Flavors // 
const potentialFlavors = [];

// Global Variable for flavor Combiner //
let combination = [];





// Picks a random Flavor
const flavorPicker = () => {
  const random = Math.floor(Math.random() * huelFlavors.length);
  const flavor = huelFlavors[random];
  return flavor;
}

// Combines 2 Random Flavors and returns the value
const flavorCombiner = () => {
  let flavor1 = flavorPicker();
  let flavor2 = flavorPicker();
  let answer1 = flavor1 + ' ' + flavor2;
  let answer2 = flavor2 + ' ' + flavor1;
  combination.push(answer1);
  combination.push(answer2);
}

// Removes items in combination array so we can check again. 
const combinationZero = () => {
  combination.pop()
  combination.pop()
}



// Checks if FlavorCombiner flavors have already been tried before. 
const flavorCheck = () => {  
  let question1 = combination[0];
  let question2 = combination[1];
  let triedBefore1 = triedFlavors.indexOf(question1);
  let triedBefore2 = triedFlavors.indexOf(question2);
  log(question1 + ' ' + triedBefore1);
  log(question2 + ' ' + triedBefore2);

  // while flavors picked are tried flavors, pick new flavors.
  while (triedBefore1 > -1 || triedBefore2 > -1){
      log('in the while');
      combinationZero();
      flavorCombiner();
      question1 = combination[0];
      question2 = combination[1];
      triedBefore1 = triedFlavors.indexOf(question1);
      triedBefore2 = triedFlavors.indexOf(question2);
      // If new flavors picked have never been tried before then break. //
      if (triedBefore1 == -1 && triedBefore2 == -1) {
          log(`Answer 3: ${question1 + ' ' + question2}`);
          break
      }
  }
  
  
}

// Runs everything //
const run = () => {
  flavorCombiner();
  flavorCheck();
};

run();
