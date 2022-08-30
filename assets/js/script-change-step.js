const textDangerFamilyname = document.getElementById('text-danger-familyname');
const textDangerFirstname = document.getElementById('text-danger-firstname');
const textDangerSexe = document.getElementById('text-danger-Sexe');
const textDangerSituation_f = document.getElementById('text-danger-situation_f');
const textDangerEmail = document.getElementById('text-danger-email');
const textDangerConfirmationEmail = document.getElementById('text-danger-confirmation-email');
const textDangerDate = document.getElementById('text-danger-date');
const textDangerConfirmationDate = document.getElementById('text-danger-confirmation-date');
const textDangerPlaceBirth = document.getElementById('text-danger-placeBirth');
const textDangerCountry = document.getElementById('text-danger-country');


const textDangerAdresse = document.getElementById('text-danger-adresse');
const textDangerPostcode = document.getElementById('text-danger-postcode');
const textDangerCity = document.getElementById('text-danger-city');
const textDangerCountry2 = document.getElementById('text-danger-country2');
const textDangerPhone = document.getElementById('text-danger-phone');
const textDangerlandlinephone = document.getElementById('text-danger-landlinephone');
const textDangerDatedeparture = document.getElementById('text-danger-datedeparture');


const textDangerPassport = document.getElementById('text-danger-passport');
// const textDangerAdresse = document.getElementById('text-danger-adresse');
// const textDangerAdresse = document.getElementById('text-danger-adresse');
// const textDangerAdresse = document.getElementById('text-danger-adresse');



const myForm = document.getElementById('myForm');

