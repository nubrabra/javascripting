var restaurants = [
  {
    name: 'Audrey',
    place: 'esplanade',
    cost: 1000
  },
  {
    name: 'Pizza Company',
    place: 'central',
    cost: 1500
  },
  {
    name: 'Jone Salad',
    place: 'esplanade',
    cost: 500
  },
  {
    name: 'Swesens',
    place: 'esplanade',
    cost: 1000
  },
  {
    name: 'Pizza Hut',
    place: 'central',
    cost: 1500
  }
];
// 111
var restaurantIsCostBelow1500 = [];

for (var i = 0 ; i < restaurants.length ; i++) {
  if (restaurants[i].cost < 1500) {
    restaurantIsCostBelow1500.push(restaurants[i]);
  }
}

console.log(restaurantIsCostBelow1500);

// 222
// function costLess1500(arg1) {
//   return arg1.cost < 1500;
// }
//
// console.log(restaurants.filter(costLess1500));
