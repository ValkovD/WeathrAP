class OpenWeatherAPI {
  constructor() {
    this.key = '353e849b8f59b7ff31d81af622d5ac1e';
    this.defaultLat = 42.0582;
    this.defaultLon = 25.5916;
  }
  async getWeather(lat, lon) {

    const cityRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.key}`)

    const cityData = await cityRes.json()

    return cityData


  }



};
