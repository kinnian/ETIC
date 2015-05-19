

function show(id)
{
    document.getElementById(id).style.visibility="visible";
    return true;
}

function hide(id)
{
    document.getElementById(id).style.visibility="hidden";
    return true;
}

function zoomIn(id)
{
	document.getElementById(id).style.zoom = "1.5";
	document.getElementById(id).style.MozTransform = 'scale(1.5)';
	document.getElementById(id).style.WebkitTransform = 'scale(1.5)';
	document.getElementById(id).style.margin = "10%";
	return true;
}

function zoomOut(id)
{
	document.getElementById(id).style.zoom = "1";
	document.getElementById(id).style.MozTransform = 'scale(1)';
	document.getElementById(id).style.WebkitTransform = 'scale(1)';
	document.getElementById(id).style.margin = "3%";
	return true;
}