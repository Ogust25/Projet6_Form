const btn = document.querySelector(".btnValider")
const inputNom = document.querySelector("#inputNom")
const inputPrenom = document.querySelector("#inputPrenom")
const inputEmail = document.querySelector("#inputEmail")
const inputMsg = document.querySelector("#inputMsg")

const regleNomPrenom = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'-]+$/;
const regleEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const regleMessage = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ',;()-]+$/;

btn.addEventListener('click', function(e){
    e.preventDefault()
    fetch('traitement.php',{method: 'POST'})
    .then((response) =>
        response.json())
        .then((data) => {
        console.log(data);
        document.querySelector('.txtValider').innerHTML = data.validation;
    })

    let resultatNom = regleNomPrenom.test(inputNom.value)
    let resultatPrenom = regleNomPrenom.test(inputPrenom.value)
    let resultatEmail = regleEmail.test(inputEmail.value)

    if((resultatNom == true)&&(resultatPrenom == true)&&(resultatEmail == true)){
        document.querySelector('.txtValider').style.visibility = "visible";
        document.querySelector('.nomError').style.visibility = "hidden";
        document.querySelector('.prenomError').style.visibility = "hidden";
        document.querySelector('.emailError').style.visibility = "hidden";
    }
    if(resultatNom == false){
        document.querySelector('.nomError').style.visibility = "visible";
    }
    if(resultatPrenom == false){
        document.querySelector('.prenomError').style.visibility = "visible";
    }
    if(resultatEmail == false){
        document.querySelector('.emailError').style.visibility = "visible";
    }
})