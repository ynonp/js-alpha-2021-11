import './style.css'

import $ from 'jquery';
import { twice } from './utils.js';

$('#app').html(`
  <h1>jQuery can do that ???</h1>
  <input type="text" />
  <p>2 * 3 = ${twice(3)}</p>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`);
