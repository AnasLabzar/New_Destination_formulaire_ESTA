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
const textDangerConfirmationPassportNumber = document.getElementById('text-danger-confirmation-passportNumber');
const textDangerDateDelivrance = document.getElementById('text-danger-date-delivrance');
const textDangerDateExpiration = document.getElementById('text-danger-date-expiration');
const textDangerPaysEmission = document.getElementById('text-danger-pays-emission');
const textDangerNationalite = document.getElementById('text-danger-Nationalite');
const textDangerNumeroIdentite = document.getElementById('text-danger-numero-identite');

const textDangerWhen = document.getElementById('text-danger-when');
const textDangerWhere = document.getElementById('text-danger-where');
const textDangerQcountry = document.getElementById('text-danger-q-country');
const textDangerFromInput = document.getElementById('text-danger-fromInput');
const textDangerToInput = document.getElementById('text-danger-to');
const textDangerReason = document.getElementById('text-danger-reasono');
const textDangerFamilyName2 = document.getElementById('text-danger-familyname2');
const textDangerFirstName2 = document.getElementById('text-danger-firtsname2');
const textDangerEmployeur = document.getElementById('text-danger-employeur');
const textDangerEmployeurAddress = document.getElementById('text-danger-employeur-address');
const textDangerCity2 = document.getElementById('text-danger-city2');
const textDangerPaysEmpl = document.getElementById('text-danger-pays-empl');
const textDangerLastnameParent1 = document.getElementById('text-danger-lastname-parent1');
const textDangerFirstnameParent1 = document.getElementById('text-danger-firstname-parent1');
const textDangerLastnameParent2 = document.getElementById('text-danger-lastname-parent2');
const textDangerFirstnameParent2 = document.getElementById('text-danger-firstname-parent2');
const textDangerAnotherCountry = document.getElementById('text-danger-another-country');
// const textDangerNDOCU = document.getElementById('text-danger-NDOCU');
// const textDangerType_doc = document.getElementById('text-danger-type_doc');
// const textDangerpays_doc = document.getElementById('text-danger-pays_doc');
// const textDangerDate_doc = document.getElementById('text-danger-date_doc');
const textDangerCitizenship = document.getElementById('text-danger-citizenship');
const textDangerCountryOtherStart = document.getElementById('text-danger-country-other-start');
const textDangerCountryOtherEnd = document.getElementById('text-danger-country-other2-end');
const textDangerName = document.getElementById('text-danger-name');
const textDangerFirstName3 = document.getElementById('text-danger-firstname3');
const textDangerTelephone = document.getElementById('text-danger-telephone');
const textDangerEmail2 = document.getElementById('text-danger-email2');



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
    const emailchecked = textDangerEmail.className;
    const confirmationemailchecked = textDangerConfirmationEmail.className;
    const datechecked = textDangerDate.className;
    const confirmationdatenamechecked = textDangerConfirmationDate.className;
    const placebirthchecked = textDangerPlaceBirth.className;
    const countrychecked = textDangerCountry.className;

    var btnNext = document.getElementById('nextStep');

    if ((familynamechecked && firstnamechecked && sexechecked && emailchecked && confirmationemailchecked && datechecked && confirmationdatenamechecked && placebirthchecked && countrychecked) === "text-danger field-validation-valid runSUCSSMSG") {
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


    if (pays.length == 0) {
        textDangerCountry2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Gender champ is required';
        textDangerCountry2.classList.add("runERRMSG");
        document.getElementById('pays').classList.add("inputError");

        textDangerCountry2.classList.remove("runSUCSSMSG");
        document.getElementById('pays').classList.remove("inputValid");
        document.getElementById('pays').classList.remove('verifedinput');

        return false;
    }

    if (!pays.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {
        textDangerCountry2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> scpecial character not supported';
        textDangerCountry2.classList.add("runERRMSG");
        document.getElementById('pays').classList.add("inputError");

        textDangerCountry2.classList.remove("runSUCSSMSG");
        document.getElementById('pays').classList.remove("inputValid");
        document.getElementById('pays').classList.remove('verifedinput');

        return false;
    }

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

        textDangerPhone.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Mobile Phone is required';
        textDangerPhone.classList.add("runERRMSG");
        document.getElementById('tel_portabl').classList.add("inputError");

        textDangerPhone.classList.remove("runSUCSSMSG");
        document.getElementById('tel_portabl').classList.remove("inputValid");
        document.getElementById('tel_portabl').classList.remove('verifedinput');

        return false;
    }

    if (!tel_portabl.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)) {

        textDangerPhone.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> The phone number can only contain (numbers, spaces, (, ), +)';
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
function OnValidatPassportNumber() {
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

// function validation of champ (Confirmation Passport Number champ)
function OnValidatConfirmationPassportNumber() {
    const confirm_num_pass = document.getElementById('confirm_num_pass').value;
    const num_pass = document.getElementById('num_pass').value;


    if (confirm_num_pass.length == 0) {

        textDangerConfirmationPassportNumber.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Passport Number is required';
        textDangerConfirmationPassportNumber.classList.add("runERRMSG");
        document.getElementById('confirm_num_pass').classList.add("inputError");

        textDangerConfirmationPassportNumber.classList.remove("runSUCSSMSG");
        document.getElementById('confirm_num_pass').classList.remove("inputValid");
        document.getElementById('confirm_num_pass').classList.remove('verifedinput');

        return false;
    }

    if (confirm_num_pass !== num_pass) {

        textDangerConfirmationPassportNumber.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Confirmation Number Passport is not correct';
        textDangerConfirmationPassportNumber.classList.add("runERRMSG");
        document.getElementById('confirm_num_pass').classList.add("inputError");

        textDangerConfirmationPassportNumber.classList.remove("runSUCSSMSG");
        document.getElementById('confirm_num_pass').classList.remove("inputValid");
        document.getElementById('confirm_num_pass').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('confirm_num_pass').classList.add("inputValid");
    document.getElementById('confirm_num_pass').classList.remove("inputError");
    textDangerConfirmationPassportNumber.classList.remove("runERRMSG");
    textDangerConfirmationPassportNumber.classList.add("runSUCSSMSG");
    document.getElementById('confirm_num_pass').classList.add('verifedinput');
    textDangerPassport.innerHTML = "";

    return true;

}

// function validation of champ (Date Delivrance champ)
function OnValidatDateDelivrance() {
    const date_delivrance = document.getElementById('date_delivrance').value;

    if (date_delivrance.length == 0) {

        textDangerDateDelivrance.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Date champ is required';
        textDangerDateDelivrance.classList.add("runERRMSG");
        document.getElementById('date_delivrance').classList.add("inputError");

        textDangerDateDelivrance.classList.remove("runSUCSSMSG");
        document.getElementById('date_delivrance').classList.remove("inputValid");
        document.getElementById('date_delivrance').classList.remove('verifedinputDate');

        return false;
    }

    if (!date_delivrance.match(/^\s*((?:19|20)\d{2})\-(1[012]|0?[1-9])\-(3[01]|[12][0-9]|0?[1-9])\s*$/)) {

        textDangerDateDelivrance.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Then write your date of birth in this form: 31/12/1999';
        textDangerDateDelivrance.classList.add("runERRMSG");
        document.getElementById('date_delivrance').classList.add("inputError");

        textDangerDateDelivrance.classList.remove("runSUCSSMSG");
        document.getElementById('date_delivrance').classList.remove("inputValid");
        document.getElementById('date_delivrance').classList.remove('verifedinputDate');

        return false;
    }

    document.getElementById('date_delivrance').classList.add("inputValid");
    textDangerDateDelivrance.classList.add("runSUCSSMSG");
    document.getElementById('date_delivrance').classList.add('verifedinputDate');
    textDangerDateDelivrance.innerHTML = "";

    return true;

}

// function validation of champ (Date Expiration champ)
function OnValidatDateExpiration() {
    const date_exp = document.getElementById('date_exp').value;
    const date_delivrance = document.getElementById('date_delivrance').value;

    if (date_exp.length == 0) {

        textDangerDateExpiration.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Date champ is required';
        textDangerDateExpiration.classList.add("runERRMSG");
        document.getElementById('date_exp').classList.add("inputError");

        textDangerDateExpiration.classList.remove("runSUCSSMSG");
        document.getElementById('date_exp').classList.remove("inputValid");
        document.getElementById('date_exp').classList.remove('verifedinputDate');

        return false;
    }

    if (!date_exp.match(/^\s*((?:19|20)\d{2})\-(1[012]|0?[1-9])\-(3[01]|[12][0-9]|0?[1-9])\s*$/)) {

        textDangerDateExpiration.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Then write your date of birth in this form: 31/12/1999';
        textDangerDateExpiration.classList.add("runERRMSG");
        document.getElementById('date_exp').classList.add("inputError");

        textDangerDateExpiration.classList.remove("runSUCSSMSG");
        document.getElementById('date_exp').classList.remove("inputValid");
        document.getElementById('date_exp').classList.remove('verifedinputDate');

        return false;
    }

    if (date_exp <= date_delivrance) {
        textDangerDateExpiration.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Passport "expiration date" must be greater than the "issuance date"';
        textDangerDateExpiration.classList.add("runERRMSG");
        document.getElementById('date_exp').classList.add("inputError");

        textDangerDateExpiration.classList.remove("runSUCSSMSG");
        document.getElementById('date_exp').classList.remove("inputValid");
        document.getElementById('date_exp').classList.remove('verifedinputDate');

        return false;
    }

    document.getElementById('date_exp').classList.add("inputValid");
    textDangerDateExpiration.classList.add("runSUCSSMSG");
    document.getElementById('date_exp').classList.add('verifedinputDate');
    textDangerDateExpiration.innerHTML = "";

    return true;

}

// function validation of champ (Pays Emission champ)
function OnValidatPaysEmission() {
    const pays_emission = document.getElementById('pays_emission').value;


    if (pays_emission.length == 0) {
        textDangerPaysEmission.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Gender champ is required';
        textDangerPaysEmission.classList.add("runERRMSG");
        document.getElementById('pays_emission').classList.add("inputError");

        textDangerPaysEmission.classList.remove("runSUCSSMSG");
        document.getElementById('pays_emission').classList.remove("inputValid");
        document.getElementById('pays_emission').classList.remove('verifedinput');

        return false;
    }

    if (!pays_emission.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {
        textDangerPaysEmission.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
        textDangerPaysEmission.classList.add("runERRMSG");
        document.getElementById('pays_emission').classList.add("inputError");

        textDangerPaysEmission.classList.remove("runSUCSSMSG");
        document.getElementById('pays_emission').classList.remove("inputValid");
        document.getElementById('pays_emission').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('pays_emission').classList.add("inputValid");
    textDangerPaysEmission.classList.add("runSUCSSMSG");
    document.getElementById('pays_emission').classList.add('verifedinput');
    textDangerPaysEmission.innerHTML = "";

    return true;

}

// function validation of champ (Nationalité champ)
function OnValidatNationalite() {
    const nationalite = document.getElementById('nationalite').value;


    if (nationalite.length == 0) {
        textDangerNationalite.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Gender champ is required';
        textDangerNationalite.classList.add("runERRMSG");
        document.getElementById('nationalite').classList.add("inputError");

        textDangerNationalite.classList.remove("runSUCSSMSG");
        document.getElementById('nationalite').classList.remove("inputValid");
        document.getElementById('nationalite').classList.remove('verifedinput');

        return false;
    }

    if (!nationalite.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {
        textDangerNationalite.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
        textDangerNationalite.classList.add("runERRMSG");
        document.getElementById('nationalite').classList.add("inputError");

        textDangerNationalite.classList.remove("runSUCSSMSG");
        document.getElementById('nationalite').classList.remove("inputValid");
        document.getElementById('nationalite').classList.remove('verifedinput');

        return false;
    }

    const champ_taiwan = document.getElementById('champ_taiwan');

    if (nationalite === 'Taiwan') {
        champ_taiwan.classList.add("display-block");

    } else {
        champ_taiwan.style.display = "none !important";

    }

    document.getElementById('nationalite').classList.add("inputValid");
    textDangerNationalite.classList.add("runSUCSSMSG");
    document.getElementById('nationalite').classList.add('verifedinput');
    textDangerNationalite.innerHTML = "";

    return true;

}

// function validation of champ (ID card national champ)
function OnValidatNumeroIdentite() {
    const numero_identite = document.getElementById('numero_identite').value;


    if (numero_identite.length == 0) {
        textDangerNumeroIdentite.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Gender champ is required';
        textDangerNumeroIdentite.classList.add("runERRMSG");
        document.getElementById('numero_identite').classList.add("inputError");

        textDangerNumeroIdentite.classList.remove("runSUCSSMSG");
        document.getElementById('numero_identite').classList.remove("inputValid");
        document.getElementById('numero_identite').classList.remove('verifedinput');

        return false;
    }

    if (!numero_identite.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {
        textDangerNumeroIdentite.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
        textDangerNumeroIdentite.classList.add("runERRMSG");
        document.getElementById('numero_identite').classList.add("inputError");

        textDangerNumeroIdentite.classList.remove("runSUCSSMSG");
        document.getElementById('numero_identite').classList.remove("inputValid");
        document.getElementById('numero_identite').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('numero_identite').classList.add("inputValid");
    textDangerNumeroIdentite.classList.add("runSUCSSMSG");
    document.getElementById('numero_identite').classList.add('verifedinput');
    textDangerNumeroIdentite.innerHTML = "";

    return true;

}













// function validation of champ (When national champ)
function OnValidatWhen() {
    const whenrefususa = document.getElementById('whenrefususa').value;
    var check1 = document.getElementById('rowInput7').classList.contains("display-block");
    if (check1 == true) {
        if (whenrefususa.length == 0) {
            textDangerWhen.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> This champ is required';
            textDangerWhen.classList.add("runERRMSG");
            document.getElementById('whenrefususa').classList.add("inputError");

            textDangerWhen.classList.remove("runSUCSSMSG");
            document.getElementById('whenrefususa').classList.remove("inputValid");
            document.getElementById('whenrefususa').classList.remove('verifedinput');

            return false;
        }

        if (!whenrefususa.match(/[^.*+--&é"'èù!:;=¨£µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {
            textDangerWhen.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
            textDangerWhen.classList.add("runERRMSG");
            document.getElementById('whenrefususa').classList.add("inputError");

            textDangerWhen.classList.remove("runSUCSSMSG");
            document.getElementById('whenrefususa').classList.remove("inputValid");
            document.getElementById('whenrefususa').classList.remove('verifedinput');

            return false;
        }
        document.getElementById('whenrefususa').classList.add("inputValid");
        document.getElementById('whenrefususa').classList.add('verifedinput');
        textDangerWhen.classList.remove('runERRMSG');
        textDangerWhen.innerHTML = "";
        document.getElementById('whenrefususa').classList.remove('inputError');

        return true;
    }

    return true;

}

// function validation of champ (Where national champ)
function OnValidatWhere() {
    const whererefususa = document.getElementById('whererefususa').value;
    var check1 = document.getElementById('rowInput7').classList.contains("display-block");
    if (check1 == true) {
        if (whererefususa.length == 0) {
            textDangerWhere.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> This champ is required';
            textDangerWhere.classList.add("runERRMSG");
            textDangerWhere.classList.add("runERRMSG");
            document.getElementById('whererefususa').classList.add("inputError");
            textDangerWhere.classList.remove("runSUCSSMSG");
            document.getElementById('whererefususa').classList.remove("inputValid");
            document.getElementById('whererefususa').classList.remove('verifedinput');

            return false;
        }

        if (!whererefususa.match(/[^.*+--&é"'èù!:;=¨£µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {
            textDangerWhere.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
            textDangerWhere.classList.add("runERRMSG");
            document.getElementById('whererefususa').classList.add("inputError");

            textDangerWhere.classList.remove("runSUCSSMSG");
            document.getElementById('whererefususa').classList.remove("inputValid");
            document.getElementById('whererefususa').classList.remove('verifedinput');

            return false;
        }

        document.getElementById('whererefususa').classList.add("inputValid");
        document.getElementById('whererefususa').classList.add('verifedinput');
        textDangerWhere.classList.remove('runERRMSG');
        textDangerWhere.innerHTML = "";
        document.getElementById('whererefususa').classList.remove('inputError');

        return true;
    }

    return true;

}

// function validation of champ (Country 3 national champ)
function OnValidatCountry3() {
    const q_country = document.getElementById('q_country').value;
    var check1 = document.getElementById('rowInput9').classList.contains("display-block");

    if (check1 == true) {

        if (q_country.length == 0) {
            textDangerQcountry.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> This champ is required';
            textDangerQcountry.classList.add("runERRMSG");
            document.getElementById('q_country').classList.add("inputError");

            textDangerQcountry.classList.remove("runSUCSSMSG");
            document.getElementById('q_country').classList.remove("inputValid");
            document.getElementById('q_country').classList.remove('verifedinput');

            return false;
        }

        document.getElementById('q_country').classList.add("inputValid");
        textDangerQcountry.classList.remove("runERRMSG");
        textDangerQcountry.innerHTML = "";
        document.getElementById('q_country').classList.add('verifedinput');

        return true;
    }

    return true;
}

// function validation of champ (From national champ)
function OnValidatFormInput() {
    const q_from = document.getElementById('q_from').value;
    var check1 = document.getElementById('rowInput9').classList.contains("display-block");

    if (check1 == true) {
        if (q_from.length == 0) {
            textDangerFromInput.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> This champ is required';
            textDangerFromInput.classList.add("runERRMSG");
            document.getElementById('q_from').classList.add("inputError");

            textDangerFromInput.classList.remove("runSUCSSMSG");
            document.getElementById('q_from').classList.remove("inputValid");
            document.getElementById('q_from').classList.remove('verifedinput');

            return false;
        }

        if (!q_from.match(/[^.*+--&é"'èù!:;=¨£µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {
            textDangerFromInput.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
            textDangerFromInput.classList.add("runERRMSG");
            document.getElementById('q_from').classList.add("inputError");

            textDangerFromInput.classList.remove("runSUCSSMSG");
            document.getElementById('q_from').classList.remove("inputValid");
            document.getElementById('q_from').classList.remove('verifedinput');

            return false;
        }

        document.getElementById('q_from').classList.add("inputValid");
        document.getElementById('q_from').classList.add('verifedinput');
        textDangerFromInput.classList.remove("runERRMSG");
        textDangerFromInput.innerHTML = "";

        return true;
    }

    return true;
}

// function validation of champ (TO champ)
function OnValidatToInput() {
    const q_to = document.getElementById('q_to').value;
    var check1 = document.getElementById('rowInput9').classList.contains("display-block");


    if (check1 == true) {
        if (q_to.length == 0) {

            textDangerToInput.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> This champ is required';
            textDangerToInput.classList.add("runERRMSG");
            document.getElementById('q_to').classList.add("inputError");

            textDangerToInput.classList.remove("runSUCSSMSG");
            document.getElementById('q_to').classList.remove("inputValid");
            document.getElementById('q_to').classList.remove('verifedinput');

            return false;
        }

        if (!q_to.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

            textDangerToInput.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
            textDangerToInput.classList.add("runERRMSG");
            document.getElementById('q_to').classList.add("inputError");

            textDangerToInput.classList.remove("runSUCSSMSG");
            document.getElementById('q_to').classList.remove("inputValid");
            document.getElementById('q_to').classList.remove('verifedinput');

            return false;
        }

        document.getElementById('q_to').classList.add("inputValid");
        textDangerToInput.classList.add("runSUCSSMSG");
        document.getElementById('q_to').classList.add('verifedinput');
        textDangerToInput.innerHTML = "";

        return true;
    }

    return true;

}

// function validation of champ (Reason champ)
function OnValidatReason() {
    const q_reason = document.getElementById('q_reason').value;
    var check1 = document.getElementById('rowInput9').classList.contains("display-block");

    if (check1 == true) {

        if (q_reason.length == 0) {

            textDangerReason.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Reason champ is required';
            textDangerReason.classList.add("runERRMSG");
            document.getElementById('q_reason').classList.add("inputError");

            textDangerReason.classList.remove("runSUCSSMSG");
            document.getElementById('q_reason').classList.remove("inputValid");
            document.getElementById('q_reason').classList.remove('verifedinput');

            return false;
        }

        document.getElementById('q_reason').classList.add("inputValid");
        document.getElementById('q_reason').classList.add('verifedinput');
        document.getElementById('text-danger-reason').classList.remove("runERRMSG");
        document.getElementById('text-danger-reason').innerHTML = "";

        return true;
    }

    return true;

}

// function validation of champ (Family Name 2 champ)
function OnValidatFamilyname2() {
    const familyname_alias = document.getElementById('familyname_alias').value;
    var check1 = document.getElementById('rowInput10').classList.contains("display-block");

    if (check1 == true) {

        if (familyname_alias.length == 0) {

            textDangerFamilyName2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Family name champ is required';
            textDangerFamilyName2.classList.add("runERRMSG");
            document.getElementById('familyname_alias').classList.add("inputError");

            textDangerFamilyName2.classList.remove("runSUCSSMSG");
            document.getElementById('familyname_alias').classList.remove("inputValid");
            document.getElementById('familyname_alias').classList.remove('verifedinput');

            return false;
        }

        if (!familyname_alias.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

            textDangerFamilyName2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
            textDangerFamilyName2.classList.add("runERRMSG");
            document.getElementById('familyname_alias').classList.add("inputError");

            textDangerFamilyName2.classList.remove("runSUCSSMSG");
            document.getElementById('familyname_alias').classList.remove("inputValid");
            document.getElementById('familyname_alias').classList.remove('verifedinput');

            return false;
        }

        document.getElementById('familyname_alias').classList.add("inputValid");
        textDangerFamilyName2.classList.add("runSUCSSMSG");
        document.getElementById('familyname_alias').classList.add('verifedinput');
        textDangerFamilyName2.innerHTML = "";

        return true;
    }
    return true;

}

// function validation of champ (First Nmae 2 champ)
function OnValidatFirstname2() {
    const firstname_alias = document.getElementById('firstname_alias').value;
    var check1 = document.getElementById('rowInput10').classList.contains("display-block");


    if (check1 == true) {

        if (firstname_alias.length == 0) {

            textDangerFirstName2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Fisrt name champ is required';
            textDangerFirstName2.classList.add("runERRMSG");
            document.getElementById('firstname_alias').classList.add("inputError");

            textDangerFirstName2.classList.remove("runSUCSSMSG");
            document.getElementById('firstname_alias').classList.remove("inputValid");
            document.getElementById('firstname_alias').classList.remove('verifedinput');

            return false;
        }

        if (!firstname_alias.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

            textDangerFirstName2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
            textDangerFirstName2.classList.add("runERRMSG");
            document.getElementById('firstname_alias').classList.add("inputError");

            textDangerFirstName2.classList.remove("runSUCSSMSG");
            document.getElementById('firstname_alias').classList.remove("inputValid");
            document.getElementById('firstname_alias').classList.remove('verifedinput');

            return false;
        }

        document.getElementById('firstname_alias').classList.add("inputValid");
        textDangerFirstName2.classList.add("runSUCSSMSG");
        document.getElementById('firstname_alias').classList.add('verifedinput');
        textDangerFirstName2.innerHTML = "";

        return true;
    }

    return true;
}

// function validation of champ (Employer champ)
function OnValidatEmployeur() {
    const employeur = document.getElementById('employeur').value;
    var check1 = document.getElementById('rowInput11').classList.contains("display-block");


    if (check1 == true) {

        if (employeur.length == 0) {

            textDangerEmployeur.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Employer name champ is required';
            textDangerEmployeur.classList.add("runERRMSG");
            document.getElementById('employeur').classList.add("inputError");

            textDangerEmployeur.classList.remove("runSUCSSMSG");
            document.getElementById('employeur').classList.remove("inputValid");
            document.getElementById('employeur').classList.remove('verifedinput');

            return false;
        }

        if (!employeur.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

            textDangerEmployeur.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
            textDangerEmployeur.classList.add("runERRMSG");
            document.getElementById('employeur').classList.add("inputError");

            textDangerEmployeur.classList.remove("runSUCSSMSG");
            document.getElementById('employeur').classList.remove("inputValid");
            document.getElementById('employeur').classList.remove('verifedinput');

            return false;
        }

        document.getElementById('employeur').classList.add("inputValid");
        textDangerEmployeur.classList.add("runSUCSSMSG");
        document.getElementById('employeur').classList.add('verifedinput');
        textDangerEmployeur.innerHTML = "";

        return true;
    }

    return true;

}

// function validation of champ (Employer Address champ)
function OnValidatEmployeurAddress() {
    const address_empl = document.getElementById('address_empl').value;
    var check1 = document.getElementById('rowInput11').classList.contains("display-block");


    if (check1 == true) {

        if (address_empl.length == 0) {

            textDangerEmployeurAddress.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Employer Address champ is required';
            textDangerEmployeurAddress.classList.add("runERRMSG");
            document.getElementById('address_empl').classList.add("inputError");

            textDangerEmployeurAddress.classList.remove("runSUCSSMSG");
            document.getElementById('address_empl').classList.remove("inputValid");
            document.getElementById('address_empl').classList.remove('verifedinput');

            return false;
        }

        if (!address_empl.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

            textDangerEmployeurAddress.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
            textDangerEmployeurAddress.classList.add("runERRMSG");
            document.getElementById('address_empl').classList.add("inputError");

            textDangerEmployeurAddress.classList.remove("runSUCSSMSG");
            document.getElementById('address_empl').classList.remove("inputValid");
            document.getElementById('address_empl').classList.remove('verifedinput');

            return false;
        }

        document.getElementById('address_empl').classList.add("inputValid");
        textDangerEmployeurAddress.classList.add("runSUCSSMSG");
        document.getElementById('address_empl').classList.add('verifedinput');
        textDangerEmployeurAddress.innerHTML = "";

        return true;
    }

    return true;

}

// function validation of champ (City 2 champ)
function OnValidatCity2() {
    const ville_empl = document.getElementById('ville_empl').value;
    var check1 = document.getElementById('rowInput11').classList.contains("display-block");


    if (check1 == true) {

        if (ville_empl.length == 0) {

            textDangerCity2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> City champ is required';
            textDangerCity2.classList.add("runERRMSG");
            document.getElementById('ville_empl').classList.add("inputError");

            textDangerCity2.classList.remove("runSUCSSMSG");
            document.getElementById('ville_empl').classList.remove("inputValid");
            document.getElementById('ville_empl').classList.remove('verifedinput');

            return false;
        }

        if (!ville_empl.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

            textDangerCity2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
            textDangerCity2.classList.add("runERRMSG");
            document.getElementById('ville_empl').classList.add("inputError");

            textDangerCity2.classList.remove("runSUCSSMSG");
            document.getElementById('ville_empl').classList.remove("inputValid");
            document.getElementById('ville_empl').classList.remove('verifedinput');

            return false;
        }

        document.getElementById('ville_empl').classList.add("inputValid");
        textDangerCity2.classList.add("runSUCSSMSG");
        document.getElementById('ville_empl').classList.add('verifedinput');
        textDangerCity2.innerHTML = "";

        return true;
    }

    return true;

}

// function validation of champ (Country 4 champ)
function OnValidatCountry4() {
    const pays_empl = document.getElementById('pays_empl').value;
    var check1 = document.getElementById('rowInput11').classList.contains("display-block");

    if (check1 == true) {

        if (pays_empl.length == 0) {

            textDangerPaysEmpl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Country champ is required';
            textDangerPaysEmpl.classList.add("runERRMSG");
            document.getElementById('pays_empl').classList.add("inputError");

            textDangerPaysEmpl.classList.remove("runSUCSSMSG");
            document.getElementById('pays_empl').classList.remove("inputValid");
            document.getElementById('pays_empl').classList.remove('verifedinput');

            return false;
        }

        document.getElementById('pays_empl').classList.add("inputValid");
        textDangerPaysEmpl.classList.add("runSUCSSMSG");
        document.getElementById('pays_empl').classList.add('verifedinput');
        textDangerPaysEmpl.innerHTML = "";

        return true;
    }

    return true;


}





// function validation of champ (Parent 1 Last name champ)
function OnValidatLastNameParent() {
    const parent1_nom = document.getElementById('parent1_nom').value;


    if (parent1_nom.length == 0) {

        textDangerLastnameParent1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Last name champ is required';
        textDangerLastnameParent1.classList.add("runERRMSG");
        document.getElementById('parent1_nom').classList.add("inputError");

        textDangerLastnameParent1.classList.remove("runSUCSSMSG");
        document.getElementById('parent1_nom').classList.remove("inputValid");
        document.getElementById('parent1_nom').classList.remove('verifedinput');

        return false;
    }

    if (!parent1_nom.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

        textDangerLastnameParent1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
        textDangerLastnameParent1.classList.add("runERRMSG");
        document.getElementById('parent1_nom').classList.add("inputError");

        textDangerLastnameParent1.classList.remove("runSUCSSMSG");
        document.getElementById('parent1_nom').classList.remove("inputValid");
        document.getElementById('parent1_nom').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('parent1_nom').classList.add("inputValid");
    textDangerLastnameParent1.classList.add("runSUCSSMSG");
    document.getElementById('parent1_nom').classList.add('verifedinput');
    textDangerLastnameParent1.innerHTML = "";

    return true;

}

// function validation of champ (Parent 1 Last name champ)
function OnValidatFirstNameParent() {
    const parent1_prenom = document.getElementById('parent1_prenom').value;


    if (parent1_prenom.length == 0) {

        textDangerFirstnameParent1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> First name champ is required';
        textDangerFirstnameParent1.classList.add("runERRMSG");
        document.getElementById('parent1_prenom').classList.add("inputError");

        textDangerFirstnameParent1.classList.remove("runSUCSSMSG");
        document.getElementById('parent1_prenom').classList.remove("inputValid");
        document.getElementById('parent1_prenom').classList.remove('verifedinput');

        return false;
    }

    if (!parent1_prenom.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

        textDangerFirstnameParent1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
        textDangerFirstnameParent1.classList.add("runERRMSG");
        document.getElementById('parent1_prenom').classList.add("inputError");

        textDangerFirstnameParent1.classList.remove("runSUCSSMSG");
        document.getElementById('parent1_prenom').classList.remove("inputValid");
        document.getElementById('parent1_prenom').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('parent1_prenom').classList.add("inputValid");
    textDangerFirstnameParent1.classList.add("runSUCSSMSG");
    document.getElementById('parent1_prenom').classList.add('verifedinput');
    textDangerFirstnameParent1.innerHTML = "";

    return true;

}

// function validation of champ (Parent 2 Last name champ)
function OnValidatLastNameParent2() {
    const parent2_nom = document.getElementById('parent2_nom').value;


    if (parent2_nom.length == 0) {

        textDangerLastnameParent2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Last name champ is required';
        textDangerLastnameParent2.classList.add("runERRMSG");
        document.getElementById('parent2_nom').classList.add("inputError");

        textDangerLastnameParent2.classList.remove("runSUCSSMSG");
        document.getElementById('parent2_nom').classList.remove("inputValid");
        document.getElementById('parent2_nom').classList.remove('verifedinput');

        return false;
    }

    if (!parent2_nom.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

        textDangerLastnameParent2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
        textDangerLastnameParent2.classList.add("runERRMSG");
        document.getElementById('parent2_nom').classList.add("inputError");

        textDangerLastnameParent2.classList.remove("runSUCSSMSG");
        document.getElementById('parent2_nom').classList.remove("inputValid");
        document.getElementById('parent2_nom').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('parent2_nom').classList.add("inputValid");
    textDangerLastnameParent2.classList.add("runSUCSSMSG");
    document.getElementById('parent2_nom').classList.add('verifedinput');
    textDangerLastnameParent2.innerHTML = "";

    return true;

}

// function validation of champ (Parent 2 Last name champ)
function OnValidatFirstNameParent2() {
    const parent2_prenom = document.getElementById('parent2_prenom').value;


    if (parent2_prenom.length == 0) {

        textDangerFirstnameParent2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> First name champ is required';
        textDangerFirstnameParent2.classList.add("runERRMSG");
        document.getElementById('parent2_prenom').classList.add("inputError");

        textDangerFirstnameParent2.classList.remove("runSUCSSMSG");
        document.getElementById('parent2_prenom').classList.remove("inputValid");
        document.getElementById('parent2_prenom').classList.remove('verifedinput');

        return false;
    }

    if (!parent2_prenom.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

        textDangerFirstnameParent2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
        textDangerFirstnameParent2.classList.add("runERRMSG");
        document.getElementById('parent2_prenom').classList.add("inputError");

        textDangerFirstnameParent2.classList.remove("runSUCSSMSG");
        document.getElementById('parent2_prenom').classList.remove("inputValid");
        document.getElementById('parent2_prenom').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('parent2_prenom').classList.add("inputValid");
    textDangerFirstnameParent2.classList.add("runSUCSSMSG");
    document.getElementById('parent2_prenom').classList.add('verifedinput');
    textDangerFirstnameParent2.innerHTML = "";

    return true;

}

// function validation of champ (Parent 2 Last name champ)
function OnValidatAnotherCountry() {
    const another_country = document.getElementById('another_country').value;
    var check1 = document.getElementById('rowInput13').classList.contains("display-block");

    if (check1 == true) {

        if (another_country.length == 0) {

            textDangerAnotherCountry.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Country of Citizenship champ is required';
            textDangerAnotherCountry.classList.add("runERRMSG");
            document.getElementById('another_country').classList.add("inputError");

            textDangerAnotherCountry.classList.remove("runSUCSSMSG");
            document.getElementById('another_country').classList.remove("inputValid");
            document.getElementById('another_country').classList.remove('verifedinput');

            return false;
        }

        const citizenship = document.getElementById('nationalite').value;
        const champ_taiwan = document.getElementById('champ_taiwan');
        if (citizenship === 'Taiwan') {
            champ_taiwan.style.display = "block";
        } else {
            champ_taiwan.style.display = "none";
        }
        document.getElementById('another_country').classList.add("inputValid");
        textDangerAnotherCountry.classList.add("runSUCSSMSG");
        document.getElementById('another_country').classList.add('verifedinput');
        textDangerAnotherCountry.innerHTML = "";

        return true;
    }
    return true;


}


// function validation of champ (Parent 2 Last name champ)
function OnValidatQuestionAnotherCountry() {
    const how_acquired = document.getElementById('how_acquired').value;
    var check1 = document.getElementById('rowInput13').classList.contains("display-block");

    if (check1 == true) {

        if (how_acquired.length == 0) {

            textDangerAnotherCountry.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Country of Citizenship champ is required';
            textDangerAnotherCountry.classList.add("runERRMSG");
            document.getElementById('how_acquired').classList.add("inputError");

            textDangerAnotherCountry.classList.remove("runSUCSSMSG");
            document.getElementById('how_acquired').classList.remove("inputValid");
            document.getElementById('how_acquired').classList.remove('verifedinput');

            return false;
        }

        document.getElementById('how_acquired').classList.add("inputValid");
        textDangerAnotherCountry.classList.add("runSUCSSMSG");
        document.getElementById('how_acquired').classList.add('verifedinput');
        textDangerAnotherCountry.innerHTML = "";

        return true;
    }

    return true;

}



// function validation of champ (CountryofCitizenship 2 champ)
function OnValidatCountryofCitizenship() {
    const country_other2 = document.getElementById('country_other2').value;
    var check1 = document.getElementById('rowInput16').classList.contains("display-block");

    if (check1 == true) {

        if (country_other2.length == 0) {

            textDangerCitizenship.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> First name champ is required';
            textDangerCitizenship.classList.add("runERRMSG");
            document.getElementById('country_other2').classList.add("inputError");

            textDangerCitizenship.classList.remove("runSUCSSMSG");
            document.getElementById('country_other2').classList.remove("inputValid");
            document.getElementById('country_other2').classList.remove('verifedinput');

            return false;
        }

        document.getElementById('country_other2').classList.add("inputValid");
        textDangerCitizenship.classList.add("runSUCSSMSG");
        document.getElementById('country_other2').classList.add('verifedinput');
        textDangerCitizenship.innerHTML = "";

        return true;
    }

    return true;

}

// function validation of champ (CountryofCitizenship 2 champ)
function OnValidatFrom4() {
    const country_other2_start = document.getElementById('country_other2_start').value;
    var check1 = document.getElementById('rowInput16').classList.contains("display-block");

    if (check1 == true) {

        if (country_other2_start.length == 0) {

            textDangerCountryOtherStart.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> First name champ is required';
            textDangerCountryOtherStart.classList.add("runERRMSG");
            document.getElementById('country_other2_start').classList.add("inputError");

            textDangerCountryOtherStart.classList.remove("runSUCSSMSG");
            document.getElementById('country_other2_start').classList.remove("inputValid");
            document.getElementById('country_other2_start').classList.remove('verifedinput');

            return false;
        }

        if (!country_other2_start.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

            textDangerCountryOtherStart.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
            textDangerCountryOtherStart.classList.add("runERRMSG");
            document.getElementById('country_other2_start').classList.add("inputError");

            textDangerCountryOtherStart.classList.remove("runSUCSSMSG");
            document.getElementById('country_other2_start').classList.remove("inputValid");
            document.getElementById('country_other2_start').classList.remove('verifedinput');

            return false;
        }

        document.getElementById('country_other2_start').classList.add("inputValid");
        textDangerCountryOtherStart.classList.add("runSUCSSMSG");
        document.getElementById('country_other2_start').classList.add('verifedinput');
        textDangerCountryOtherStart.innerHTML = "";

        return true;
    }

    return true;

}

// function validation of champ (CountryofCitizenship 2 champ)
function OnValidatTo4() {
    const country_other2_end = document.getElementById('country_other2_end').value;
    var check1 = document.getElementById('rowInput16').classList.contains("display-block");

    if (check1 == true) {

        if (country_other2_end.length == 0) {

            textDangerCountryOtherEnd.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> First name champ is required';
            textDangerCountryOtherEnd.classList.add("runERRMSG");
            document.getElementById('country_other2_end').classList.add("inputError");

            textDangerCountryOtherEnd.classList.remove("runSUCSSMSG");
            document.getElementById('country_other2_end').classList.remove("inputValid");
            document.getElementById('country_other2_end').classList.remove('verifedinput');

            return false;
        }

        if (!country_other2_end.match(/[^.*+--&é"'èù!:;=¨££µ%§_çà?^$<>{}()|//[\]@``#~€¤\\]/)) {

            textDangerCountryOtherEnd.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
            textDangerCountryOtherEnd.classList.add("runERRMSG");
            document.getElementById('country_other2_end').classList.add("inputError");

            textDangerCountryOtherEnd.classList.remove("runSUCSSMSG");
            document.getElementById('country_other2_end').classList.remove("inputValid");
            document.getElementById('country_other2_end').classList.remove('verifedinput');

            return false;
        }

        document.getElementById('country_other2_end').classList.add("inputValid");
        textDangerCountryOtherEnd.classList.add("runSUCSSMSG");
        document.getElementById('country_other2_end').classList.add('verifedinput');
        textDangerCountryOtherEnd.innerHTML = "";

        return true;

    }

    return true;
}


// function validation of champ (First champ)
function OnValidatNam() {
    const nom_urgence = document.getElementById('nom_urgence').value;


    if (nom_urgence.length == 0) {

        textDangerName.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Name is required';
        textDangerName.classList.add("runERRMSG");
        document.getElementById('nom_urgence').classList.add("inputError");

        textDangerName.classList.remove("runSUCSSMSG");
        document.getElementById('nom_urgence').classList.remove("inputValid");
        document.getElementById('nom_urgence').classList.remove('verifedinput');

        return false;
    }

    if (!nom_urgence.match(/[^.*+--&é"'èù!:;=¨£µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {

        textDangerName.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
        textDangerName.classList.add("runERRMSG");
        document.getElementById('nom_urgence').classList.add("inputError");

        textDangerName.classList.remove("runSUCSSMSG");
        document.getElementById('nom_urgence').classList.remove("inputValid");
        document.getElementById('nom_urgence').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('nom_urgence').classList.add("inputValid");
    textDangerName.classList.add("runSUCSSMSG");
    document.getElementById('nom_urgence').classList.add('verifedinput');
    textDangerName.innerHTML = "";

    return true;

}

// function validation of champ (First champ)
function OnValidatFirstName3() {
    const prenom_urg = document.getElementById('prenom_urg').value;

    if (prenom_urg.length == 0) {

        textDangerFirstName3.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> First Name is required';
        textDangerFirstName3.classList.add("runERRMSG");
        document.getElementById('prenom_urg').classList.add("inputError");

        textDangerFirstName3.classList.remove("runSUCSSMSG");
        document.getElementById('prenom_urg').classList.remove("inputValid");
        document.getElementById('prenom_urg').classList.remove('verifedinput');

        return false;
    }

    if (!prenom_urg.match(/[^.*+--&é"'èù!:;=¨£µ%§_çà?^$<>{}()|//[\]@``#~€¤\\[0-9]/)) {

        textDangerFirstName3.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
        textDangerFirstName3.classList.add("runERRMSG");
        document.getElementById('prenom_urg').classList.add("inputError");

        textDangerFirstName3.classList.remove("runSUCSSMSG");
        document.getElementById('prenom_urg').classList.remove("inputValid");
        document.getElementById('prenom_urg').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('prenom_urg').classList.add("inputValid");
    textDangerFirstName3.classList.add("runSUCSSMSG");
    document.getElementById('prenom_urg').classList.add('verifedinput');
    textDangerFirstName3.innerHTML = "";

    return true;

}

// function validation of champ (First champ)
function OnValidatTelephone() {
    const tel_urgence = document.getElementById('tel_urgence').value;

    if (tel_urgence.length == 0) {

        textDangerTelephone.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Phone Number is required';
        textDangerTelephone.classList.add("runERRMSG");
        document.getElementById('tel_urgence').classList.add("inputError");

        textDangerTelephone.classList.remove("runSUCSSMSG");
        document.getElementById('tel_urgence').classList.remove("inputValid");
        document.getElementById('tel_urgence').classList.remove('verifedinput');

        return false;
    }

    if (!tel_urgence.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)) {

        textDangerTelephone.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
        textDangerTelephone.classList.add("runERRMSG");
        document.getElementById('tel_urgence').classList.add("inputError");

        textDangerTelephone.classList.remove("runSUCSSMSG");
        document.getElementById('tel_urgence').classList.remove("inputValid");
        document.getElementById('tel_urgence').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('tel_urgence').classList.add("inputValid");
    textDangerTelephone.classList.add("runSUCSSMSG");
    document.getElementById('tel_urgence').classList.add('verifedinput');
    textDangerTelephone.innerHTML = "";

    return true;

}

// function validation of champ (First champ)
function OnValidatEmail2() {
    const email_urg = document.getElementById('email_urg').value;

    if (email_urg.length == 0) {

        textDangerEmail2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg>Email is required';
        textDangerEmail2.classList.add("runERRMSG");
        document.getElementById('email_urg').classList.add("inputError");

        textDangerEmail2.classList.remove("runSUCSSMSG");
        document.getElementById('email_urg').classList.remove("inputValid");
        document.getElementById('email_urg').classList.remove('verifedinput');

        return false;
    }

    if (!email_urg.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {

        textDangerEmail2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
        textDangerEmail2.classList.add("runERRMSG");
        document.getElementById('email_urg').classList.add("inputError");

        textDangerEmail2.classList.remove("runSUCSSMSG");
        document.getElementById('email_urg').classList.remove("inputValid");
        document.getElementById('email_urg').classList.remove('verifedinput');

        return false;
    }

    document.getElementById('email_urg').classList.add("inputValid");
    textDangerEmail2.classList.add("runSUCSSMSG");
    document.getElementById('email_urg').classList.add('verifedinput');
    textDangerEmail2.innerHTML = "";

    return true;

}

function termscheck() {
    if(document.getElementById('terms').checked){
        return true;
    }else{
        document.getElementById('text-danger-terms').innerHTML = "<span>Please checked for accept our general conditions of sale !</span>"
        return false;
    }
}






// validation step 1
function run() {
    if (document.getElementById('section-step1').style.display = 'block') {
        document.getElementById("section-step1").style.display = "none";
        document.getElementById("section-step2").style.display = "block";
    } else {
        document.getElementById("section-step1").style.display = "block";
        document.getElementById("section-step2").style.display = "none";
    }
}





// validation step 2
function run2() {
    if (OnValidatFamilyName() === true && OnValidatFirstName() === true && OnValidatGender() === true && OnValidatEmail() === true && OnValidatConfirmationEmail() === true && OnValidatDate() === true && OnValidatConfirmationDate() === true && OnValidatPlaceBirth() === true && OnValidatCountry() === true) {
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

// validation step 4
function run4() {
    if (OnValidatPassportNumber() === true && OnValidatConfirmationPassportNumber() === true && OnValidatDateDelivrance() === true && OnValidatDateExpiration() === true && OnValidatPaysEmission() === true && OnValidatNationalite() === true || OnValidatNumeroIdentite() === true) {
        document.getElementById("section-step4").style.display = "none";
        document.getElementById("section-step5").style.display = "block";
    } else {
        document.getElementById("section-step5").style.display = "none";
        document.getElementById("section-step4").style.display = "block";
    }
}

// function run5() {
//     if (OnValidatWhen() === true || OnValidatWhere() === true || OnValidatCountry3() === true || OnValidatFormInput() === true || OnValidatToInput() === true || OnValidatReason() === true || OnValidatFamilyname2() === true || OnValidatFirstname2() === true || OnValidatEmployeur() === true || OnValidatEmployeurAddress() === true || OnValidatCity2() === true || OnValidatCountry4() === true || OnValidatLastNameParent() === true || OnValidatFirstNameParent() === true || OnValidatLastNameParent2() === true || OnValidatFirstNameParent2() === true || OnValidatAnotherCountry() === true || OnValidatQuestionAnotherCountry() === true || OnValidatCountryofCitizenship() === true || OnValidatFrom4() === true || OnValidatTo4() === true || OnValidatNam() === true || OnValidatFirstName3() === true || OnValidatTelephone() === true || OnValidatEmail2() === true || OnValidatNam() === true || termscheck() === true) {
//         document.getElementById("section-step5").style.display = "none";
//         document.getElementById("section-step6").style.display = "block";
//     } else {
//         document.getElementById("section-step6").style.display = "none";
//         document.getElementById("section-step5").style.display = "block";
//     }
// }

function run5() {
    if (OnValidatWhen() === true && OnValidatWhere() === true && OnValidatCountry3() === true && OnValidatFormInput() === true && OnValidatToInput() === true && OnValidatReason() === true && OnValidatFamilyname2() === true && OnValidatFirstname2() === true && OnValidatEmployeur() === true && OnValidatCity2() === true && OnValidatEmployeurAddress() === true && OnValidatCountry4() === true && OnValidatLastNameParent() === true && OnValidatFirstNameParent() === true && OnValidatLastNameParent2() === true && OnValidatFirstNameParent2() === true && OnValidatAnotherCountry() === true && OnValidatQuestionAnotherCountry() === true && OnValidatCountryofCitizenship() === true && OnValidatFrom4() === true && OnValidatTo4() === true && OnValidatNam() === true && OnValidatFirstName3() === true && OnValidatTelephone() === true && OnValidatEmail2() === true) {
        document.getElementById("section-step5").style.display = "none";
        document.getElementById("section-step6").style.display = "block";
    } else {
        document.getElementById("section-step6").style.display = "none";
        document.getElementById("section-step5").style.display = "block";
    }


    //validation application review

    if (document.querySelector('input[name=questionusa7]:checked').value === "NO") {
        document.getElementById('questionNoneWhen').style.display = "none";
        document.getElementById('questionNoneWhere').style.display = "none";
    }else{
        document.getElementById('questionNoneWhen').style.display = "block";
        document.getElementById('questionNoneWhere').style.display = "block";
    }
    
    if (document.querySelector('input[name=questionusa9]:checked').value === "NO") {
        document.getElementById('questionNoneQ_country').style.display = "none"; 
        document.getElementById('questionNoneQ_from').style.display = "none";                   
        document.getElementById('questionNoneQ_to').style.display = "none";
        document.getElementById('questionNoneQ_reason').style.display = "none";
    }else{
        document.getElementById('questionNoneQ_country').style.display = "block";
        document.getElementById('questionNoneQ_from').style.display = "block";
        document.getElementById('questionNoneQ_to').style.display = "block";
        document.getElementById('questionNoneQ_reason').style.display = "block";
    }
}


// previous step 
function prevStep() {
    document.getElementById("section-step2").style.display = "none";
    document.getElementById("section-step1").style.display = "block";
}

// previous step 2
function prevStep2() {
    document.getElementById("section-step3").style.display = "none";
    document.getElementById("section-step2").style.display = "block";
}

// previous step 3
function prevStep3() {
    document.getElementById("section-step4").style.display = "none";
    document.getElementById("section-step3").style.display = "block";
}


// previous step 4
function prevStep4() {
    document.getElementById("section-step5").style.display = "none";
    document.getElementById("section-step4").style.display = "block";
}

// previous step 4
function prevStep5() {
    document.getElementById("section-step6").style.display = "none";
    document.getElementById("section-step5").style.display = "block";
}