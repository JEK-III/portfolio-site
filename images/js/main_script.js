var navIsOpen = false;

function makeNavListVisible() {
	var ul = document.getElementById("nav_list");
	if (navIsOpen) {
		navIsOpen = false;
		ul.style.visibility = "hidden";
		console.log("close");
	} else{
		navIsOpen = true;
		ul.style.visibility = "visible";
		console.log("open");
	};
}