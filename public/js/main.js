(() => {
    //try to get the object to do stuff with it.
    const seeMoreButtons = document.querySelectorAll('.see-more'),
            popOver = document.querySelector('.popover');

    var waypoint = new Waypoint({
        // what element is this waypont looking at?
        // the handler will fire when it scrolls into view
        element: document.getElementById('beer2'),
        // what should we do when we hit the waypoint? this is up to you.
        // you can trigger an animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint!')
        this.element.innerHTML += `<p>Added this with Waypoint! We are scrolling ${direction}</p>`;
        }
      })

    var waypoint2 = new Waypoint({
        // what element is this waypont looking at?
        // the handler will fire when it scrolls into view
        element: document.getElementById('beer3'),
        // what should we do when we hit the waypoint? this is up to you.
        // you can trigger an animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 2!')
        //   this.element.innerHTML += `<p>Added this with Waypoint! We are scrolling ${direction}</p>`;
        },

        offset: 200
      })

    function buildPopover(beerdata, el) {
        popOver.querySelector(".ipa-rating").textContent = `IPA Rating: ${beerdata.IpaRating}`;
        popOver.querySelector(".ratings").textContent = `Average Rating: ${beerdata.ratings}`;
        popOver.querySelector(".beer-description").textContent = beerdata.description;

        // show the popover
        popOver.classList.add('show-popover');
        el.appendChild(popOver);
    }

    // run the fetch API and get the DB data
    function fetchData() {
        let targetEl = this,
            url = `/svgdata/${this.dataset.target}`;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // populate the popover
            buildPopover(data, targetEl);
        })
        .catch((err) => console.log(err));
    }

    const svgGraphic = document.querySelector(".svg-wrapper");

    // svgGraphic.addEventListener("click", () => {
    //     console.log(this.querySelector('.svg-graphic'));
    // })

    seeMoreButtons.forEach(button => button.addEventListener("click", fetchData));

})();