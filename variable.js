var variableid = document.getElementById("font-title");
var roomid = document.getElementById("roomID");
var roomrotid = document.getElementById("roomrotID");
// var roomid = document.getElementsByClassName("room__side--back");

// document.body.addEventListener("scroll", function(e) {
// document.addEventListener("scroll", function(e) {
// document.getElementById("myDIVDIV").addEventListener("scroll", function(e) {
window.addEventListener("scroll", function(e) {
	const maxGravity = 250;
	const minGravity = 50;
	const posTop = 0;
	const posBottom = -1000;
	const maxRot = 90;
	const minRot = 0;
	const maxOpc = 1;
	const minOpc = 0;
	// const maxRoom3d = -4000;
	// const minRoom3d = 0;

	var scrollPosition = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

	const percent = scrollPosition / 0.99;
	const gravityScale = percent * maxGravity - minGravity;
	const positionScale = percent * posBottom + posTop;
	const rotScale = percent * maxRot - minRot;
	const opcScale = percent * maxOpc - minOpc;

	const newGravityValue =
		scrollPosition >  0.99
			? maxGravity
			: gravityScale;


	if (scrollPosition >= 0.99) {
		variableid.style.setProperty("--gravity", maxGravity); //scroll action
		// roomid.style.setProperty("--room3d", posTop + 'px');
		// roomid.style.setProperty("--room3d", maxGravity);
	} else {
		variableid.style.setProperty("--gravity", newGravityValue);
		// roomid.style.setProperty("--room3d", posTop +'px');
		// roomid.style.setProperty("--room3d", newGravityValue);
	}

	if (scrollPosition >= 0.99) {
		roomid.style.setProperty("--room3d", posBottom + 'px');
		roomrotid.style.setProperty("--roomrot3d", maxRot + 'deg');
		roomrotid.style.setProperty("--roomopc3d", maxOpc);
	} else {
		roomid.style.setProperty("--room3d", positionScale +'px');
		roomrotid.style.setProperty("--roomrot3d", rotScale + 'deg');
		roomrotid.style.setProperty("--roomopc3d", minOpc);
	}


	console.log('Scroll X:'+scrollX+' Scroll Y:'+scrollY)

});
