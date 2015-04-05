/**
 * A bit of JavaScript to make sure there are no more than one tab open at
 * any given time. And that the tabs scales down to non supportive browsers.
 * I tried to keep JS to minimum here.
 */

var details = document.getElementsByTagName('details'),
    summary = document.getElementsByTagName('summary'),
    removeAttr = function(pEl, pAttr) {
        for (var i = 0; i < pEl.length; i++) {
            pEl[i].removeAttribute(pAttr);
        }
    };

for (var i = 0; i < summary.length; i++) {
    summary[i].onclick = function() {
        if (Modernizr.details) {
            removeAttr(details, 'open')
        } else {
            removeAttr(details, 'open');
            this.parentNode.setAttribute('open', 'open');
        }
    }
}

/**
 * And with jQUery, if that's what rocks your boat.
 */
// $(document).ready(function() {
//     var $details = $('details'),
//         $summary = $('summary');

//     $summary.on('click', function() {
//         if (Modernizr.details) {
//             $details.removeAttr('open');
//         } else {
//             $details.removeAttr('open');
//             $(this).parent().attr('open', 'open');
//         }
//     });
// });
