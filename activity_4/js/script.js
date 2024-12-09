//welcome message
var user = "jamila";
var salutation = "Hello, ";
var greeting = salutation + user + "! Here are the latest headphones ands their reviews";
var greetingEl = document.getElementById("greeting");

greetingEl.textContent = greeting;