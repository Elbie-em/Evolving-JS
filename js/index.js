import moment from 'moment';
import _ from 'lodash';

console.log('Hello From JavaScript');
console.log(moment().startOf('day').fromNow());

console.log('Using Babel');

var name = "Elbie", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

function component() {
  const element = document.createElement('div');

  
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

let container = document.getElementById('cont');

container.appendChild(component());