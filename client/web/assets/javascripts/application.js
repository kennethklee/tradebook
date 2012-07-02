/**
 * Application entry point.
 */

// Entry point
$(document).bind('pageinit', function() {
  setTimeout(function() {
    $.mobile.showPageLoadingMsg("a", "Please wait...", true);
  }, 100);
  setTimeout(function() {
    $.mobile.hidePageLoadingMsg();
  }, 1100);
});
