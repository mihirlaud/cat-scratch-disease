var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("carousel");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

var modal = document.getElementById('prog');
var untreated = document.getElementById("untreated");
var treated = document.getElementById("treated");
var span = document.getElementById("modal-close");

untreated.onclick = function() {
  modal.style.display = "block";
  document.getElementById("modal-title").innerHTML = "Untreated";
  document.getElementById("modal-img").src = "hourglass.jpg";
  document.getElementById("modal-text").innerHTML = "Most cases of cat-scratch disease resolve <i>without any specific treatment</i><br/>and the disease is only treated when the patient has a weakened immune system.</br>Most patients will have symptoms from two to four months,</br> after which the disease will often <i>spontaneously resolve</i>.";
}

treated.onclick = function() {
  modal.style.display = "block";
  document.getElementById("modal-title").innerHTML = "Treated";
  document.getElementById("modal-img").src = "antibiotics.jpg";
  document.getElementById("modal-text").innerHTML = "Because cat-scratch disease often resolves itself, doctors rarely treat the disease.<br/>However, <i>antibiotics</i> such as tetracycline may be prescribed to <br/>speed up recovery, although this has not been done recently<br/>due to increased fears of <i>antibiotic resistance</i>.";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 