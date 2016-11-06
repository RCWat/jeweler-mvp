import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Items } from '../../api/items.js';

import './inventory.html';

Template.inventory.onRendered(() => {

});

Template.inventory.helpers({
  items: () => {
    return Items.find().fetch();
  }
});

Template.inventory_insert.events({
  'submit .form-create-item'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    console.log(event);
    console.log(event.target.item_quantity.value);

    // Get value from form element
    const target = event.target;  
    const name = target.item_name.value;
    const quantity = target.item_quantity.value;
    const retail = target.item_retail.value;
    const wholesale = target.item_wholesale.value;

    // Insert a task into the collection
    Items.insert({
      name,
      quantity,
      retail,
      wholesale
    });

    target.reset();
  },
  'click .btn-delete' (event) {
    let id = Items.findOne()._id;
    console.log(id);
    Items.remove({_id: id});
  }
});