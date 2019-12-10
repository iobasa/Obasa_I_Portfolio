(() => {
    console.log('fired');
    
    	// set up your variable stack ->
	let mobileNav = document.querySelector("#button"),
    navPanel = document.querySelector("#burgerCon"),
    closeButton = document.querySelector(".close"),
    closeB = document.querySelector(".closeM"),
    navLinks = navPanel.querySelectorAll('a'),
    message = document.querySelector('.email'),
    email = document.querySelector('.send1');


function toggleNav(e) {
  // e is the event object, by default, anchor tags try to navigate somewhere (this is built-in functionality)
  // we don't want that to happen to prevent the default behaviour and with your
  e.preventDefault();

  // console.log is just testing purposes... remove this when you have things working
  console.log('should show nav dropdown');

  // this should only
  if (this.nodeName == "A") {
    //we clicked on an anchor tag, o do some navigation
    window.scrollTo ({
      // we can ask all the window to scroll to an element on the page => smoothscroll effect
      top: this.offsetTop,
      behavior: 'smooth'
    })
  }

  // make the mobile nav show up when you click on the new link at the top right
  // and make it go away again in a second click (so - toggle)
  navPanel.classList.add("show-mobile-nav");
}

function close(event) {
    event.preventDefault();
    console.log('should show nav dropdown close');
    // make the lightbox close
    navPanel.classList.remove("show-mobile-nav");
  }

  function popMessage() {
    console.log('should show nav dropdown open');
    message.classList.add('show-message');
  }

  function closeMessage(event) {
    event.preventDefault();
    console.log('should show nav dropdown close');
    // make the lightbox close
    message.classList.remove('show-message');
  }



    function animateBanners() {
      // we need an offset that we can multiply by to animate
      // our banners to the left and make the active one show up
  
      let offset = 100,
          multiplier = this.dataset.offset;
          // this is the data-offset custom data attribute
          // on each of the sigils
      console.log((offset * multiplier) + "%");
  
      // move the banners to the left using the product of our math
      bannerImages.style.right = `${offset * multiplier + "%"}`;

      // grab a reference to the current vid in the className object
      //debugger;
      //get the className property, split it into its seperate words[an array],
      //then get the last word --> [1] --> that will always be the house name
  
      // the multiplier is the outer array index (and also the data-offset custom attribute on
      // the html element -> the shield you're clicking on);
      // the second [] is the INNER array reference (see waaaaay up at the top) -> 0 is the house name, 1 is the house data
      portName.textContent = `${portData[multiplier][0]}`;
      portInfo.textContent = portData[multiplier][1];
    }


  
  // //sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
  // arrow.forEach(arrow => arrow.addEventListener("click", animateBanners));

mobileNav.addEventListener('click', toggleNav);
closeButton.addEventListener("click", close);


email.addEventListener('click', popMessage);
closeB.addEventListener("click", closeMessage);


})()