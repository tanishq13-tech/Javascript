# Project Related to Dom

## Project link

[Click Here](https://stackblitz.com/~/github.com/tanishq13-tech/dom-project-by-tanishq)

## Solution code

## project 2

```Javascript
const form = document.querySelector('form')
// this usecase will give empty
// const height = parseInt(document.querySelector('height').value)

form.addEventListener('submit', function(e) {
 e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid height ${weight}`;
    } else {
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);

     /* results.innerHTML = `<span>${bmi}</span><br>`;

        if (bmi<18.6) {
            results.innerHTML += `<span>Under weight</span>`;
        } else if (bmi>=18.6 || bmi<=24.9) {
            results.innerHTML += `<span>Normal weight</span>`;
        } else {
            results.innerHTML += `<span>Overweight</span>`;
        }  
     */

        let message = '';
        if (bmi<18.6) {
            message = `Under weight`;
        } else if (bmi>=18.6 || bmi<=24.9) {
            message = `Normal weight`;
        } else {
            message = `Overweight`;
        }
        results.innerHTML = `<span>${bmi} <br> <span>${message}</span`;
    }
})
```
