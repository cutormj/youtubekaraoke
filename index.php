<?php

$json = file_get_contents("php://input"); // get json file
$data = json_decode($json, true); // convert to array object

var_dump($data);


?>