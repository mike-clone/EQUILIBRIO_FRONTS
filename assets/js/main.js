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
        if (window.scrollY > 200) {
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
        if (window.scrollY > 200) {
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
        if (window.scrollY > 200) {
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
        if (window.scrollY > 200) {
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
        if (window.scrollY > 200) {
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
        if (window.scrollY > 200) {
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
        if (window.scrollY > 200) {
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
        if (window.scrollY > 200) {
          icnLinkedin.classList.add('active')
        } else {
          icnLinkedin.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
  
  })()