// function validation of champ (First champ)
function OnValidatFamilyName() {
    const familyname = document.getElementById('nom').value;

    if (familyname.length == 0) {

        textDangerFamilyname.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Family name is required';
        textDangerFamilyname.classList.add("runERRMSG");
        document.getElementById('nom').classList.add("inputError");

        textDangerFamilyname.classList.remove("runSUCSSMSG");
        document.getElementById('nom').classList.remove("inputValid");
        document.getElementById('nom').classList.remove('verifedinput');

        return false;
    }

    if (!familyname.match(/[^.*+--&é"'èù!:;=¨£µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {

        textDangerFamilyname.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> scpecial character not supported';
        textDangerFamilyname.classList.add("runERRMSG");
        document.getElementById('nom').classList.add("inputError");

        textDangerFamilyname.classList.remove("runSUCSSMSG");
        document.getElementById('nom').classList.remove("inputValid");
        document.getElementById('nom').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('nom').classList.add("inputValid");
    textDangerFamilyname.classList.add("runSUCSSMSG");
    document.getElementById('nom').classList.add('verifedinput');
    textDangerFamilyname.innerHTML = "";

    return true;

}

// function validation of champ (Last champ)
function OnValidatFirstName() {
    const firstname = document.getElementById('prenom').value;


    if (firstname.length == 0) {

        textDangerFirstname.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> First name is required';
        textDangerFirstname.classList.add("runERRMSG");
        document.getElementById('prenom').classList.add("inputError");

        textDangerFirstname.classList.remove("runSUCSSMSG");
        document.getElementById('prenom').classList.remove("inputValid");
        document.getElementById('prenom').classList.remove('verifedinput');

        return false;
    }

    if (!firstname.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {

        textDangerFirstname.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> scpecial character not supported';
        textDangerFirstname.classList.add("runERRMSG");
        document.getElementById('prenom').classList.add("inputError");

        textDangerFirstname.classList.remove("runSUCSSMSG");
        document.getElementById('prenom').classList.remove("inputValid");
        document.getElementById('prenom').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('prenom').classList.add("inputValid");
    textDangerFirstname.classList.add("runSUCSSMSG");
    document.getElementById('prenom').classList.add('verifedinput');
    textDangerFirstname.innerHTML = "";

    return true;

}

// function validation of champ (Gender champ)
function OnValidatGender() {
    const sexe = document.getElementById('sexe').value;


    if (sexe.length == 0) {

        textDangerSexe.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Gender champ is required';
        textDangerSexe.classList.add("runERRMSG");
        document.getElementById('sexe').classList.add("inputError");

        textDangerSexe.classList.remove("runSUCSSMSG");
        document.getElementById('sexe').classList.remove("inputValid");
        document.getElementById('sexe').classList.remove('verifedinput');

        return false;
    }

    if (!sexe.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {

        textDangerSexe.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> scpecial character not supported';
        textDangerSexe.classList.add("runERRMSG");
        document.getElementById('sexe').classList.add("inputError");

        textDangerSexe.classList.remove("runSUCSSMSG");
        document.getElementById('sexe').classList.remove("inputValid");
        document.getElementById('sexe').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('sexe').classList.add("inputValid");
    textDangerSexe.classList.add("runSUCSSMSG");
    document.getElementById('sexe').classList.add('verifedinput');
    textDangerSexe.innerHTML = "";

    return true;

}

// function validation of champ (Family Situation champ)
function OnValidatSituation_f() {
    const situation_familiale = document.getElementById('situation_familiale').value;


    if (situation_familiale.length == 0) {

        textDangerSituation_f.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Marital status required';
        textDangerSituation_f.classList.add("runERRMSG");
        document.getElementById('situation_familiale').classList.add("inputError");

        textDangerSituation_f.classList.remove("runSUCSSMSG");
        document.getElementById('situation_familiale').classList.remove("inputValid");
        document.getElementById('situation_familiale').classList.remove('verifedinput');

        return false;
    }

    if (!situation_familiale.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {

        textDangerSituation_f.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> scpecial character not supported';
        textDangerSituation_f.classList.add("runERRMSG");
        document.getElementById('situation_familiale').classList.add("inputError");

        textDangerSituation_f.classList.remove("runSUCSSMSG");
        document.getElementById('situation_familiale').classList.remove("inputValid");
        document.getElementById('situation_familiale').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('situation_familiale').classList.add("inputValid");
    textDangerSituation_f.classList.add("runSUCSSMSG");
    document.getElementById('situation_familiale').classList.add('verifedinput');
    textDangerSituation_f.innerHTML = "";

    return true;

}

// function validation of champ (Email champ)
function OnValidatEmail() {
    const email = document.getElementById('email').value;


    if (email.length == 0) {

        textDangerEmail.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Email is required';
        textDangerEmail.classList.add("runERRMSG");
        document.getElementById('email').classList.add("inputError");

        textDangerEmail.classList.remove("runSUCSSMSG");
        document.getElementById('email').classList.remove("inputValid");
        document.getElementById('email').classList.remove('verifedinput');

        return false;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {

        textDangerEmail.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Then write your email in this form: youremail@exemple.com';
        textDangerEmail.classList.add("runERRMSG");
        document.getElementById('email').classList.add("inputError");

        textDangerEmail.classList.remove("runSUCSSMSG");
        document.getElementById('email').classList.remove("inputValid");
        document.getElementById('email').classList.remove('verifedinput');

        return false;
    }

    // if (email !== emailconfirm) {

    //     textDangerEmail.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Please this email is not second email';
    //     textDangerEmail.classList.add("runERRMSG");
    //     document.getElementById('email').classList.add("inputError");

    //     textDangerEmail.classList.remove("runSUCSSMSG");
    //     document.getElementById('email').classList.remove("inputValid");
    //     document.getElementById('email').classList.remove('verifedinput');

    //     return false;
    // }

    document.getElementById('email').classList.add("inputValid");
    textDangerEmail.classList.add("runSUCSSMSG");
    document.getElementById('email').classList.add('verifedinput');
    textDangerEmail.innerHTML = "";

    return true;

}

// function validation of champ (Confirmation Email champ)
function OnValidatConfirmationEmail() {
    const email = document.getElementById('email').value;
    const emailconfirm = document.getElementById('emailconfirm').value;

    if (emailconfirm.length == 0) {

        textDangerConfirmationEmail.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Confirmation of email is required';
        textDangerConfirmationEmail.classList.add("runERRMSG");
        document.getElementById('emailconfirm').classList.add("inputError");

        textDangerConfirmationEmail.classList.remove("runSUCSSMSG");
        document.getElementById('emailconfirm').classList.remove("inputValid");
        document.getElementById('emailconfirm').classList.remove('verifedinput');

        return false;
    }

    if (!emailconfirm.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {

        textDangerConfirmationEmail.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Then write your email in this form: youremail@test.com';
        textDangerConfirmationEmail.classList.add("runERRMSG");
        document.getElementById('emailconfirm').classList.add("inputError");

        textDangerConfirmationEmail.classList.remove("runSUCSSMSG");
        document.getElementById('emailconfirm').classList.remove("inputValid");
        document.getElementById('emailconfirm').classList.remove('verifedinput');

        return false;
    }

    if (emailconfirm !== email) {

        textDangerConfirmationEmail.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Please this email is not first email';
        textDangerConfirmationEmail.classList.add("runERRMSG");
        document.getElementById('emailconfirm').classList.add("inputError");

        textDangerConfirmationEmail.classList.remove("runSUCSSMSG");
        document.getElementById('emailconfirm').classList.remove("inputValid");
        document.getElementById('emailconfirm').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('emailconfirm').classList.add("inputValid");
    textDangerConfirmationEmail.classList.add("runSUCSSMSG");
    document.getElementById('emailconfirm').classList.add('verifedinput');
    textDangerConfirmationEmail.innerHTML = "";

    return true;

}

// function validation of champ (Date champ)
function OnValidatDate() {
    const date_naiss = document.getElementById('date_naiss').value;

    if (date_naiss.length == 0) {

        textDangerDate.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Date champ is required';
        textDangerDate.classList.add("runERRMSG");
        document.getElementById('date_naiss').classList.add("inputError");

        textDangerDate.classList.remove("runSUCSSMSG");
        document.getElementById('date_naiss').classList.remove("inputValid");
        document.getElementById('date_naiss').classList.remove('verifedinputDate');

        return false;
    }

    if (!date_naiss.match(/^\s*((?:19|20)\d{2})\-(1[012]|0?[1-9])\-(3[01]|[12][0-9]|0?[1-9])\s*$/)) {

        textDangerDate.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Then write your date of birth in this form: 31/12/1999';
        textDangerDate.classList.add("runERRMSG");
        document.getElementById('date_naiss').classList.add("inputError");

        textDangerDate.classList.remove("runSUCSSMSG");
        document.getElementById('date_naiss').classList.remove("inputValid");
        document.getElementById('date_naiss').classList.remove('verifedinputDate');

        return false;
    }

    document.getElementById('date_naiss').classList.add("inputValid");
    textDangerDate.classList.add("runSUCSSMSG");
    document.getElementById('date_naiss').classList.add('verifedinputDate');
    textDangerDate.innerHTML = "";

    return true;

}

// function validation of champ (Confirmation Date champ)
function OnValidatConfirmationDate() {
    const date_naiss = document.getElementById('date_naiss').value;
    const date_naiss_confirm = document.getElementById('confirm_date_naissance').value;


    if (date_naiss_confirm.length == 0) {

        textDangerConfirmationDate.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Confirmation of date birth is required';
        textDangerConfirmationDate.classList.add("runERRMSG");
        document.getElementById('confirm_date_naissance').classList.add("inputError");

        textDangerConfirmationDate.classList.remove("runSUCSSMSG");
        document.getElementById('confirm_date_naissance').classList.remove("inputValid");
        document.getElementById('confirm_date_naissance').classList.remove('verifedinputDate');

        return false;
    }

    if (!date_naiss_confirm.match(/^\s*((?:19|20)\d{2})\-(1[012]|0?[1-9])\-(3[01]|[12][0-9]|0?[1-9])\s*$/)) {

        textDangerConfirmationDate.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Then write your date of birth in this form: 31/12/1999';
        textDangerConfirmationDate.classList.add("runERRMSG");
        document.getElementById('confirm_date_naissance').classList.add("inputError");

        textDangerConfirmationDate.classList.remove("runSUCSSMSG");
        document.getElementById('confirm_date_naissance').classList.remove("inputValid");
        document.getElementById('confirm_date_naissance').classList.remove('verifedinputDate');

        return false;
    }

    if (date_naiss_confirm !== date_naiss) {
        textDangerConfirmationDate.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Then Date is not like first date';
        textDangerConfirmationDate.classList.add("runERRMSG");
        document.getElementById('confirm_date_naissance').classList.add("inputError");

        textDangerConfirmationDate.classList.remove("runSUCSSMSG");
        document.getElementById('confirm_date_naissance').classList.remove("inputValid");
        document.getElementById('confirm_date_naissance').classList.remove('verifedinputDate');

        return false;
    }

    document.getElementById('confirm_date_naissance').classList.add("inputValid");
    textDangerConfirmationDate.classList.add("runSUCSSMSG");
    document.getElementById('confirm_date_naissance').classList.add('verifedinputDate');
    textDangerConfirmationDate.innerHTML = "";

    return true;

}

// function validation of champ (Place of Birth champ)
function OnValidatPlaceBirth() {
    const villNaiss = document.getElementById('vill_naiss').value;

    if (villNaiss.length == 0) {

        textDangerPlaceBirth.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Place of Birth is required';
        textDangerPlaceBirth.classList.add("runERRMSG");
        document.getElementById('vill_naiss').classList.add("inputError");

        textDangerPlaceBirth.classList.remove("runSUCSSMSG");
        document.getElementById('vill_naiss').classList.remove("inputValid");
        document.getElementById('vill_naiss').classList.remove('verifedinput');

        return false;
    }

    if (!villNaiss.match(/[^.*+--&é"'èù!:;=¨£µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {

        textDangerPlaceBirth.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> scpecial character not supported';
        textDangerPlaceBirth.classList.add("runERRMSG");
        document.getElementById('vill_naiss').classList.add("inputError");

        textDangerPlaceBirth.classList.remove("runSUCSSMSG");
        document.getElementById('vill_naiss').classList.remove("inputValid");
        document.getElementById('vill_naiss').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('vill_naiss').classList.add("inputValid");
    textDangerPlaceBirth.classList.add("runSUCSSMSG");
    document.getElementById('vill_naiss').classList.add('verifedinput');
    textDangerPlaceBirth.innerHTML = "";

    return true;

}

// function validation of champ (Country champ)
function OnValidatCountry() {
    const country = document.getElementById('pays_naiss').value;


    if (country.length == 0) {

        textDangerCountry.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Country of birth is required';
        textDangerCountry.classList.add("runERRMSG");
        document.getElementById('pays_naiss').classList.add("inputError");

        textDangerCountry.classList.remove("runSUCSSMSG");
        document.getElementById('pays_naiss').classList.remove("inputValid");
        document.getElementById('pays_naiss').classList.remove('verifedinput');

        return false;
    }

    if (!country.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {

        textDangerCountry.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> scpecial character not supported';
        textDangerCountry.classList.add("runERRMSG");
        document.getElementById('pays_naiss').classList.add("inputError");

        textDangerCountry.classList.remove("runSUCSSMSG");
        document.getElementById('pays_naiss').classList.remove("inputValid");
        document.getElementById('pays_naiss').classList.remove('verifedinput');


        return false;
    }

    const familynamechecked = textDangerFamilyname.className;
    const firstnamechecked = textDangerFirstname.className;
    const sexechecked = textDangerSexe.className;
    const situation_fchecked = textDangerSituation_f.className;
    const emailchecked = textDangerEmail.className;
    const confirmationemailchecked = textDangerConfirmationEmail.className;
    const datechecked = textDangerDate.className;
    const confirmationdatenamechecked = textDangerConfirmationDate.className;
    const placebirthchecked = textDangerPlaceBirth.className;
    const countrychecked = textDangerCountry.className;

    var btnNext = document.getElementById('nextStep');

    if ((familynamechecked && firstnamechecked && sexechecked && situation_fchecked && emailchecked && confirmationemailchecked && datechecked && confirmationdatenamechecked && placebirthchecked && countrychecked) === "text-danger field-validation-valid runSUCSSMSG") {
        document.getElementById("summary").classList.add("activesummary");
    } else {
        document.getElementById("summary").classList.remove("activesummary");

    }

    document.getElementById('pays_naiss').classList.add("inputValid");
    textDangerCountry.classList.add("runSUCSSMSG");
    document.getElementById('pays_naiss').classList.add('verifedinput');
    textDangerCountry.innerHTML = "";

    return true;



}




// function validation of champ (Adresse Line 1 champ)
function OnValidatAdresseLine() {
    const adresseligne1 = document.getElementById('adresseligne1').value;

    if (adresseligne1.length == 0) {
        textDangerAdresse.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Adresse Line 1 of birth is required';
        textDangerAdresse.classList.add("runERRMSG");
        document.getElementById('adresseligne1').classList.add("inputError");

        textDangerAdresse.classList.remove("runSUCSSMSG");
        document.getElementById('adresseligne1').classList.remove("inputValid");
        document.getElementById('adresseligne1').classList.remove('verifedinput');

        return false;
    }

    if (!adresseligne1.match(/[^*+&èù!=££µ%§_ç?^$<>{}//[\]@#~€¤\\]/)) {

        textDangerAdresse.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> scpecial character not supported';
        textDangerAdresse.classList.add("runERRMSG");
        document.getElementById('adresseligne1').classList.add("inputError");

        textDangerAdresse.classList.remove("runSUCSSMSG");
        document.getElementById('adresseligne1').classList.remove("inputValid");
        document.getElementById('adresseligne1').classList.remove('verifedinput');


        return false;
    }

    document.getElementById('adresseligne1').classList.add("inputValid");
    textDangerAdresse.classList.add("runSUCSSMSG");
    document.getElementById('adresseligne1').classList.add('verifedinput');
    textDangerAdresse.innerHTML = "";

    return true;



}

// function validation of champ (Postcode champ)
function OnValidatPostcode() {
    const cp = document.getElementById('cp').value;


    if (cp.length == 0) {

        textDangerPostcode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Postcode is required';
        textDangerPostcode.classList.add("runERRMSG");
        document.getElementById('cp').classList.add("inputError");

        textDangerPostcode.classList.remove("runSUCSSMSG");
        document.getElementById('cp').classList.remove("inputValid");
        document.getElementById('cp').classList.remove('verifedinput');

        return false;
    }

    if (!cp.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

        textDangerPostcode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> scpecial character not supported';
        textDangerPostcode.classList.add("runERRMSG");
        document.getElementById('cp').classList.add("inputError");

        textDangerPostcode.classList.remove("runSUCSSMSG");
        document.getElementById('cp').classList.remove("inputValid");
        document.getElementById('cp').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('cp').classList.add("inputValid");
    textDangerPostcode.classList.add("runSUCSSMSG");
    document.getElementById('cp').classList.add('verifedinput');
    textDangerPostcode.innerHTML = "";

    return true;

}

// function validation of champ (City champ)
function OnValidatCity() {
    const ville = document.getElementById('ville').value;


    if (ville.length == 0) {

        textDangerCity.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Postcode is required';
        textDangerCity.classList.add("runERRMSG");
        document.getElementById('ville').classList.add("inputError");

        textDangerCity.classList.remove("runSUCSSMSG");
        document.getElementById('ville').classList.remove("inputValid");
        document.getElementById('ville').classList.remove('verifedinput');

        return false;
    }

    if (!ville.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

        textDangerCity.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> scpecial character not supported';
        textDangerCity.classList.add("runERRMSG");
        document.getElementById('ville').classList.add("inputError");

        textDangerCity.classList.remove("runSUCSSMSG");
        document.getElementById('ville').classList.remove("inputValid");
        document.getElementById('ville').classList.remove('verifedinput');

        return false;
    }

    const Adresseline1checked = textDangerAdresse.className;
    const postcodechecked = textDangerPostcode.className;
    const citychecked = textDangerCity.className;
    const country2checked = textDangerCountry2.className;
    const phonechecked = textDangerPhone.className;
    const landlinephonechecked = textDangerlandlinephone.className;
    const Datedeparturechecked = textDangerDatedeparture.className;

    if ((Adresseline1checked && postcodechecked && citychecked && country2checked && phonechecked && landlinephonechecked && Datedeparturechecked) === "text-danger field-validation-valid runSUCSSMSG") {
        document.getElementById("summary").classList.add("activesummary");
    } else {
        document.getElementById("summary").classList.remove("activesummary");

    }

    document.getElementById('ville').classList.add("inputValid");
    textDangerCity.classList.add("runSUCSSMSG");
    document.getElementById('ville').classList.add('verifedinput');
    textDangerCity.innerHTML = "";

    return true;

}

// function validation of champ (Country 2 champ)
function OnValidatCountry2() {
    const pays = document.getElementById('pays').value;
    console.log("test1", pays);


    if (pays.length == 0) {
        console.log("test2", pays);
        textDangerCountry2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Gender champ is required';
        textDangerCountry2.classList.add("runERRMSG");
        document.getElementById('pays').classList.add("inputError");

        textDangerCountry2.classList.remove("runSUCSSMSG");
        document.getElementById('pays').classList.remove("inputValid");
        document.getElementById('pays').classList.remove('verifedinput');

        return false;
    }

    if (!pays.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {
        console.log("test3", pays);
        textDangerCountry2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> scpecial character not supported';
        textDangerCountry2.classList.add("runERRMSG");
        document.getElementById('pays').classList.add("inputError");

        textDangerCountry2.classList.remove("runSUCSSMSG");
        document.getElementById('pays').classList.remove("inputValid");
        document.getElementById('pays').classList.remove('verifedinput');

        return false;
    }

    console.log("test4", pays);
    document.getElementById('pays').classList.add("inputValid");
    textDangerCountry2.classList.add("runSUCSSMSG");
    document.getElementById('pays').classList.add('verifedinput');
    textDangerCountry2.innerHTML = "";

    return true;

}

// function validation of champ (Phone champ)
function OnValidatPhone() {
    const tel_portabl = document.getElementById('tel_portabl').value;


    if (tel_portabl.length == 0) {

        textDangerPhone.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Postcode is required';
        textDangerPhone.classList.add("runERRMSG");
        document.getElementById('tel_portabl').classList.add("inputError");

        textDangerPhone.classList.remove("runSUCSSMSG");
        document.getElementById('tel_portabl').classList.remove("inputValid");
        document.getElementById('tel_portabl').classList.remove('verifedinput');

        return false;
    }

    if (!tel_portabl.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

        textDangerPhone.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> scpecial character not supported';
        textDangerPhone.classList.add("runERRMSG");
        document.getElementById('tel_portabl').classList.add("inputError");

        textDangerPhone.classList.remove("runSUCSSMSG");
        document.getElementById('tel_portabl').classList.remove("inputValid");
        document.getElementById('tel_portabl').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('tel_portabl').classList.add("inputValid");
    textDangerPhone.classList.add("runSUCSSMSG");
    document.getElementById('tel_portabl').classList.add('verifedinput');
    textDangerPhone.innerHTML = "";

    return true;

}

// function validation of champ (Landline phone champ)
function OnValidatLandlinephone() {
    const cp = document.getElementById('cp').value;


    if (cp.length == 0) {

        textDangerPostcode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Postcode is required';
        textDangerPostcode.classList.add("runERRMSG");
        document.getElementById('cp').classList.add("inputError");

        textDangerPostcode.classList.remove("runSUCSSMSG");
        document.getElementById('cp').classList.remove("inputValid");
        document.getElementById('cp').classList.remove('verifedinput');

        return false;
    }

    if (!cp.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

        textDangerPostcode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> scpecial character not supported';
        textDangerPostcode.classList.add("runERRMSG");
        document.getElementById('cp').classList.add("inputError");

        textDangerPostcode.classList.remove("runSUCSSMSG");
        document.getElementById('cp').classList.remove("inputValid");
        document.getElementById('cp').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('cp').classList.add("inputValid");
    textDangerPostcode.classList.add("runSUCSSMSG");
    document.getElementById('cp').classList.add('verifedinput');
    textDangerPostcode.innerHTML = "";

    return true;

}



// function validation of champ (Passport Number champ)
function OnValidatPassportNumber(){
    const num_pass = document.getElementById('num_pass').value;


    if (num_pass.length == 0) {

        textDangerPassport.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Passport Number is required';
        textDangerPassport.classList.add("runERRMSG");
        document.getElementById('num_pass').classList.add("inputError");

        textDangerPassport.classList.remove("runSUCSSMSG");
        document.getElementById('num_pass').classList.remove("inputValid");
        document.getElementById('num_pass').classList.remove('verifedinput');

        return false;
    }

    if (!num_pass.match(/^(?!^0+$)[a-zA-Z0-9]{3,20}$/)) {

        textDangerPassport.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Your passport number must be between 3 and 20';
        textDangerPassport.classList.add("runERRMSG");
        document.getElementById('num_pass').classList.add("inputError");

        textDangerPassport.classList.remove("runSUCSSMSG");
        document.getElementById('num_pass').classList.remove("inputValid");
        document.getElementById('num_pass').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('num_pass').classList.add("inputValid");
    textDangerPassport.classList.add("runSUCSSMSG");
    document.getElementById('num_pass').classList.add('verifedinput');
    textDangerPassport.innerHTML = "";

    return true;

}


// validation step 1
function run() {
    if (OnValidatFamilyName() === true && OnValidatFirstName() === true && OnValidatGender() === true && OnValidatSituation_f() === true && OnValidatEmail() === true && OnValidatConfirmationEmail() === true && OnValidatDate() === true && OnValidatConfirmationDate() === true && OnValidatPlaceBirth() === true && OnValidatCountry() === true) {
        document.getElementById("section-step1").style.display = "none";
        document.getElementById("section-step2").style.display = "block";
    } else {
        document.getElementById("section-step2").style.display = "none";
        document.getElementById("section-step1").style.display = "block";
    }
}

// validation step 2
function run2() {
    if (OnValidatAdresseLine() === true && OnValidatPostcode() === true && OnValidatCity() === true && OnValidatCountry2() === true && OnValidatPhone() === true && OnValidatLandlinephone() === true) {
        document.getElementById("section-step2").style.display = "none";
        document.getElementById("section-step3").style.display = "block";
    } else {
        document.getElementById("section-step3").style.display = "none";
        document.getElementById("section-step2").style.display = "block";
    }
}

// validation step 3
function run3() {
    if (OnValidatAdresseLine() === true && OnValidatPostcode() === true && OnValidatCity() === true && OnValidatCountry2() === true && OnValidatPhone() === true && OnValidatLandlinephone() === true) {
        document.getElementById("section-step3").style.display = "none";
        document.getElementById("section-step4").style.display = "block";
    } else {
        document.getElementById("section-step4").style.display = "none";
        document.getElementById("section-step3").style.display = "block";
    }
}


// previous step 2
function prevStep2() {
    document.getElementById("section-step2").style.display = "none";
    document.getElementById("section-step1").style.display = "block";
}

// previous step 3
function prevStep3() {
    document.getElementById("section-step3").style.display = "none";
    document.getElementById("section-step2").style.display = "block";
}


// previous step 4
function prevStep4() {
    document.getElementById("section-step4").style.display = "none";
    document.getElementById("section-step3").style.display = "block";
}



