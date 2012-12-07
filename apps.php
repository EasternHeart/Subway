<div id="distro" class="block a b1" onclick="dtoolbar_v()">

</div>
<div id="chromium" class="block a b2 action" onclick="onbclick('chromium &')">

</div>
<div id="terminal" class="block a b3 action" onclick="onbclick('lxterminal &||terminal &||kconsole &||gnome-terminal &')">

</div>
<div id="b3" class="block a b4 action">

</div>


<div class="block_color b_b action" id="pdate"></div>

<div class="block_color b_b" id="psec"></div>

<div class="block_color b_b" id="uname"><?php system('uname -snrmo'); ?></div>


<div class="btm_toolbar" id="distro_toolbar">
<?php include("apps/distro_toolbar.php");
?></iframe></div>
