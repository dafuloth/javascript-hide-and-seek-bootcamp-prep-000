function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget() {
  return document.querySelector('#nested .target')
}


function deepestChild() {
  const allChildren = document.getElementById('grand-node').querySelectorAll('*')

  // Simplest Solution:
  return allChildren[allChildren.length-1]
}


function increaseRankBy(n) {
  let rankedLi = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < rankedLi.length; i++) {
    //rankedLi[i].innerText = parseInt(rankedLi.innerHTML) + parseInt(n)
    let rank = parseInt(rankedLi[i].textContent)
    rank = rank + parseInt(n)

    rankedLi[i].textContent = rank
  }
}
