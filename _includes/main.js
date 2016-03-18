// var el = document.getElementsByClassName('mobile-nav-header');


// for (var i=0;i<el.length; i++) {
//     el[i].onclick = function(){
//     	 alert("hello");
//     	}
// }



var jt = jt || {};

// same functions as above
jt.nav = (function() {
    function mobileMenu() {

        
        // querySelector returns the first element it finds with the correct selector
        // addEventListener is roughly analogous to $.on()
        document.querySelector('.mobile-nav-header').addEventListener('click', function(e) {
            e.preventDefault();

            // querySelectorAll returns all the nodes it finds with the selector
            // however, you can't iterate over querySelectorAll results (!!)
            // so this is a workaround - call Array.map and pass in the 
            // list of nodes along with a function
            // technically querySelectorAll returns a NodeList not an Array so
            /// doesn't have standard array functions
            [].map.call(document.querySelectorAll('.mobile-nav ul'), function(el) {
                
                // classList is the key here - contains functions to manipulate
                // classes on an element
                
                el.classList.toggle('nav--active');
            });
        });
    }

    return {
        mobileMenu: mobileMenu
    };
})();


jt.helpers = (function() {
    function jsCheck() {

        // again, use classList to manipulate classes on elements
        var bodyClass = document.querySelector('html').classList;
        bodyClass.remove('no-js');
        bodyClass.add('js');
    }

    return {
        jsCheck: jsCheck
    };
})();


// start everything
// this isn't in a doc.ready - loaded at the bottom of the page so the DOM is already ready
jt.helpers.jsCheck();
jt.nav.mobileMenu();