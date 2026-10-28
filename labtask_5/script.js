let events=[];
function addEvent()
{
    let eventName=
	    document.getElementById("event").value;
	if(eventName=="")
	{
		alert("please enter an event name");
		return;
	}
	if(events.length>=3)
	{
		alert("You can join a maximum of 3 events.");
		return;
		
	}
	events.push(eventName);
	document.getElementById("event").value = "";
	document.getElementById("output").innerHTML=
	"<b>Added Events:</b>"
	+events.length;
}
function showConfirm()
{
	let studentName=
	    document.getElementById("studentName").value; 
	let eventName = document.getElementById("event").value.trim();
	if (eventName !== "" && events.length < 3) {
        events.push(eventName);
    }
	if (studentName == "") {
        alert("Please enter your name.");
        return;
    }

    if (events.length == 0) {
        alert("Please add at least one event.");
        return;
    }
	localStorage.setItem("studentName", studentName);

    localStorage.setItem(
        "events",
        JSON.stringify(events)
    );
	window.location.href = "confirm.html";
}