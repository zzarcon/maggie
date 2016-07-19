<div style="text-align:center"><img src="http://data.whicdn.com/images/238618455/large.gif" /></div>

#maggie
> :sunrise: Get precious image info from an input file

This module does one thing right, returns information about the image selected in a html input file.

###Examples

**Log image width and height** :fireworks:

```javascript
import {getInfo} from 'maggie';

const inputElement = document.getElementById('my-input');

getInfo(inputElement, info => {
  console.log(`Image dimensions ${info.width}x${info.height}`);
});
```

**Preview the selected image** :ocean:

```javascript
getInfo('#my-input', info => {
  const preview = document.getElementById('img-preview');

  preview.src = info.src;
});
```

**Get the average color** :alien:

```javascript
getInfo('#my-input', info => {
  const data = info.imageData;
  const length = data.length;
  const channelCount = 4; //red, green, blue, alpha
  const colorCount = length / channelCount;
  let red = 0; let green = 0; let blue = 0;

  for (let i = 0; i < length; i += channelCount) {
    red += data[i];
    green += data[i + 1];
    blue += data[i + 2];
  }
  
  red = Math.floor(red / colorCount);
  green = Math.floor(green / colorCount);
  blue = Math.floor(blue / colorCount);

  console.log(red, green, blue);
});
```

###Info Object

The returned `info` object has the following properties

| Property      | Type           | Description
|:-------------:|:--------------:|--------------
| width         | Number         | Image width
| height        | Number         | Image height
| src           | String         | Image source 
| element       | [HTMLImageElement](https://developer.mozilla.org/en/docs/Web/API/HTMLImageElement) | Image Dom element 
| imageData     | [ImageData](https://developer.mozilla.org/en/docs/Web/API/ImageData) | ImageData element based on the image

![](http://new.tinygrab.com/e14c28c92027bb04fa24facdb1a636d33ec8f8c9da.png)

###Author

[@zzarcon](https://twitter.com/zzarcon) :beers: