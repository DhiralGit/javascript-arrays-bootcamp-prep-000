var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
chocolateBars.unshift('gums')

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}