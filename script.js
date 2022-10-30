'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);

  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText); // we used [data] instead of just data because after parse we get a object and it of array to convert the return data into array it is recommeded to use "[]" or else we won't get the values from the data variable.

    console.log(data);

    const html = `<article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 100000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;



  })
}

getCountryData('portugal');

getCountryData('USA');


getCountryData('india');
*/


const renderError = function (msg) {

  countriesContainer.insertAdjacentText('beforeend', msg);
  //countriesContainer.style.opacity = 1;



}


const _renderCountry = function (data, className = '') {
  let html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} Million</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

/*

const getCountryAndNeighbours = function (country) {

  // AJAX call 1
  const request = new XMLHttpRequest()
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render country 1
    _renderCountry(data);

    // GEt neighbour country

    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    // 2nd AJAX call
    const request2 = new XMLHttpRequest()
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);

    request2.send();

    request2.addEventListener('load', function () {

      const data2 = JSON.parse(this.responseText);

      _renderCountry(data2, 'neighbour');



    })

  })

}

getCountryAndNeighbours('sri lanka');


*/




//////////////// the below part of the code is the with the default syntax and not actual arrow function

/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`).then(function (response) {
    console.log(response);
    return response.json();

  }).then(function (data) {
    console.log(data);
    _renderCountry(data[0]);


  })

}
*/



const getJSON = function (url, errorMSg = 'Something went wrong ') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMSg} ${response.status}`)
    return response.json();
  })



}
// the below part of the code is same as first but with refactured and wrote a clear code
/*
const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      _renderCountry(data[0])  // first AJAX call fullfilled over here 
      console.log(data[0]); // result of the first AJAX call
      const neighbour = data[0].borders?.[0]; // accessing a array value from the first AJAx call 
      if (!neighbour) throw new Error('No Neighbour Found!'); //gaurd if condition

      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found ');  ///Second Ajax call
    })
    .then(data => _renderCountry(data, 'neighbour')) // rendering the slide in the DOM.
    .catch(err => renderError(`Something went wrong. ${err.message}. Try again`))
    .finally(() => {

      countriesContainer.style.opacity = 1;

    });


}

*/

/* 
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => {
      console.log(response.ok)
      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`);

      }
      return response.json()
    })
    .then(data => {
      _renderCountry(data[0])  // first AJAX call fullfilled over here 
      console.log(data[0]); // result of the first AJAX call
      const neighbour = data[0].borders?.[0]; // accessing a array value from the first AJAx call 
      if (!neighbour) return; //gaurd if condition

      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);  ///Second Ajax call
    })
    .then(response => response.json()) // converting it to Javascript object 
    .then(data => _renderCountry(data, 'neighbour')) // rendering the slide in the DOM.
    .catch(err => renderError(`Something went wrong. ${err.message}. Try again`))
    .finally(() => {

      countriesContainer.style.opacity = 1;
    });


}


 */

btn.addEventListener('click', function () { getCountryData('Germany') });







///////////// Coding challenge 1

/*
const whereAmI = function (lat, long) {
  //fetch(`https://geocode.xyz/${lat},${long}?geoit=json`).
  fetch(`https://geocode.xyz/${lat},${long}?geoit=json&auth=139180836449984e15939443x17477`).
    then(resp => {

      if (!resp.ok) throw new Error(`Problem with Geocoding ${resp.status}`);

      console.log(resp)
      return resp.json()

    }).
    then(data => {
      console.log(data);
      console.log(`you are in ${data.city}, ${data.country}`)

      return fetch(`https://restcountries.com/v2/name/${data.country}`)
    }).then(res => {

      if (!res.ok) throw new Error(`Country Not Found ${res.status}`);
      return res.json();

    }).then(data => _renderCountry(data[0]))


    .catch(err => {
      console.log(err.message);
    })


}


whereAmI(19.037, 72.873)*/
//whereAmI(52.508, 13.381)
//whereAmI(-33.933, 18.474)




const whereIAm = function (lat, long) {

  fetch(`https://geocode.xyz/${lat},${long}?geoit=json&auth=139180836449984e15939443x17477`)
    .then(res => {
      console.log(res);
      if (!res.ok) throw new Error(`GeoLocation Api failed ${res.status}`)
      return res.json();
    }).then(data => {
      console.log(data);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    }).then(resp => {

      if (!resp.ok) throw new Error(`No Country found ${resp.status}`)
      return resp.json();
    }).then(data => {

      if (!data[0] == undefined) throw new Error(`Data was not found ${data.message}`)
      _renderCountry(data[0])
      console.log(data)
    })
  //.catch(err => console.log(err.message))

}

whereIAm(52.508, 13.381);