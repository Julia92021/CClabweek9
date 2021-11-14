let x = 0;
function change(){
  x+=10;
  let b = document.getElementById('box');
  b.innerHTML = "wow";
  b.style.width=200px;
  b.style.left = x + "px";
  b.style.backgroundColor = "red";
}

function add(){
  let elt = document.createElement("div");
  elt.style.backgroundColor="purple";
  elt.style.width="50px";
  elt.style.height="40px";
  elt.style.margin="20px";
  let body = document.body;
  body.appendChild(elt);

  let box = document.getElementById('box').appendChild(elt);
}
