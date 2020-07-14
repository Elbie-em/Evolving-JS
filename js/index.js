import moment from 'moment';
import _ from 'lodash';
import myName from './myName';

console.log('Hello From JavaScript');
console.log(moment().startOf('day').fromNow());
console.log('Using Babel');
var name = "Elbie", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

//Components

function compo() {
  var element = document.createElement('div');

  // use your function!
  element.innerHTML = myName('Elbie');
  return element;
}

function component() {
  const element = document.createElement('div');

  
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

let container = document.getElementById('cont');

container.appendChild(component());
container.appendChild(compo());