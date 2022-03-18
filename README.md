### To make this app working you will need to go to 

### https://home.openweathermap.org/users/sign_in

### Create account and obtain api key it is free of charge

### Copy the key generated and paste it in the quotes of this.key = ''; that is located in openWeatherAPI.js file, and cityCoordinatesAPI.js Then save and it will be good to go

### class OpenWeatherAPI {
###  constructor() {
###    this.key = 'paste key in here';

### class cityCoordinatesAPI.js {
###  constructor() {
###    this.key = 'paste key in here';

### This Weather app is very simple . Use api data from openweather api.First it fetch the city coordinates then based on them fetch the weather for this praticular location and displays it in the DOM. Also the app uses the local storage in the browser.