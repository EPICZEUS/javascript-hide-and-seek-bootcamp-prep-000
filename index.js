function getFirstSelector(s) {
  return document.querySelector(s);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const rlists = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < rlists.length; i++) {
    const list = rlists[i].querySelectorAll("li");
    for (let j = 0; j < list.length; j++) {
      list[j].innerHTML = parseInt(list[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  const deep = document.querySelector("#grand-node");
}
