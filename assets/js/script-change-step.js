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


const myForm = document.getElementById('myForm');

// function validation of champ (First champ)
function OnValidatFirstName() {
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
function OnValidatLastName() {
    console.log("test1");
    const firstname = document.getElementById('prenom').value;
    console.log(firstname);


    if (firstname.length == 0) {

        textDangerFirstname.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Family name is required';
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
    console.log(sexe);


    if (sexe.length == 0) {

        textDangerSexe.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Family name is required';
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
    console.log(situation_familiale);


    if (situation_familiale.length == 0) {

        textDangerSituation_f.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Family name is required';
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
    const emailconfirm = document.getElementById('emailconfirm').value;
    console.log(email);


    if (email.length == 0) {

        textDangerEmail.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Family name is required';
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
    console.log(emailconfirm);


    if (emailconfirm.length == 0) {

        textDangerConfirmationEmail.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Family name is required';
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
    const date_naiss_confirm = document.getElementById('confirm_date_naissance').value;
    console.log("anas", date_naiss);


    if (date_naiss.length == 0) {

        textDangerDate.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Family name is required';
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
    console.log("anas", date_naiss_confirm);


    if (date_naiss_confirm.length == 0) {

        textDangerConfirmationDate.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Family name is required';
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
    console.log(country);


    if (country.length == 0) {

        textDangerCountry.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Family name is required';
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


    console.log("wa anas", familynamechecked);

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



