document.getElementById("mybttn").addEventListener("click", function() {
  const day1 = parseInt(document.getElementById("textid").value);
  const month1 = parseInt(document.getElementById("textid2").value);
  const year1 = parseInt(document.getElementById("textid3").value);
  const day2 = parseInt(document.getElementById("textid4").value);
  const month2 = parseInt(document.getElementById("textid5").value);
  const year2 = parseInt(document.getElementById("textid6").value);
  const result = document.getElementById("result");

  let year3 = year2 - year1;
  let month3 = month2 - month1;
  let day3 = day2 - day1;

  if (day3 < 0) {
      month3 -= 1;
      day3 += new Date(year2, month2, 0).getDate();
  }

  if (month3 < 0) {
      year3 -= 1;
      month3 += 12;
  }

  result.textContent = year3 + " years " + month3 + " months " + day3 + " days";
});
