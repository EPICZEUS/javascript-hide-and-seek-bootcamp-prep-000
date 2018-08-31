function getFirstSelector(s) {
  console.log("First Selector", document.querySelector(s));
  return document.querySelector(s);
}

function nestedTarget() {
  console.log("Nested Target", document.querySelector("#nested .target"));
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  console.log("Increase Rank By");
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
  let deepest = deep.querySelector("div");
  while (!/^<.+?>.*?<.+?>$/.test(deepest.innerHTML)) deepest = deepest.querySelector("div");
}
