// document :: DOM :: Document Object Modal
function tweet() {
  let prevString = document.getElementById("div1").innerHTML;
  let newChild =
    "<p>16 kids poisoned & admitted in after being wrongly prescribed a cough syrup by unqualified folks in mohalla clinics run by Delhi Govt!</p>";
  document.getElementById("div1").innerHTML = prevString + newChild;
}
