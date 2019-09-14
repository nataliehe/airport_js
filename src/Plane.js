'use strict';

function Plane() {}

Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
  this._location = airport;
};

Plane.prototype.takeoff = function() {
  debugger;
  console.log(this);
  console.log(this._location);
  this._location.clearForTakeOff();
};
