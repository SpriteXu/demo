<?php
header('content-type:text/html;charset=utf-8');
$jsonString=file_get_contents("lolHero.json");
echo $jsonString;
 ?>
