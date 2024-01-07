window.addEventListener("load", app);

function app() {
  console.log("triggered");
  const trackingArea = document.getElementById("tracking-area");
  trackingArea.addEventListener("mousemove", onMouseMove);
  const btnGroup = document.getElementById("button-group");
  //Event Bubbling
  btnGroup.addEventListener("click", () => alert("click event fired"));

  //Event dispatch programatically
  const focusEvent = new Event("focus");
  const testInput = document.getElementById("test-text");
  testInput.addEventListener("focus", (e) => {
    console.log(`${e.target.value}`);
  });
  testInput.dispatchEvent(focusEvent);
}

function onMouseMove(e) {
  setPosition({ x: e.offsetX, y: e.offsetY });
}

function setPosition(position) {
  const { x, y } = position;
  const posElement = document.getElementById("current-position");
  posElement.innerHTML = `x: ${x}; y:${y}`;
}
