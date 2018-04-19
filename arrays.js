var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
chocolateBars.unshift('gums')

function addElementToBeginningOfArray = chocolateBars(array, element) {
  return [element, ...array]
}