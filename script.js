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







const getCountryData = function (Country) {
  const request = fetch(`https://restcountries.com/v2/name/${Country}`).then(function (response) {
    console.log(response)
  })
}




getCountryData('Portugal')
