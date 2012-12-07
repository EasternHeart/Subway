<html>
<head>
<title>Subway</title>
<script type="text/javascript" >
<?php
include("js/MT.js");
include("js/distro.js");
include("js/last.js");
?>
</script>
<link rel="stylesheet" href="style.css" type="text/css" />
<link rel="stylesheet" href="userstyle.css" type="text/css" />
<style type="text/css" id="distro_style"></style>
<style type="text/css" id="distro_toolbar_v"></style>
</head>
<body onload="gTime();
<?php
if ($_GET["distro_pic"] != "") echo "change_distro('" . $_GET["distro_pic"] . "')
"
?>
;lsinit()
">
<?php
include("apps.php");
?>
</body>
</html>
