"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];


switch (color) {
    // TODO: create a case statement that will handle every color except indigo and violet
    case "red":
        console.log(color + "red like a car");
        break;
    case "orange":
        console.log(color + "orange like the grand canyon");
        break;
    case "yellow":
        console.log(color + "yellow like a canary");
        break;
    case "green":
        console.log(color + "green like the grass");
        break;
    case "blue":
        console.log(color + "blue like the sky");
        break;



}

    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
