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
_m=today.getMonth()
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
function mouseOver_i1()
  {
  document.i1.src = "1.png"
  }
function mouseOut_i1()
  {
  document.i1.src = "3.png"
  }
function mouseDown_i1()
  {
  document.i1.src = "2.png"
  }
function mouseUp_i1()
  {
  document.i1.src = "3.png"
  }
//---
function mouseOver_i2()
  {
  document.i2.src = "1.png"
  }
function mouseOut_i2()
  {
  document.i2.src = "3.png"
  }
function mouseDown_i2()
  {
  document.i2.src = "2.png"
  }
function mouseUp_i2()
  {
  document.i2.src = "3.png"
  }

//---
function mouseOver_i3()
  {
  document.i3.src = "1.png"
  }
function mouseOut_i3()
  {
  document.i3.src = "3.png"
  }
function mouseDown_i3()
  {
  document.i3.src = "2.png"
  }
function mouseUp_i3()
  {
  document.i3.src = "3.png"
  }
//---
function mouseOver_i4()
  {
  document.i4.src = "1.png"
  }
function mouseOut_i4()
  {
  document.i4.src = "3.png"
  }
function mouseDown_i4()
  {
  document.i4.src = "2.png"
  }
function mouseUp_i4()
  {
  document.i4.src = "3.png"
  }
