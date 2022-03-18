class CityCoordinates {
  constructor() {
    this.key = ''; // put the API key here iside the quotes
    this.limit = 5;
  }

  async getCityLatLon(city, country, state = '') {
    const latLonRes = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=${this.limit}&appid=${this.key}`)

    const latLonData = await latLonRes.json()

    return latLonData
  };

}