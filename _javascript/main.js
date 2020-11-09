// import Splide from '@splidejs/splide';
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  //Close burger clicking outside
  for (const sec of document.getElementsByTagName("section")) {
    sec.addEventListener('click', () => {
      if (document.getElementsByClassName("navbar-burger")[0]) {
        document.getElementsByClassName("navbar-burger")[0].classList.remove("is-active")
        document.getElementsByClassName("navbar-menu")[0].classList.remove("is-active")
      }
    })
  }

  // Close Modal with background
  const $closeModal = Array.prototype.slice.call(document.querySelectorAll('.modal-background'), 0);

  // Check if there are any background
  if ($closeModal.length > 0) {
    // Add a click event on each of them
    $closeModal.forEach(el => {
      el.addEventListener('click', () => {
        el.parentElement.classList.remove('is-active');
        document.getElementsByTagName("html")[0].classList.remove("is-clipped")
        // window.history.pushState('page2', 'Title', '/');
        window.history.back()
      });
    });
  }

  //Create splide
  var slideCon = document.getElementById("slideshow").getElementsByClassName("splide__list")[0]
  for (let a = 2; a <= 8; a++) {
    let slide = slideCon.getElementsByClassName("splide__slide")[0].cloneNode(true);
    slide.getElementsByTagName("img")[0].src = `img/${a}.webp`
    slideCon.appendChild(slide)
  }

  var splide = new Splide('.splide', {
    type: 'loop',
    focus: 'center',
    perPage: 5,
    height: 300,
    perMove: 1,
    // autoplay: true,
    interval: 5000,
    lazyLoad: 'nearby',
    cover: true,
    heightRatio: 0.5,
    breakpoints: {
      900: {
        perPage: 3,
        autoplay: false,
      }
    }
  }).mount();

  // splide.on('active', function (e) {
  //   document.getElementsByClassName("bg-image")[0].style.backgroundImage = `url(${e.index + 1}.jpg)`
  // });

  splide.on('click', (e) => {
    let SModal = document.getElementById("splide-modal")
    SModal.getElementsByClassName("modal-content")[0].innerHTML = e.container.innerHTML
    let img = SModal.getElementsByTagName("img")[0]
    img.style.display = "block"
    img.style.height = "100%"
    img.style.margin = "auto"
    SModal.classList.add("is-active")
    document.getElementsByTagName("html")[0].classList.toggle("is-clipped")

    window.history.pushState(`${img.src}`, `${img.src}`, `/#img`);
    // window.location.hash = '#hash_value';
  });

  // window.addEventListener("onhashchange", function(){
  //   console.log("hello")
  // });

  //Backbutton close modals
  window.onhashchange = () => {
    let modal = document.querySelector("#splide-modal.is-active")
    if (modal) {
      modal.classList.remove('is-active');
      document.getElementsByTagName("html")[0].classList.remove("is-clipped")
    }
  }

  window.onscroll = function () {
    if (document.body.scrollTop > 190 || document.documentElement.scrollTop > 190) {
      document.querySelector(".logo-title").style.opacity = "1";
      document.querySelector(".logo-title").style.visibility = "visible";
      document.querySelector(".navbar-logo").style.opacity = "1";
      document.querySelector(".navbar-logo").style.visibility = "visible";

    } else {
      document.querySelector(".logo-title").style.opacity = "0";
      document.querySelector(".logo-title").style.visibility = "none";
      document.querySelector(".navbar-logo").style.opacity = "0";
      document.querySelector(".navbar-logo").style.visibility = "none";
    }
  };


});




