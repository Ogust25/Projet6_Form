<?php

$regleNomPrenom = "/^[a-zA-Z-]+$/";
$regleEmail = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/";

if((((isset($_POST['nom']))||(empty($_POST['nom']))))&&(preg_match($regleNomPrenom, $_POST['nom']))){
    $nom = $_POST['nom'];
}
if((((isset($_POST['prenom']))||(empty($_POST['prenom']))))&&(preg_match($regleNomPrenom, $_POST['prenom']))){
    $prenom = $_POST['prenom'];
}
if((((isset($_POST['email']))||(empty($_POST['email']))))&&(preg_match($regleEmail, $_POST['email']))){
    $email = $_POST['email'];
}
if((isset($_POST['message']))||(empty($_POST['message']))){
    $message = $_POST['message'];
}

echo $nom, " ",$prenom, " ",$email, " ",$message;

/* mail($email, "Oui", $message, 'From: webmaster@example.com'); */

?>


