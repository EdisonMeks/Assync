const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');
async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

async function makeBeans(){
let type = await shopForBeans();
let isSoft = await soakTheBeans(type);
let dinner = await cookTheBeans(isSoft);
console.log(dinner);

}
makeBeans();