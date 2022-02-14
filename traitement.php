<?php
$regleNomPrenom = "/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'-]+$/";
$regleEmail = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";
$regleMessage = "/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ',;()-]+$/";

if (isset($_POST['nom'])){
    $nom = $_POST['nom'];
    $res = array('validation' => "Email envoyé");
    echo json_encode($res);
}
/* if((((isset($_POST['nom']))||(!empty($_POST['nom'])){
    $nom = $_POST['nom'];
    echo json_encode($nom);
} */
/* if((((isset($_POST['prenom']))||(!empty($_POST['prenom']))))&&(preg_match($regleNomPrenom, $_POST['prenom']))){
    $prenom = $_POST['prenom'];
}
if((((isset($_POST['email']))||(!empty($_POST['email']))))&&(preg_match($regleEmail, $_POST['email']))){
    $email = $_POST['email'];
}
if(((isset($_POST['message']))||(!empty($_POST['message'])))&&(preg_match($regleMessage, $_POST['message']))){
    $message = $_POST['message'];
} */
/* 
if($nom){
    $res = array('validation' => "Email envoyé");
    echo json_encode($res);
    mail("sxxasif@leadwizzer.com", "Bonjour, $prenom", $message, "From: $email");
} */


?>