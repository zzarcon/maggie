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
    img.onload = _ => callback(createInfoObject(img));
  };

  reader.readAsDataURL(file);
};

const getData = img => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const width = canvas.width = img.width;
  const height = canvas.height = img.height;

  context.drawImage(img, 0, 0);

  return context.getImageData(0, 0, width, height);
};

const createInfoObject = img => {
  return {
    width: img.width,
    height: img.height,
    src: img.src,
    element: img,
    imageData: getData(img).data
  };
};