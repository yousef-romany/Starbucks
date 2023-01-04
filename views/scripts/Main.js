var myVar;
function loader() {
  myVar = setTimeout(startLoader, 2000);
}
function startLoader() {
  document.querySelector(".containerLoader").style.display = "none";
}

// opne function
let buttonMenu = document.querySelector(".menuButton");

buttonMenu.addEventListener("click", () => {
  let container = document.querySelector("#menuBar");
  container.classList.toggle("active");
});
// footer 
let click = document.querySelectorAll(".clickAble");

click.addEventListener("click" , (eo) => {
  console.log(eo.target.className);
  // if(eo.target.classList == "smallScreen"){
  //   cosnole.log(eo.target.childNodes[1]);
  //   cosnole.log("yes") 
  // } else {
  //   console.log("sorry")
  // }
});