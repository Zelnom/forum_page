// $(document).ready(function() {
//     $(".navTrigger").click(function() {
//         // $(this).toggleClass("active");
//
//         var target = $(this).data('bs-target');
//         $(target).toggleClass('show');
//
//         $(this).toggleClass('active');
//     });
// });
// console.log("HEY")

//
// $(document).ready(function() {
//     var trigger = $('#navHamburger');
//     var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasNavbar'), {
//         backdrop: false, // This prevents closing on outside click
//     });
//
//     // Click event for navTrigger
//     trigger.click(function() {
//         if ($(this).hasClass('active')) {
//             offcanvas.hide();
//         } else {
//             offcanvas.show();
//         }
//     });
//
//     // Change appearance when offcanvas is shown
//     offcanvas._element.addEventListener('shown.bs.offcanvas', function() {
//         trigger.addClass('active');
//     });
//
//     // Revert appearance when offcanvas is hidden
//     offcanvas._element.addEventListener('hidden.bs.offcanvas', function() {
//         trigger.removeClass('active');
//     });
// });

$(document).ready(function() {
    var trigger = $('#navHamburger');
    var pageContent = $('.mainContent'); // Changed the selector to target body
    var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasNavbar'), {
        backdrop: false,  // This prevents closing on outside click
    });

    // Apply "pushed-content" class when offcanvas shown
    offcanvas._element.addEventListener('shown.bs.offcanvas', function () {
        pageContent.addClass('pushed-content');  // Add 'pushed-content' class to push the content
        trigger.addClass('active');
    });

    // Remove "pushed-content" class when offcanvas hidden
    offcanvas._element.addEventListener('hidden.bs.offcanvas', function () {
        pageContent.removeClass('pushed-content');  // Remove 'pushed-content' class to put content back
        trigger.removeClass('active');
    });

    trigger.click(function() {
        if ($(this).hasClass('active')) {
            offcanvas.hide();
        } else {
            offcanvas.show();
        }
    });
});




