document.addEventListener("mousemove", colorChange);
const body = document.querySelector("body");

function colorChange(e) {
  //   console.log(e.clientY);
  //   console.log("******", window.innerHeight);
  const y = (e.clientY / window.innerHeight) * 100;
  const x = (e.clientX / window.innerWidth) * 100;
  console.log(x);
  body.style.setProperty("--y-position", y);
  body.style.setProperty("--x-position", x);
}
