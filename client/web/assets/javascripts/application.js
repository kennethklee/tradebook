/**
 * Application entry point.
 */

// Stupid JQM
$.mobile.hashListeningEnabled = false

// Entry point
$(function() {
  window.app = new Tradebook({debug: true});
});