const employers = ['Alex', '', 'ludmila', 'Viktor', ' ', 'olEg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
// 1
let  names = employers.filter((name, ) => {
  return  name.length >1 ;
})

// 2
names = names.map((item) => item.toLowerCase());


// 3

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
// Деструктуризация объектов 
const {cash, eu, rus} = sponsors
// 4
let sumSponsors= [...eu, ...rus];
// console.log(sumSponsors)

// 5
function calcCash(own=[0]) {
  
  return own.reduce((a, b) => a + b, 0)
}
const money =calcCash(cash)


// 6
function makeBusiness ({owner='Alex', director= 'Victor', cash=0, name=[] } = {} ){
  // let sumSponsors = (...ue,...rus);
  
  console.log(`We have a business. Owner:   ${owner}  , director:   ${director}  . Our budget:  ${cash} . And our employers:  ${name}`);
  console.log('And we have a sponsors: ');
    // 7
  console.log(`${sumSponsors} unexpected sponsor`)
  console.log(`Note. Be careful with   ${sponsors.eu[0]} . It's a huge risk.`);
}
makeBusiness({owner:'Sam',  cash:money, name:names})
