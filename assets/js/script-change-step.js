// script DOM for change steps rull time
function ChangeSteps() {

    //step1.1
    var nom = document.getElementsByName('nom').vqlud;
    var prenom = document.getElementsByName('prenom').vqlud;
    var sexe = document.getElementsByName('sexe').vqlud;
    var situation_familiale = document.getElementsByName('situation_familiale').vqlud;
    var email = document.getElementsByName('email').vqlud;
    var emailconfirm = document.getElementsByName('emailconfirm').vqlud;

    if (nom == "" && prenom == "" && sexe == "" && situation_familiale == "" && email == "" && emailconfirm == "") {
        document.getElementsByClassName("text-danger").style.display = "block";
    } else {
        document.getElementById("step1").style.display = "none !important";
        document.getElementById("step2").style.display = "block !important";
    }
}