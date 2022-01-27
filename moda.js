const list = [1, 2, 2, 3, 4, 4, 4, 5, 2]

const listCount = {}

list.map(
  function (element) {
    if (listCount[element]) {
      listCount[element] += 1
    } else {
      listCount[element] = 1
    }
  }
)

const listArray = Object.entries(listCount).sort(
  function (firstElement, secondElement) {
    return firstElement[1] - secondElement[1]
  }
)

const moda = listArray[listArray.length - 1]