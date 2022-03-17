class LS {

  saveInLs(lat, lon) {
    localStorage.clear()
    localStorage.setItem('lat', JSON.stringify(lat))
    localStorage.setItem('lon', JSON.stringify(lon))
  }




  getOutOfLS() {

    return { lat: JSON.parse(localStorage.getItem('lat')), lon: JSON.parse(localStorage.getItem('lon')) }
  }

}