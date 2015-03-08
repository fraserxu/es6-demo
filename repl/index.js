'use strict';

/**
 * let/const over var
 */
const venue = 'Wiredcraft Office';
let name = 'Shanghai JavaScript Meetup!';
var time = '9th March';

for (let i = 0; i < 10; i++) {}

/**
 * template strings over concatenation
 */
let event = `
  Welcome to the ${name} meetup on ${time} at ${venue}.
  Hope you have a good time here.
`;


/**
 * Destructuring
 */
let [a, , b] = [1, 2, 3];
console.log(a);
console.log(b);

let obj = {
  c: '1',
  d: '2',
  e: '3'
};
let {c, d, e} = obj;
console.log(`${c}, ${d}`, e);

/**
 * Enhanced Object Literals
 */
let person = {
  firstName: 'Fraser',
  lastName: 'Xu',
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log('person', person.fullName())

/**
 * Class
 * http://javascriptplayground.com/blog/2014/07/introduction-to-es6-classes-tutorial/
 */
class View {
  constructor(options) {
    // { model, template } = options;
    this.model = options.model;
    this.template = options.template;
  }

  render() {
    return _.template(this.template, this.model.toObejct())
  }
}

class Model {
  constructor(properties) {
    this.properties = properties;
  }

  toObject() {
    return this.properties;
  }
}

var jack = new Model({
  name: 'jack'
});

var view = new View({
  model: jack,
  template: 'Hello, <%= name %>'
});

console.log(view.render());

class LogView extends View {
  constructor(options) {
    // { model, template } = options;
    super(options);
  }

  render() {
    let compiled = super.render();
    console.log('compiled', compiled);
  }
}

/**
 * Arrows
 */
let numbers = [1, 2, 3, 4, 5, 6];
let odd = numbers.filter((d) => d % 2 != 0);

let bob = {
  friends: ['xeodou', 'makara', 'hax'],
  log() {
    this.friends.forEach((friend) => {
      console.log(`Hi, ${friend}`);
    })
  }
}
bob.log();


/**
 * Default + Rest + Spread
 */
function f1(x, y=12) {
  return x + y;
}
f1(3);

function f2(x, ...y) {
  return x * y.length;
}
f2(3, 'hello', true);

function z(x, y, z) {
  return x + y + z;
}
f3(...[1, 2, 3]);


/**
 * Modules
 */
// lib/math.js
export function sum(x, y) {
  return x + y;
}
// export let pi = 3.141593;

// app.js
import * as math from "lib/math";
alert("2π = " + math.sum(math.pi, math.pi));

// otherApp.js
import {sum, pi} from "lib/math";
alert("2π = " + sum(pi, pi));

import React from 'react';

export function crc32(){}
import { crc32 } from 'crc32';

