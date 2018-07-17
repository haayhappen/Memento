// $(document).ready(function () {

//     //workaournd for mobile iondicators
//     $(document).on('click', '*', function (event) {
//         $target = $(event.target);
//         if ($(event.target).attr('class')) {
//             //remove all bigger classes
//             $(".indicator-container").removeClass("bigger");
//             //check if logo or desc. is clicked and add class:bigger to its corresponding indicator container
//             if ($(event.target).attr('class').includes('indicator-logo') || $(event.target).attr('class').includes('indicator-description')) {
//                 console.log("clicked logo or description");
//                 var parents = $target.parent("li.indicator-container").addClass('bigger');
//                 console.log(parents);
//             } else if ($(event.target).attr('class').includes('indicator-container')) {
//                 //if container is clicked, add class directly
//                 $target.addClass('bigger');
//             }
//         }
//     });
// });

function closeHamburgerMenu() {
    document.getElementsByTagName('input')[0].click();
    $(".indicator-container").removeClass("bigger");
}

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}

//Touch swipe
$(".carousel").on("touchstart", function (event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function (event) {
        var xMove = event.originalEvent.touches[0].pageX;
        if (Math.floor(xClick - xMove) > 5) {
           $(this).carousel('next');
        } else if (Math.floor(xClick - xMove) < -5) {
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function () {
        $(this).off("touchmove");
    });
});
