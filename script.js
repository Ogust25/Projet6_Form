const btn = document.querySelector(".btnValider")
const inputNom = document.querySelector("#inputNom")
const inputPrenom = document.querySelector("#inputPrenom")
const inputEmail = document.querySelector("#inputEmail")
const inputMsg = document.querySelector("#inputMsg")

const regleNomPrenom = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'-]+$/;
const regleEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const regleMessage = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ',;()-]+$/;

/* btn.addEventListener('click', function(){
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
}) */


/* AJAX */

btn.addEventListener('submit', function() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
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
            } else {
                alert('Il y a eu un problème avec la requête.');
            }
        }
    }
    httpRequest.open('POST', 'traitement.php?submit=true');
    httpRequest.send();
})

