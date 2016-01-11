import Collections from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {ReactiveDict} from 'meteor/reactive-dict';

export function initContext() {
  return {
    Meteor,
    Collections,
    LocalState: new ReactiveDict(),
  };
}
