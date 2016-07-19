//TODO: Support also string as argument
export const getInfo = (element, callback) => {
  element = typeof element === 'string' ? document.querySelector(element) : element;
  element.addEventListener('change', function() {onChange(this, callback)});
};

const onChange = (element, callback) => {
  const file = element.files[0];
  const reader = new FileReader();

  reader.onload = e => {
    const img = new Image();

    img.src = e.target.result;
    img.onload = _ => callback(img);
  };

  reader.readAsDataURL(file);
};