/**
 * Author styles
 */

$(document).ready(function() {
    
    /**
     * Tiny bit of js to make sure there are no more than one tab open at the
     * time, and that it scales down to non supportive browsers.
     */

    var $details = $('details'),
        $summary = $('summary');
    $summary.on('click', function() {
        var $this = $(this),
            $thisDetails = $this.parent();
        // Browser with the details support
        if (Modernizr.details) {
            if ($thisDetails.is("[open]")) {
                $(this).parent().attr('open', 'open');
                console.log('open');
            } else {
                $details.removeAttr('open');
                console.log('not open');
            }
        // Other browsers
        } else {
            if ($thisDetails.is("[open]")) {
                $details.removeAttr('open', 'open');
            } else {
                $details.removeAttr('open', 'open');
                $(this).parent().attr('open', 'open');
            }
        }
    });

});