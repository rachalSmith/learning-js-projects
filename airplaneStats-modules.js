let availableAirplanes = [
{
  name: 'AeroJet',
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  fuelCapacity: 800
 },
 {name: 'SkyJet',
 availableStaff: ['pilots', 'flightAttendants'],
  fuelCapacity: 500
 }
];

let flightRequirements = {
  requiredStaff: 4
};

function meetsStaffRequirements(avStaff, reqStaff){
if (avStaff.length >= reqStaff) {
  return true;
} else {
  return false;
  }
}

//console.log(meetsStaffRequirements(4, 4))

//export {availableAirplanes, flightRequirements, meetsStaffRequirements};

//import {availableAirplanes, flightRequirements, meetsStaffRequirements}  from './airplane';

function displayFuelCapacity() {
availableAirplanes.forEach(
    function(element1){
  console.log('Fuel Capacity of ' + element1.name + ': ' + element1.fuelCapacity);
  });
}

displayFuelCapacity()

function displayStaffStatus(){
  availableAirplanes.forEach(function(element1){
    console.log(element1.name + ' meets staff requirements: ' + meetsStaffRequirements(element1.availableStaff, flightRequirements.requiredStaff) );
  })
}

displayStaffStatus();
