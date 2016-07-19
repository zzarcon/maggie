import {getInfo} from '../src';

const init = _ => {
  const input = document.getElementById('my-file');

  getInfo(input, img => {
    console.log('img', img);
  });
};

document.addEventListener("DOMContentLoaded", init);