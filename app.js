const api = new OpenWeatherAPI();
const cor = new CityCoordinates();
const ui = new UI();
const ls = new LS();
//external container storage for vars to be distributed in what scope neded with-out exposing them globally 
const varStor = new VarCoontainer();

const searchCity = document.getElementById('city');
const saveChangesBtn = document.getElementById('w-change-btn');
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Initial dom loaded content from lockal storage by coordinates of default city. Also everytime dom refreshed new get request initiated for the current coordinates stored in LS so THE MOST fresh data loaded
window.addEventListener('DOMContentLoaded', (e) => {
  if (localStorage.getItem('lon') === null && localStorage.getItem('lat') === null) {
    api.getWeather(api.defaultLat, api.defaultLon)
      .then(city => {
        ui.displayMainData(city);
        ls.saveInLs(api.defaultLat, api.defaultLon);
        console.log(city);
      })
  } else {
    api.getWeather(ls.getOutOfLS().lat, ls.getOutOfLS().lon)
      .then(city => {
        ui.displayMainData(city);
      })
  }

})


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
saveChangesBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (searchCity.value === '') {
    saveChangesBtn.removeAttribute("data-bs-dismiss", "modal");
    ui.showAlert();
    setTimeout(function () { ui.clearModalBody() }, 1500);

  } else {
    api.getWeather(varStor.latitude, varStor.longtitude)
      .then(city => {
        ui.clearMainData();
        ui.displayMainData(city);
        ls.saveInLs(varStor.latitude, varStor.longtitude);
        console.log(city);
      })
    ui.clearModalBody();
    searchCity.value = '';
  }
})
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
searchCity.addEventListener('keyup', (e) => {
  let userText = e.target.value;

  if (userText !== '') {
    saveChangesBtn.setAttribute("data-bs-dismiss", "modal");

    cor.getCityLatLon(userText)
      .then(citiesArray => {
        varStor.citiesArray = citiesArray;
        if (citiesArray.length === 0) {
          //show alert city not found from UI object
          ui.showAlert();
          setTimeout(function () { ui.clearModalBody() }, 1500);
        } else {
          //show cities in modal from UI object
          ui.showCitiesModal(citiesArray);
        }
      });
  }
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//get the user choosen city lon and lat from the modal menu
const modalBody = document.getElementById('cities-modal');
modalBody.addEventListener('click', (e) => {
  if (e.target.id === 'radio-btns') {
    varStor.latitude = varStor.citiesArray[e.target.value].lat;
    varStor.longtitude = varStor.citiesArray[e.target.value].lon;
    //print debug dev monitoring--------------------------------------------
    // console.log(varStor.citiesArray);
    // console.log(e.target.value, varStor.latitude, varStor.longtitude);
    // console.log(e.target)
    //----------------------------------------------------------------------
  }
});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>







































