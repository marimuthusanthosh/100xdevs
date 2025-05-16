"use strict";
var directions;
(function (directions) {
    directions[directions["Up"] = 0] = "Up";
    directions[directions["Down"] = 1] = "Down";
    directions[directions["Right"] = 2] = "Right";
    directions[directions["Left"] = 3] = "Left";
})(directions || (directions = {}));
function chk(keyPressed) {
}
chk(directions.Down);
console.log(directions.Down);
console.log(directions[directions.Down]);
