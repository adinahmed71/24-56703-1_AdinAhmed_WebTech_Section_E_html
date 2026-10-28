
let studentName = localStorage.getItem("studentName");

let events = JSON.parse(
    localStorage.getItem("events"))||[];

let totalFee = events.length * 150;
let result = "<h2>Information</h2>";

result +=
    "Student  Name: " + studentName + "<br><br>";

result +=
    "<b>Events</b><br>";
for (let i = 0; i < events.length; i++) 
{

    result += events[i] + "<br>";

}
result+="<br><b>Total Fee:</b>"+totalFee+"Taka";

document.getElementById("output1").innerHTML = result;



function goBack() {

    window.location.href = "index.html";

}