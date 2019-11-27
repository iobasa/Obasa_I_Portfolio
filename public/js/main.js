(() => {
    console.log('fired');

    const form = document.querySelector('form'), submit = form.querySelector('.send');

    	// set up your variable stack ->
	let mobileNav = document.querySelector("#button"),
    navPanel = document.querySelector("#burgerCon"),
    closeButton = document.querySelector(".close"),
    closeB = document.querySelector(".closeM"),
    navLinks = navPanel.querySelectorAll('a'),
    message = document.querySelector('.email'),
    email = document.querySelector('.send');


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
    message.classList.add('show-message');
  }

  function closeMessage(event) {
    event.preventDefault();
    // make the lightbox close
    message.classList.remove('show-message');
  }



    function handleMail(event) {
        event.preventDefault();

        // formdata will be the values of the fields the user fills out (the inputs)
        // maildata is an object we'll build and send through with those values

        let formdata = new FormData(form),
            maildata = {};

        // parse the form data (it's an iterable, so you have to do it this way)
        // and populate the maildata object with the input values (the formdata entries)
        for (let [key, value] of formdata.entries()) {
            maildata[key] = value;
        }

        let url = `/mail`;

        // use the POST superglobal which is more secure than GET, and hit the /mail route in index.js
        // inside the routes folder. this will take in the formdata we're sending, and use that to send our email
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },

            body: JSON.stringify(maildata)
        })
            .then(res => res.json())
            .then(data => {
                // remove this when testing is done and everything is working
                console.log(data);

                if (data.response.includes("OK")) {
                    // we successfully sent an email via gmail and nodemailer!
                    // flash success here, reset the form
                    form.reset();
                    // alert("email was sent!"); // DO NOT use alerts. they are so hacky and gross.
                }
            }) // this will be a success or fail message from the server
            .catch((err) => console.log(err));

        console.log('tried sending mail');
    }

    form.addEventListener('submit', handleMail)
      // these are the triggers that fire off our functionality (when user clicks on something)
mobileNav.addEventListener('click', toggleNav);
closeButton.addEventListener("click", close);


email.addEventListener('click', popMessage);
closeB.addEventListener("click", closeMessage);


})()