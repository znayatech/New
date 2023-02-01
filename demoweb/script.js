// document.getElementById("foot01").innerHTML =
// "<p>&copy;  " + new Date().getFullYear() + " Shamsuddeen yusuf.</p>";
// document.getElementById("nav01").innerHTML =
// "<ul id='menu'>" +
// "<li><a href='index.html'>Home</a></li>" +
// "<li><a href='customers.html'>Data</a></li>" +
// "<li><a href='about.html'>About</a></li>" +
// "<li><a href='#'>Services</a></li>" +
// "</ul>";

// Color variables:
red = [0, 100, 63];
orange = [40, 100, 60];
green = [75, 100, 40];
blue = [196, 77, 55];
purple = [280, 50, 60];

// Letters in the message will cycle through these colors:
letterColors = [red, orange, green, blue, purple];

message = 'Multiple colors!';

drawName(message, letterColors);
bounceBubbles();
