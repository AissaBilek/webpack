import _ from 'lodash';
import './style.css';
import PNG_transparency_demonstration_1 from './PNG_transparency_demonstration_1.png';


function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = PNG_transparency_demonstration_1;

  element.appendChild(myIcon);
    return element;
  }
  
  document.body.appendChild(component());