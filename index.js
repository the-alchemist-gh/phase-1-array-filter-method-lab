// Code your solution here
function findMatching(myArray, stringName){

  return myArray.filter( item => item.toLowerCase() === stringName.toLowerCase()
  );
}

function fuzzyMatch(myArray, stringName){

  return myArray.filter( item => item.indexOf(stringName) === 0 )

}

function matchName(driverObj, stringName){
  return driverObj.filter(item => item.name === stringName)
}