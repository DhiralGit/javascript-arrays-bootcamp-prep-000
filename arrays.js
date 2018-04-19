var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
chocolateBars.unshift('gums')

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return [element, ...array]
}

