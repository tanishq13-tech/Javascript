# Project Related to Dom

## Project link

[Click Here](https://stackblitz.com/~/github.com/tanishq13-tech/dom-project-by-tanishq)

## Solution code

## project 3

```Javascript
const clock = document.querySelector('#clock');

setInterval(function() {
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000);
```
