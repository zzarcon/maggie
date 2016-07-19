import {getInfo} from '../src';

const init = _ => {
  const input = document.getElementById('my-file');
  const preview = document.getElementById('preview');

  getInfo(input, info => {
    preview.src = info.src;
    console.log(info)
  });
};

document.addEventListener("DOMContentLoaded", init);