function openNav()
{
	document.getElementById("mobile__menu").style.width = "60%";
	document.getElementById("main").style.overflowY = "hidden";
	document.getElementById("mobile__menu").style.borderRight = "5px solid #c11";
}

function closeNav()
{
	document.getElementById("mobile__menu").style.width = "0";
	document.getElementById("main").style.overflowY = "visible";
	document.getElementById("mobile__menu").style.borderRight = "none";
}