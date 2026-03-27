function checkResult() {
  const regno = document.getElementById("regno").value;
  const course = document.getElementById("course").value;
  const error = document.getElementById("error");

  const correctReg = "20259157516";
  const correctCourse = "Science";

  if (regno === correctReg && course === correctCourse) {
    localStorage.setItem("access", "granted");
    window.location.href = "result.html";
  } else {
    error.innerText = "Invalid Register Number or Course";
  }
}