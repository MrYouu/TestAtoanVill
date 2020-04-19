function openNav()
{
	document.getElementById("mobile__menu").style.width = "100%";
	document.getElementById("main").style.overflowY = "hidden";
}

function closeNav()
{
	document.getElementById("mobile__menu").style.width = "0";
	document.getElementById("main").style.overflowY = "visible";
}