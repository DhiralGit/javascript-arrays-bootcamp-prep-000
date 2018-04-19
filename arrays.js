var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
chocolateBars.unshift('gums')

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToBeginningOfArray(array, element) {
  array.push(element);
  return array
}