var v_d="1"
function change_distro(distro)
{
id("distro_style").innerHTML="div#distro {background-image:url(images/distro/" + distro + ")"
localStorage.distro=distro
}
function show_dtoolbar()
{
id("distro_toolbar_v").innerHTML="div#distro_toolbar {width:100%;height:10%;left:0%;top:90%}"
v_d="0"
}
function hide_dtoolbar()
{
id("distro_toolbar_v").innerHTML="div#distro_toolbar {width:0%;height:0%;left:-1000%;top:-1000%;}"
v_d="1"
}
function dtoolbar_v()
{
if (v_d=="0")
    {
	hide_dtoolbar()
    }
    else
    {
	show_dtoolbar()
    }
}
