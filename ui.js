class UI {
  constructor() {
    this.citiesModal = document.getElementById('cities-modal');
    this.modalInput = document.getElementById('city');

    //img ????

  }
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  displayMainData(data) {
    document.getElementById('w-location').innerText = data.name;
    document.getElementById('w-desc').innerText = data.weather[0].main;
    document.getElementById('w-string').innerText = data.weather[0].description;
    document.getElementById('w-humidity').innerText = `Humidity ${data.main.humidity}%`;
    document.getElementById('w-dewpoint').innerText = `Temperature ${data.main.temp} degrees`;
    document.getElementById('w-feels-like').innerText = `Feels like ${data.main.feels_like} degrees`;
    document.getElementById('w-wind').innerText = `Wind speed ${data.wind.speed}m/s`
  };
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  clearMainData() {
    document.getElementById('w-location').innerText = '';
    document.getElementById('w-desc').innerText = '';
    document.getElementById('w-string').innerText = '';
    document.getElementById('w-humidity').innerText = '';
    document.getElementById('w-dewpoint').innerText = '';
    document.getElementById('w-feels-like').innerText = '';
    document.getElementById('w-wind').innerText = '';
  };
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  showCitiesModal(citiesArray) {
    let output = '';
    citiesArray.forEach((city, index) => {
      output += `
      <div class="card card-body mb-2" id="">
        <div class="row">
          <div class="col-md-6">
            <input type="radio" class="form-check-input" name="optionsRadios" id="radio-btns" value="${index}" checked=""><h4>${city.name}</h4>
          </div>
          <div class="col-md-6">
            <h5><span class="badge bg-dark">Contry: ${city.country}</span></h5>
            <h5><span class="badge bg-dark">State: ${city.state}</span></h5>
            <span class="badge bg-success">Lat ${city.lat}</span>
            <span class="badge bg-success">Lon ${city.lon}</span>
          </div>
        </div>
      </div>
      `
    });
    this.citiesModal.innerHTML = output;
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  showAlert() {
    this.citiesModal.innerHTML = `
    <div class="alert alert-dismissible alert-danger mt-5">
    <strong>Oh snap!</strong> <a href="#" class="alert-link">Please Type Country Name</a> and try again.
  </div>
  `
  };
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  clearModalBody() {
    this.citiesModal.innerHTML = '';
  }
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
};


