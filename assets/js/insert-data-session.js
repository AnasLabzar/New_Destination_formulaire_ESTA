

document.getElementById('next3').addEventListener('click', () => {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const sexe = document.getElementById('sexe').value;
    const email = document.getElementById('email').value;
    const date_naiss = document.getElementById('date_naiss').value;
    const vill_naiss = document.getElementById('vill_naiss').value;
    const pays_naiss = document.getElementById('pays_naiss').value;
    const adresseligne1 = document.getElementById('adresseligne1').value;
    const cp = document.getElementById('cp').value;
    const ville = document.getElementById('ville').value;
    const pays = document.getElementById('pays').value;
    const tel_portabl = document.getElementById('tel_portabl').value;
    const tel_fix = document.getElementById('tel_fix').value;
    const date_arriv = document.getElementById('date_arriv').value;
    const num_pass = document.getElementById('num_pass').value;
    const date_delivrance = document.getElementById('date_delivrance').value;
    const date_exp = document.getElementById('date_exp').value;
    const pays_emission = document.getElementById('pays_emission').value;
    const nationalite = document.getElementById('nationalite').value;
    const numero_identite = document.getElementById('numero_identite').value;
    const q1 = document.querySelector('input[name=q1]:checked').value;
    const questionusa2 = document.querySelector('input[name=questionusa2]:checked').value;
    const questionusa3 = document.querySelector('input[name=questionusa3]:checked').value;
    const questionusa4 = document.querySelector('input[name=questionusa4]:checked').value;
    const questionusa5 = document.querySelector('input[name=questionusa5]:checked').value;
    const questionusa6 = document.querySelector('input[name=questionusa6]:checked').value;
    const questionusa7 = document.querySelector('input[name=questionusa7]:checked').value;
    const whenrefususa = document.getElementById('whenrefususa').value;
    const whererefususa = document.getElementById('whererefususa').value;
    const questionusa8 = document.querySelector('input[name=questionusa8]:checked').value;
    const questionusa9 = document.querySelector('input[name=questionusa9]:checked').value;
    const q_country = document.getElementById('q_country').value;
    const q_from = document.getElementById('q_from').value;
    const q_to = document.getElementById('q_to').value;
    const q_reason = document.getElementById('q_reason').value;
    const comp_q = document.getElementById('comp_q').value;
    const comp_q2 = document.getElementById('comp_q2').value;
    const comp_q3 = document.getElementById('comp_q3').value;
    const un_stat = document.getElementById('un_stat').value;
    const position_q = document.getElementById('position_q').value;
    const position_q2 = document.getElementById('position_q2').value;
    const position_q3 = document.getElementById('position_q3').value;
    const i_document = document.getElementById('i_document').value;
    const cont_q = document.getElementById('cont_q').value;
    const cont_q2 = document.getElementById('cont_q2').value;
    const document_iran = document.getElementById('document_iran').value;
    const all_comp = document.getElementById('all_comp').value;
    const human_document = document.getElementById('human_document').value;
    const us_fund = document.getElementById('us_fund').value;
    const hum_work = document.getElementById('hum_work').value;
    const autre_alias = document.querySelector('input[name=autre_alias]:checked').value;
    const familyname_alias = document.getElementById('familyname_alias').value;
    const firstname_alias = document.getElementById('firstname_alias').value;
    const firstitem = document.getElementById('first-item').value;
    const emploi = document.getElementsByName('emploi').value;
    const employeur = document.getElementById('employeur').value;
    const ville_empl = document.getElementById('ville_empl').value;
    const address_empl = document.getElementById('address_empl').value;
    const pays_empl = document.getElementById('pays_empl').value;
    const parent1_nom = document.getElementById('parent1_nom').value;
    const parent1_prenom = document.getElementById('parent1_prenom').value;
    const parent2_nom = document.getElementById('parent2_nom').value;
    const parent2_prenom = document.getElementById('parent2_prenom').value;
    const other_citizenship = document.querySelector('input[name=other_citizenship]:checked').value;
    const another_country = document.getElementById('another_country').value;
    const how_acquired = document.getElementById('how_acquired').value;
    const other_how_acquired = document.getElementById('other_how_acquired').value;
    const Document_question = document.querySelector('input[name=Document_question]:checked').value;
    // const NDOCU = document.getElementById('NDOCU').value;
    // const type_doc = document.getElementById('type_doc').value;
    // const pays_doc = document.getElementById('pays_doc').value;
    // const date_doc = document.getElementById('date_doc').value;
    // const been_other_citizen = document.getElementById('been_other_citizen').value;
    const country_other2 = document.getElementById('country_other2').value;
    const country_other2_start = document.getElementById('country_other2_start').value;
    const country_other2_end = document.getElementById('country_other2_end').value;
    const nom_urgence = document.getElementById('nom_urgence').value;
    const prenom_urg = document.getElementById('prenom_urg').value;
    const tel_urgence = document.getElementById('tel_urgence').value;
    const email_urg = document.getElementById('email_urg').value;
    const transit_question = document.querySelector('input[name=transit_question]:checked').value;






    sessionStorage.setItem("nom", nom);
    sessionStorage.setItem("prenom", prenom);
    sessionStorage.setItem("sexe", sexe);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("date_naiss", date_naiss);
    sessionStorage.setItem("vill_naiss", vill_naiss);
    sessionStorage.setItem("pays_naiss", pays_naiss);
    sessionStorage.setItem("adresseligne1", adresseligne1);
    sessionStorage.setItem("cp", cp);
    sessionStorage.setItem("ville", ville);
    sessionStorage.setItem("pays", pays);
    sessionStorage.setItem("tel_portabl", tel_portabl);
    sessionStorage.setItem("tel_fix", tel_fix);
    sessionStorage.setItem("date_arriv", date_arriv);
    sessionStorage.setItem("num_pass", num_pass);
    sessionStorage.setItem("date_delivrance", date_delivrance);
    sessionStorage.setItem("date_exp", date_exp);
    sessionStorage.setItem("pays_emission", pays_emission);
    sessionStorage.setItem("nationalite", nationalite);
    sessionStorage.setItem("numero_identite", numero_identite);
    sessionStorage.setItem("q1", q1);
    sessionStorage.setItem("questionusa2", questionusa2);
    sessionStorage.setItem("questionusa3", questionusa3);
    sessionStorage.setItem("questionusa4", questionusa4);
    sessionStorage.setItem("questionusa5", questionusa5);
    sessionStorage.setItem("questionusa6", questionusa6);
    sessionStorage.setItem("questionusa7", questionusa7);
    sessionStorage.setItem("whenrefususa", whenrefususa);
    sessionStorage.setItem("whererefususa", whererefususa);
    sessionStorage.setItem("questionusa8", questionusa8);
    sessionStorage.setItem("questionusa9", questionusa9);
    sessionStorage.setItem("q_country", q_country);
    sessionStorage.setItem("q_from", q_from);
    sessionStorage.setItem("q_to", q_to);
    sessionStorage.setItem("q_reason", q_reason);
    sessionStorage.setItem("comp_q", comp_q);
    sessionStorage.setItem("comp_q2", comp_q2);
    sessionStorage.setItem("comp_q3", comp_q3);
    sessionStorage.setItem("un_stat", un_stat);
    sessionStorage.setItem("position_q", position_q);
    sessionStorage.setItem("position_q2", position_q2);
    sessionStorage.setItem("position_q3", position_q3);
    sessionStorage.setItem("i_document", i_document);
    sessionStorage.setItem("cont_q", cont_q);
    sessionStorage.setItem("cont_q2", cont_q2);
    sessionStorage.setItem("document_iran", document_iran);
    sessionStorage.setItem("all_comp", all_comp);
    sessionStorage.setItem("human_document", human_document);
    sessionStorage.setItem("us_fund", us_fund);
    sessionStorage.setItem("hum_work", hum_work);
    sessionStorage.setItem("autre_alias", autre_alias);
    sessionStorage.setItem("familyname_alias", familyname_alias);
    sessionStorage.setItem("firstname_alias", firstname_alias);
    sessionStorage.setItem("firstitem", firstitem);
    sessionStorage.setItem("emploi", emploi);
    sessionStorage.setItem("employeur", employeur);
    sessionStorage.setItem("ville_empl", ville_empl);
    sessionStorage.setItem("address_empl", address_empl);
    sessionStorage.setItem("pays_empl", pays_empl);
    sessionStorage.setItem("parent1_nom", parent1_nom);
    sessionStorage.setItem("parent1_prenom", parent1_prenom);
    sessionStorage.setItem("parent2_nom", parent2_nom);
    sessionStorage.setItem("parent2_prenom", parent2_prenom);
    sessionStorage.setItem("other_citizenship", other_citizenship);
    sessionStorage.setItem("another_country", another_country);
    sessionStorage.setItem("how_acquired", how_acquired);
    sessionStorage.setItem("other_how_acquired", other_how_acquired);
    sessionStorage.setItem("Document_question", Document_question);
    sessionStorage.setItem("NDOCU", NDOCU);
    sessionStorage.setItem("type_doc", type_doc);
    sessionStorage.setItem("pays_doc", pays_doc);
    sessionStorage.setItem("date_doc", date_doc);
    // sessionStorage.setItem("been_other_citizen", been_other_citizen);
    sessionStorage.setItem("country_other2", country_other2);
    sessionStorage.setItem("country_other2_start", country_other2_start);
    sessionStorage.setItem("country_other2_end", country_other2_end);
    sessionStorage.setItem("nom_urgence", nom_urgence);
    sessionStorage.setItem("prenom_urg", prenom_urg);
    sessionStorage.setItem("tel_urgence", tel_urgence);
    sessionStorage.setItem("email_urg", email_urg);
    sessionStorage.setItem("date_arriv", date_arriv);
    sessionStorage.setItem("transit_question", transit_question);






    let Getnom = sessionStorage.getItem("nom");
    let Getprenom = sessionStorage.getItem("prenom");
    let Getsexe = sessionStorage.getItem("sexe");
    let GetEmail = sessionStorage.getItem("email");
    let Getdate_naiss = sessionStorage.getItem("date_naiss");
    let Getvill_naiss = sessionStorage.getItem("vill_naiss");
    let Getpays_naiss = sessionStorage.getItem("pays_naiss");
    let Getadresseligne1 = sessionStorage.getItem("adresseligne1");
    let Getcp = sessionStorage.getItem("cp");
    let Getville = sessionStorage.getItem("ville");
    let Getpays = sessionStorage.getItem("pays");
    let Gettel_portabl = sessionStorage.getItem("tel_portabl");
    let Gettel_fix = sessionStorage.getItem("tel_fix");
    let Getdate_arriv = sessionStorage.getItem("date_arriv");
    let Getnum_pass = sessionStorage.getItem("num_pass");
    let Getdate_delivrance = sessionStorage.getItem("date_delivrance");
    let Getdate_exp = sessionStorage.getItem("date_exp");
    let Getpays_emission = sessionStorage.getItem("pays_emission");
    let Getnationalite = sessionStorage.getItem("nationalite");
    let Getnumero_identite = sessionStorage.getItem("numero_identite");
    let Getq1 = sessionStorage.getItem("q1");
    let Getquestionusa2 = sessionStorage.getItem("questionusa2");
    let Getquestionusa3 = sessionStorage.getItem("questionusa3");
    let Getquestionusa4 = sessionStorage.getItem("questionusa4");
    let Getquestionusa5 = sessionStorage.getItem("questionusa5");
    let Getquestionusa6 = sessionStorage.getItem("questionusa6");
    let Getquestionusa7 = sessionStorage.getItem("questionusa7");
    let Getwhenrefususa = sessionStorage.getItem("whenrefususa");
    let Getwhererefususa = sessionStorage.getItem("whererefususa");
    let Getquestionusa8 = sessionStorage.getItem("questionusa8");
    let Getquestionusa9 = sessionStorage.getItem("questionusa9");
    let Getq_country = sessionStorage.getItem("q_country");
    let Getq_from = sessionStorage.getItem("q_from");
    let Getq_to = sessionStorage.getItem("q_to");
    let Getq_reason = sessionStorage.getItem("q_reason");
    let Getcomp_q = sessionStorage.getItem("comp_q");
    let Getcomp_q2 = sessionStorage.getItem("comp_q2");
    let Getcomp_q3 = sessionStorage.getItem("comp_q3");
    let Getun_stat = sessionStorage.getItem("un_stat");
    let Getposition_q = sessionStorage.getItem("position_q");
    let Getposition_q2 = sessionStorage.getItem("position_q2");
    let Getposition_q3 = sessionStorage.getItem("position_q3");
    let Geti_document = sessionStorage.getItem("i_document");
    let Getcont_q = sessionStorage.getItem("cont_q");
    let Getcont_q2 = sessionStorage.getItem("cont_q2");
    let Getdocument_iran = sessionStorage.getItem("document_iran");
    let Getall_comp = sessionStorage.getItem("all_comp");
    let Gethuman_document = sessionStorage.getItem("human_document");
    let Getus_fund = sessionStorage.getItem("us_fund");
    let Gethum_work = sessionStorage.getItem("hum_work");
    let Getautre_alias = sessionStorage.getItem("autre_alias");
    let Getfamilyname_alias = sessionStorage.getItem("familyname_alias");
    let Getfirstname_alias = sessionStorage.getItem("firstname_alias");
    let Getfirstitem = sessionStorage.getItem("firstitem");
    let Getemploi = sessionStorage.getItem("emploi");
    let Getemployeur = sessionStorage.getItem("employeur");
    let Getville_empl = sessionStorage.getItem("ville_empl");
    let Getaddress_empl = sessionStorage.getItem("address_empl");
    let Getpays_empl = sessionStorage.getItem("pays_empl");
    let Getparent1_nom = sessionStorage.getItem("parent1_nom");
    let Getparent1_prenom = sessionStorage.getItem("parent1_prenom");
    let Getparent2_nom = sessionStorage.getItem("parent2_nom");
    let Getparent2_prenom = sessionStorage.getItem("parent2_prenom");
    let Getother_citizenship = sessionStorage.getItem("other_citizenship");
    let Getanother_country = sessionStorage.getItem("another_country");
    let Gethow_acquired = sessionStorage.getItem("how_acquired");
    let Getother_how_acquired = sessionStorage.getItem("other_how_acquired");
    let GetDocument_question = sessionStorage.getItem("Document_question");
    let GetNDOCU = sessionStorage.getItem("NDOCU");
    let Gettype_doc = sessionStorage.getItem("type_doc");
    let Getpays_doc = sessionStorage.getItem("pays_doc");
    let Getdate_doc = sessionStorage.getItem("date_doc");
    // let Getbeen_other_citizen = sessionStorage.getItem("been_other_citizen");
    let Getcountry_other2 = sessionStorage.getItem("country_other2");
    let Getcountry_other2_start = sessionStorage.getItem("country_other2_start");
    let Getcountry_other2_end = sessionStorage.getItem("country_other2_end");
    let Getnom_urgence = sessionStorage.getItem("nom_urgence");
    let Getprenom_urg = sessionStorage.getItem("prenom_urg");
    let Gettel_urgence = sessionStorage.getItem("tel_urgence");
    let Getemail_urg = sessionStorage.getItem("email_urg");
    let Gettransit_question = sessionStorage.getItem("transit_question");




    document.getElementById("getNom").innerHTML = Getnom;
    document.getElementById("getPrenom").innerHTML = Getprenom;
    document.getElementById("getSexe").innerHTML = Getsexe;
    document.getElementById("getEmail").innerHTML = GetEmail;
    document.getElementById("getDate_naiss").innerHTML = Getdate_naiss;
    document.getElementById("getVill_naiss").innerHTML = Getvill_naiss;
    document.getElementById("getPays_naiss").innerHTML = Getpays_naiss;
    document.getElementById("getAdresseLine1").innerHTML = Getadresseligne1;
    document.getElementById("getCp").innerHTML = Getcp;
    document.getElementById("getVille").innerHTML = Getville;
    document.getElementById("getPays").innerHTML = Getpays;
    document.getElementById("getTel_portabl").innerHTML = Gettel_portabl;
    document.getElementById("getTel_fix").innerHTML = Gettel_fix;
    document.getElementById("getNum_pass").innerHTML = Getnum_pass;
    document.getElementById("getDate_delivrance").innerHTML = Getdate_delivrance;
    document.getElementById("getDate_exp").innerHTML = Getdate_exp;
    document.getElementById("getPays_emission").innerHTML = Getpays_emission;
    document.getElementById("getNationalite").innerHTML = Getnationalite;
    document.getElementById("getNumero_identite").innerHTML = Getnumero_identite;
    document.getElementById("getq1").innerHTML = Getq1;
    document.getElementById("getquestionusa2").innerHTML = Getquestionusa2;
    document.getElementById("getquestionusa3").innerHTML = Getquestionusa3;
    document.getElementById("getquestionusa4").innerHTML = Getquestionusa4;
    document.getElementById("getquestionusa5").innerHTML = Getquestionusa5;
    document.getElementById("getquestionusa6").innerHTML = Getquestionusa6;
    document.getElementById("getquestionusa7").innerHTML = Getquestionusa7;
    document.getElementById("getwhenrefususa").innerHTML = Getwhenrefususa;
    document.getElementById("getwhererefususa").innerHTML = Getwhererefususa;
    document.getElementById("getquestionusa8").innerHTML = Getquestionusa8;
    document.getElementById("getquestionusa9").innerHTML = Getquestionusa9;
    document.getElementById("getq_country").innerHTML = Getq_country;
    document.getElementById("getq_from").innerHTML = Getq_from;
    document.getElementById("getq_to").innerHTML = Getq_to;
    document.getElementById("getq_reason").innerHTML = Getq_reason;
    document.getElementById("getcomp_q").innerHTML = Getcomp_q;
    // document.getElementById("getNom").innerHTML = Getcomp_q2;************
    // document.getElementById("getNom").innerHTML = Getcomp_q3;************
    document.getElementById("getun_stat").innerHTML = Getun_stat;
    document.getElementById("getposition_q").innerHTML = Getposition_q;
    // document.getElementById("getNom").innerHTML = Getposition_q2;**********
    // document.getElementById("getNom").innerHTML = Getposition_q3;**********
    document.getElementById("geti_document").innerHTML = Geti_document;
    document.getElementById("getcont_q").innerHTML = Getcont_q;
    // document.getElementById("getNom").innerHTML = Getcont_q2;**************
    document.getElementById("getdocument_iran").innerHTML = Getdocument_iran;
    document.getElementById("getall_comp").innerHTML = Getall_comp;
    document.getElementById("gethuman_document").innerHTML = Gethuman_document;
    document.getElementById("getus_fund").innerHTML = Getus_fund;
    document.getElementById("gethum_work").innerHTML = Gethum_work;
    document.getElementById("getautre_alias").innerHTML = Getautre_alias;
    document.getElementById("getfamilyname_alias").innerHTML = Getfamilyname_alias;
    document.getElementById("getfirstname_alias").innerHTML = Getfirstname_alias;
    document.getElementById("getNom").innerHTML = Getfirstitem;
    document.getElementById("getemploi").innerHTML = Getemploi;
    document.getElementById("getemployeur").innerHTML = Getemployeur;
    document.getElementById("getville_empl").innerHTML = Getville_empl;
    document.getElementById("getaddress_empl").innerHTML = Getaddress_empl;
    document.getElementById("getpays_empl").innerHTML = Getpays_empl;
    document.getElementById("getparent1_nom").innerHTML = Getparent1_nom;
    document.getElementById("getparent1_prenom").innerHTML = Getparent1_prenom;
    document.getElementById("getparent2_nom").innerHTML = Getparent2_nom;
    document.getElementById("parent2_prenom").innerHTML = Getparent2_prenom;
    document.getElementById("getother_citizenship").innerHTML = Getother_citizenship;
    document.getElementById("getanother_country").innerHTML = Getanother_country;
    document.getElementById("gethow_acquired").innerHTML = Gethow_acquired;
    document.getElementById("getNom").innerHTML = Getother_how_acquired;
    document.getElementById("getDocument_question").innerHTML = GetDocument_question;
    // document.getElementById("getNDOCU").innerHTML = GetNDOCU;
    // document.getElementById("gettype_doc").innerHTML = Gettype_doc;
    // document.getElementById("getpays_doc").innerHTML = Getpays_doc;
    // document.getElementById("getdate_doc").innerHTML = Getdate_doc;
    // document.getElementById("getbeen_other_citizen").innerHTML = Getbeen_other_citizen;
    document.getElementById("getcountry_other2").innerHTML = Getcountry_other2;
    document.getElementById("getcountry_other2_start").innerHTML = Getcountry_other2_start;
    document.getElementById("getcountry_other2_end").innerHTML = Getcountry_other2_end;
    document.getElementById("getnom_urgence").innerHTML = Getnom_urgence;
    document.getElementById("getprenom_urg").innerHTML = Getprenom_urg;
    document.getElementById("gettel_urgence").innerHTML = Gettel_urgence;
    document.getElementById("getemail_urg").innerHTML = Getemail_urg;
    document.getElementById("getdate_arriv").innerHTML = Getdate_arriv;
    document.getElementById("gettransit_question").innerHTML = Gettransit_question;


    console.log(
        Getnom, 
        Getprenom, 
        Getsexe, 
        Getdate_naiss, 
        Getvill_naiss, 
        Getpays_naiss,
        Getadresseligne1,
        Getcp, 
        Getville, 
        Getpays, 
        Gettel_portabl, 
        Gettel_fix, 
        Getdate_arriv, 
        Getnum_pass,  
        Getdate_delivrance, 
        Getdate_exp, 
        Getpays_emission, 
        Getnationalite, 
        Getnumero_identite, 
        Getq1,
        Getquestionusa2,
        Getquestionusa3,
        Getquestionusa4,
        Getquestionusa5,
        Getquestionusa6,
        Getquestionusa7,
        Getwhenrefususa,
        Getwhererefususa,
        Getquestionusa8,
        Getquestionusa9,
        Getq_country,
        Getq_from,
        Getq_to,
        Getq_reason,
        Getcomp_q,
        Getcomp_q2,
        Getcomp_q3,
        Getun_stat,
        Getposition_q,
        Getposition_q2,
        Getposition_q3,
        Geti_document,
        Getcont_q,
        Getcont_q2,
        Getdocument_iran,
        Getall_comp
    );
})