'use strict';

describe('Feature test:', function() {

  var plane;
  var airport;
  
  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it("instructs planes to land on the airport", function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to take off', function(){
    plane.land(airport)
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });
});