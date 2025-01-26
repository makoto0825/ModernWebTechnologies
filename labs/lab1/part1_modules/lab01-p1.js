import lodash from 'lodash';

const holidays = [
  {
    name: 'Christmas',
    date: new Date('2025-12-25'),
  },
  {
    name: 'Canada Day',
    date: new Date('2025-07-01'),
  },
  {
    name: 'April Fools',
    date: new Date('2025-04-01'),
  },
];

let today = new Date();

holidays.forEach((holiday) => {
  let dateDiff = holiday.date - today;
  console.log(Math.ceil(dateDiff / (1000 * 60 * 60 * 24)));
});

let random_Holiday = lodash.sample(holidays); //Use the Lodash library to output the name and date of a random holiday
console.log(random_Holiday);
console.log(lodash.findIndex(holidays, { name: 'Christmas' })); //Use the Lodash library to find the index of the April Fools holiday
console.log(lodash.findIndex(holidays, { name: 'Canada Day' })); //Use the Lodash library to find the index of the Canada Day holiday
