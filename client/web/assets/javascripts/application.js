/**
 * Application entry point.
 */

// Stupid JQM
$.mobile.hashListeningEnabled = false

// Entry point
$(function() {
  console.log('Application Begins! ');
  window.Application = new Tradebook();
});