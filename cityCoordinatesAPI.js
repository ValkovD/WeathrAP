class CityCoordinates {
  constructor() {
    this.key = '353e849b8f59b7ff31d81af622d5ac1e';
    this.limit = 5;
  }

  async getCityLatLon(city, country, state = '') {
    const latLonRes = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=${this.limit}&appid=${this.key}`)

    const latLonData = await latLonRes.json()

    return latLonData
  };

}