import { Meteor } from 'meteor/meteor';
import { Router } from 'meteor/iron:router';

import '../../ui/layouts/layout.js';
import '../../ui/pages/inventory.js';

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  template: 'inventory'
});