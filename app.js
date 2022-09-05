const log = item => console.log(item);


// What Problem Does This Solve? //

// Randomly Picks Huel Combinations So That I Dont Have To. It Will Not Chose A Combination That I Have Already Rated. It Will Save My Combinations Tried Along With My Rating Of Them.//

// What Do We Need? //

// 1. Array Of Huel Flavors // 
const huelFlavors = ['Chocolate','Banana','Cinnamon Roll','Cookies n Creme', 'Peanut Butter', 'Strawberry Shortcake']

// 2. Array Of Flavors Already Tried. //
const triedFlavors = ['Chocolate Banana','Peanut Butter Banana', 'Cookies n creme Strawberry Shortcake']

// 3. Array Of Potential Flavors // 
const potentialFlavors = []

// 4. Function To Add Flavors To Tried Array. Chocolate Banana and Banana Chocolate Should Both Be In  Combination Tried. //

// 5. When Picking A Flavor It Must Check Flavors Tried Array. 

// 6. If It Has Tried One Flavor With Everything Then It Should Remove That Flavor From Array Of Flavors. Such as Already Tried Chocolate with everything, Remove Chocolate. 





const flavorPicker = () => {
  const random = Math.floor(Math.random() * huelFlavors.length)
  const flavor = huelFlavors[random]
  return flavor
}

const flavorCombiner = () => {
  let flavor1 = flavorPicker()
  let flavor2 = flavorPicker()
  return flavor1 + ' ' + flavor2
}



log(flavorCombiner())