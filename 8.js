function tweet() {
  let newElement = `<div
    class="
      bg-success
      text-light
      rounded
      d-flex
      justify-content-center
      align-items-center
      fs-1
      mb-1
    "
    style="height: 100px"
  >
    Hello World
  </div>`;

  let prevVal = document.getElementById("parent").innerHTML;
  document.getElementById("parent").innerHTML = prevVal + newElement;
}
