

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


  

mobileNav.addEventListener('click', toggleNav);
closeButton.addEventListener("click", close);


email.addEventListener('click', popMessage);
closeB.addEventListener("click", closeMessage);



})();


(() => {
  console.log('fired');
    
  const lightBox = document.querySelector('.lightbox'),
  videoImg = document.querySelector('#videoImg'),
  lightClose = document.querySelector('.close-lightbox'),
  // images = document.querySelectorAll('#galleryImg img'),
  houseVideo = document.querySelector('.videol');

  

  function popLightBox() {
    lightBox.classList.add('show-lightbox');
    }
    
    // function popImage() {
    // 	images.forEach(image => image.classList.add("show-lightboxI"));
    // }
    
    function closeLightBox(event) {
    event.preventDefault();
    // make the lightbox close
    // houseVideo.currentTime = 0; // rewind the vide
    //event.preventDefault();
    // make the lightbox close
    lightBox.classList.remove('show-lightbox');
    houseVideo.currentTime = 0; // rewind the video
      houseVideo.pause();
    }

    videoImg.addEventListener("click", popLightBox);
houseVideo.addEventListener('ended', closeLightBox);
lightClose.addEventListener("click", closeLightBox);

})();


(() => {
    console.log('fired');
    

   const  project = document.querySelector('.project'),
  projects = document.querySelectorAll('.p'),
  proClose = document.querySelector('.close-project');
  // images = document.querySelectorAll('#galleryImg img'),


// function closeImage() {
// 	event.preventDefault();
//
// 	images.forEach(image => image.classList.remove("show-lightboxI"));
// }

    function popProjects() {
      project.classList.add('show-project');
      }
      
      // function popImage() {
      // 	images.forEach(image => image.classList.add("show-lightboxI"));
      // }
      
      function closeProjects(event) {
      event.preventDefault();
      // make the lightbox close
      // houseVideo.currentTime = 0; // rewind the vide
      //event.preventDefault();
      // make the lightbox close
      project.classList.remove('show-project');
      }
  

projects.forEach(project => project.addEventListener("click", popProjects));
proClose.addEventListener("click", closeProjects);

})();


const myVM = (() => {
  // get the user buttons and fire off an async DB query with Fetch
  let userButtons = document.querySelectorAll('.u-link'),
      lightbox = document.querySelector('.project');

  
  function parseUserData(portfolio) { //things is a database result
      let targetDiv = document.querySelector('.body1');
          // targetImg = lightbox.querySelector('img');

          
      let bioContent = `
      <div class="hero-p">
      <h2>${portfolio.HEADING}</h2>
  <p>${portfolio.TAGLINE}</p>
  <img src="${portfolio.HOVER_IMG}" alt="">
  </div>

<section class="pro-desc1">
<h3>${portfolio.PROJECT_TITLE}</h3>
<p>${portfolio.PROJECT_DESC}</p>
</section>

<section id="mockup">
<img src="${portfolio.IMAGE}" alt="">
<video class="int-video" src="${portfolio.VIDEO}" type="video/mp4" controls></video>
</section>

<section class="pro-desc">
    <h3>Project Description</h3>
    <p>${portfolio.DESCRIPTION}</p>
</section>
      `;

   // ${renderSocialMedia(things.social)}

      console.log(bioContent);

      targetDiv.innerHTML = bioContent;
      // targetImg.src = portfolio.imgsrc;

      lightbox.classList.add('show-project');

  }

  function getUserData(event) {
      // kill the default a tag behaviour (don't navigate anywhere)
      event.preventDefault(); 
      // find the image closest to the anchor tag and get its src property
      // let imgSrc = this.getAttribute('src');
      let url = `/users/${this.getAttribute('href')}`; // /1

      fetch(url) // go get the data
          .then(res => res.json()) // parse the json result inta a plain object
          .then(data => {
              console.log("my database result is: ", data)

              // data[0].imgsrc = imgSrc;

              parseUserData(data[0]);
          })
          .catch((err) => {
              console.log(err)
          });
  }

  userButtons.forEach(button => button.addEventListener('click', getUserData))

  lightbox.querySelector('.close-project').addEventListener('click', function() {
      lightbox.classList.remove('show-project');
  })

})();