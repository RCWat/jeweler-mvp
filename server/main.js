import { Meteor } from 'meteor/meteor';

import '/imports/startup/server';

import { Items } from '../imports/api/items.js';

Meteor.startup(() => {
  Items.remove({});
  let defaultItems = [
  {
    name: 'Earrings',
    quantity: 10,
    retail: 1999,
    wholesale: 1000
  },
  {
    name: 'Cufflinks',
    quantity: 5,
    retail: 2499,
    wholesale: 15
  },
  {
    name: 'Engagement Ring',
    quantity: 2,
    retail: 69999,
    wholesale: 500
  }
  ];
  defaultItems.forEach((item) => {
    Items.insert(item);
  });
  console.log(Items.find().fetch());
});
