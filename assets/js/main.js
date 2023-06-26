/**
* Template Name: Selecao
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/selecao-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
   
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
   
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 200 && window.scrollY<7050) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }

    let icnDonar = select('.back-up')
    if (icnDonar) {
      const toggleBacktotop = () => {
        if (window.scrollY > 200 && window.scrollY<7050) {
          icnDonar.classList.add('active')
        } else {
          icnDonar.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    let icnYoutube = select('.back-youtube')
    if (icnYoutube) {
      const toggleBacktotop = () => {
        if (window.scrollY > 200  && window.scrollY<7050) {
          icnYoutube.classList.add('active')
        } else {
          icnYoutube.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }

    let icnTiktok = select('.back-tiktok')
    if (icnTiktok) {
      const toggleBacktotop = () => {
        if (window.scrollY > 200 && window.scrollY<7050) {
          icnTiktok.classList.add('active')
        } else {
          icnTiktok.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }

    let icnFacebook = select('.back-facebook')
    if (icnFacebook) {
      const toggleBacktotop = () => {
        if (window.scrollY > 200 && window.scrollY<7050) {
          icnFacebook.classList.add('active')
        } else {
          icnFacebook.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }

    let icnInstagram = select('.back-instagram')
    if (icnInstagram) {
      const toggleBacktotop = () => {
        if (window.scrollY > 200  && window.scrollY<7050) {
          icnInstagram.classList.add('active')
        } else {
          icnInstagram.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }

    let icnTwitter = select('.back-twitter')
    if (icnTwitter) {
      const toggleBacktotop = () => {
        if (window.scrollY > 200 && window.scrollY<7050) {
          icnTwitter.classList.add('active')
        } else {
          icnTwitter.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }

    let icnLinkedin = select('.back-linkedin')
    if (icnLinkedin) {
      const toggleBacktotop = () => {
        if (window.scrollY > 200 && window.scrollY<7050) {
          icnLinkedin.classList.add('active')
        } else {
          icnLinkedin.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    //Perú
    // Aquí puedes agregar tus ubicaciones con las coordenadas correspondientes
    var locations = [
      { name: 'San Martín', lat: -7.181275, lng: -76.588606 },
      { name: 'Cusco', lat: -13.529161398105604, lng: -71.97030383920642 },
      { name: 'La libertad', lat: -8.033186, lng: -78.365647 },
      { name: 'Ancash', lat: -9.390865, lng: -77.658928 },
      { name: 'Lima', lat: -12.042915543363533, lng: -77.05762847179358 },
    ];

    var map = L.map('map',{scrollWheelZoom: false}).setView([-9.429720534607323, -75.45098387739934], 4.5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    locations.forEach(function(location) {
      var marker = L.marker([location.lat, location.lng]).addTo(map);
      marker.bindPopup(location.name);
    });
  

    //Latinoamerica
     var lugares = [
      { name: 'México', lat: 23.836154436247057, lng: -103.0338155979092 },
      { name: 'Colombia', lat: 3.5495371830535394, lng: -73.17445545743264 },
      { name: 'Perú', lat: -10.339654511456818, lng: -76.0232624408188 },
      { name: 'Chile', lat: -26.655427196459204, lng: -70.47468459352687 },
      { name: 'Argentina', lat: -35.342572643572595, lng: -64.98915890983525 },
    ];

    var lati = L.map('lati',{scrollWheelZoom: false}).setView([-5.429720534607323, -65.45098387739934], 2.4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(lati);

    // Agrega marcadores para cada ubicación
    lugares.forEach(function(location) {
      var marker = L.marker([location.lat, location.lng]).addTo(lati);
      marker.bindPopup(location.name);
    });

  })()