function checkTime(i)
{
if (i<10) 
  i="0" + i
  return i
}
function gTime()
{
var today=new Date()
_y=today.getFullYear()
_m=today.getMonth()+1
_da=today.getDate()
_d=today.getDay()
_h=today.getHours()
_mi=today.getMinutes()
_s=today.getSeconds()
_s=checkTime(_s)
document.getElementById('pdate').innerHTML=_y+"&#24180;"+_m+"&#26376;"+_da+"&#26085;<br />&#26143;&#26399;"+_d+"<br />"+_h+"&#26102;"+_mi+"&#20998"
document.getElementById('psec').innerHTML=_s
var t=setTimeout('gTime()',500)
}
function id(x)
 {
  if (typeof x == "string") return document.getElementById(x)
  return x
  }
/*
function mouseOverb(blockid)
  {
  id(blockid).src = "1.png"
  }
function mouseOutb(blockid)
  {
  id(blockid).src = "3.png"
  }
function mouseDownb(blockid)
  {
  id(blockid).src = "2.png"
  }
function mouseUpb(blockid)
  {
  id(blockid).src = "3.png"
  }
//--
function mouseOverc(blockid)
  {
  id(blockid).innerHTML = "div#"+blockid+" {background-image:url(1.png);}"
  }
function mouseOutc(blockid)
  {
  id(blockid).innerHTML = "div#"+blockid+" {background-image:url(3.png);}"
  }
function mouseDownc(blockid)
  {
  id(blockid).innerHTML = "div#"+blockid+" {background-image:url(2.png);}"
  }
function mouseUpc(blockid)
  {
  id(blockid).innerHTML = "div#"+blockid+" {background-image:url(3.png);}"
  }
*/