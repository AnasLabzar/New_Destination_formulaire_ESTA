// *************** First Button **************
const firstItem = document.getElementById('first-item');

function addAnotherInput() {
    var a = document.createElement("div");
    a.setAttribute("class", "row other-name-item sencond-item");
    a.setAttribute("id", "miniFirst-item");
    a.setAttribute("style", "gap: 2em; float: left; width: 100%;");
    firstItem.appendChild(a);

    var b = document.createElement("div");
    b.setAttribute("class", "form-group col-md-4");
    a.appendChild(b);

    var c = document.createElement("div");
    c.setAttribute("class", "tooltipp");
    b.appendChild(c);

    var d = document.createElement("i");
    d.setAttribute("class", "fas fa-question-circle hlp");
    c.appendChild(d);

    var e = document.createElement("span");
    e.setAttribute("class", "tooltiptext");
    e.innerHTML = "Family Name ";
    c.appendChild(e);

    var f = document.createElement("label");
    f.setAttribute("class", "control-label");
    f.innerHTML = "Family Name ";
    b.appendChild(f);

    var h = document.createElement("input");
    h.setAttribute("type", "text");
    h.setAttribute("class", "form-control familyname_alias");
    h.setAttribute("autocomplete", "nope");
    h.setAttribute("id", "familyname_alias");
    h.setAttribute("name", "familyname_alias[]");
    h.setAttribute("onkeyup", "OnValidatFamilyname2()");
    h.setAttribute("placeholder", "");
    h.setAttribute("data-bind", "value: familyname_alias");
    h.setAttribute("data-val", "true");
    h.setAttribute("required", "required");
    h.innerHTML = "Family Name ";
    b.appendChild(h);

    var i = document.createElement("span");
    i.setAttribute("class", "text-danger field-validation-valid");
    i.setAttribute("id", "text-danger-familyname2");
    i.setAttribute("data-valmsg-for", "familyname_alias");
    i.setAttribute("data-valmsg-replace", "true");
    b.appendChild(i);


    var a1 = document.createElement("div");
    a1.setAttribute("class", "form-group col-md-4");
    a.appendChild(a1);

    var b1 = document.createElement("div");
    b1.setAttribute("class", "tooltipp");
    a1.appendChild(b1);

    var c1 = document.createElement("i");
    c1.setAttribute("class", "fas fa-question-circle hlp");
    b1.appendChild(c1);

    var d1 = document.createElement("span");
    d1.setAttribute("class", "tooltiptext");
    d1.innerHTML = "First (Given) Name"
    b1.appendChild(d1);

    var e1 = document.createElement("label");
    e1.setAttribute("class", "control-label");
    e1.innerHTML = "First (Given) Name <span>*</span>"
    a1.appendChild(e1);

    var f1 = document.createElement("input");
    f1.setAttribute("class", "form-control firstname_alias");
    f1.setAttribute("type", "text");
    f1.setAttribute("autocomplete", "nope");
    f1.setAttribute("id", "firstname_alias");
    f1.setAttribute("name", "firstname_alias[]");
    f1.setAttribute("data-bind", "value: firstname_alias");
    f1.setAttribute("data-val", "true");
    f1.setAttribute("required", "required");
    f1.innerHTML = "First (Given) Name <span>*</span>"
    a1.appendChild(f1);

    var g1 = document.createElement("span");
    g1.setAttribute("class", "text-danger field-validation-valid");
    g1.setAttribute("data-valmsg-for", "firstname_alias");
    g1.setAttribute("data-valmsg-replace", "true");
    a1.appendChild(g1);


    var a2 = document.createElement("div");
    a2.setAttribute("class", "form-group col-md-2");
    a.appendChild(a2);

    var b2 = document.createElement("button");
    b2.setAttribute("type", "button");
    b2.setAttribute("id", "buttonDelete");
    b2.setAttribute("style", "border: none; color: #ff0000; font-family: 'Roboto', sans-serif !important; background: none; font-size: 15px; font-weight: 600; padding-top: 33px;");
    b2.setAttribute("onclick", "remove_other_name_item()");
    a2.appendChild(b2);

    var c2 = document.createElement("i");
    c2.setAttribute("class", "fas fa-minus-circle");
    b2.innerHTML = "DELETE";
    b2.appendChild(c2);
}

function remove_other_name_item() {
    var element = document.getElementById("miniFirst-item");
    element.parentNode.removeChild(element);
}






// *************** Second Button **************
const secondItem = document.getElementById('second-item');

function addAnotherInput1() {
    var a = document.createElement("div");
    a.setAttribute("class", "row other-citizenship-item first-item");
    a.setAttribute("id", "miniSecond-item");
    a.setAttribute("style", "gap: 2em; float: left; width: 100%;");
    secondItem.appendChild(a);

    var b = document.createElement("div");
    b.setAttribute("class", "form-group col-md-3");
    a.appendChild(b);

    var c = document.createElement("div");
    c.setAttribute("class", "tooltipp");
    b.appendChild(c);

    var d = document.createElement("i");
    d.setAttribute("class", "fas fa-question-circle hlp");
    c.appendChild(d);

    var e = document.createElement("span");
    e.setAttribute("class", "tooltiptext");
    e.innerHTML = "Country of Citizenship";
    c.appendChild(e);

    var f = document.createElement("label");
    f.setAttribute("class", "control-label");
    f.innerHTML = "Country of Citizenship";
    b.appendChild(f);

    var g = document.createElement("span");
    g.innerHTML = "*";
    f.appendChild(g);

    var h = document.createElement("select");
    h.setAttribute("class", "form-control another_country");
    h.setAttribute("name", "another_country[]");
    h.setAttribute("id", "another_country");
    h.setAttribute("placeholder", "Country of Citizenship");
    h.setAttribute("data-bind", "value: another_country");
    h.setAttribute("data-val", "true");
    h.setAttribute("required", "required");
    h.innerHTML = '<option value=""></option> <option value="Afghanistan">Afghanistan</option> <option value="Albania">Albania</option> <option value="Algeria">Algeria</option> <option value="Andorra">Andorra</option> <option value="Angola">Angola</option> <option value="Antigua and Barbuda">Antigua and Barbuda</option> <option value="Argentina">Argentina</option> <option value="Armenia">Armenia</option> <option value="Australia">Australia</option> <option value="Austria">Austria</option> <option value="Azerbaijan">Azerbaijan</option> <option value="Bahamas">Bahamas</option> <option value="Bahrain">Bahrain</option> <option value="Bangladesh">Bangladesh</option> <option value="Barbados">Barbados</option> <option value="Belarus">Belarus</option> <option value="Belgium">Belgium</option> <option value="Belize">Belize</option> <option value="Benign">Benign</option> <option value="Bhutan">Bhutan</option> <option value="Bolivia">Bolivia</option> <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> <option value="Botswana">Botswana</option> <option value="Brazil">Brazil</option> <option value="Brunei">Brunei</option> <option value="Bulgaria">Bulgaria</option> <option value="Burkina Faso">Burkina Faso</option> <option value="Burma">Burma</option> <option value="Burundi">Burundi</option> <option value="Cambodia">Cambodia</option> <option value="Cameroon">Cameroon</option> <option value="Canada">Canada</option> <option value="Central African Republic">Central African Republic</option> <option value="Chad">Chad</option> <option value="Chile">Chile</option> <option value="China">China</option> <option value="Colombia">Colombia</option> <option value="Comoros">Comoros</option> <option value="Congo">Congo</option> <option value="Costa Rica">Costa Rica</option> <option value="Croatia">Croatia</option> <option value="Cuba">Cuba</option> <option value="Cyprus">Cyprus</option> <option value="Czech republic">Czech republic</option> <option value="Democratic Republic of Congo">Democratic Republic of Congo</option> <option value="Denmark">Denmark</option> <option value="Djibouti">Djibouti</option> <option value="Dominica">Dominica</option> <option value="Dominican Republic">Dominican Republic</option> <option value="East Timor">East Timor</option> <option value="Ecuador">Ecuador</option> <option value="Egypt">Egypt</option> <option value="Equatorial Guinea">Equatorial Guinea</option> <option value="Eritrea">Eritrea</option> <option value="Estonia">Estonia</option> <option value="Ethiopia">Ethiopia</option> <option value="Fiji">Fiji</option> <option value="Finland">Finland</option> <option value="France">France</option> <option value="Gabon">Gabon</option> <option value="Gambia">Gambia</option> <option value="Georgia">Georgia</option> <option value="Germany">Germany</option> <option value="Ghana">Ghana</option> <option value="Greece">Greece</option> <option value="Green cap">Green cap</option> <option value="Grenade">Grenade</option> <option value="Guatemala">Guatemala</option> <option value="Guinea">Guinea</option> <option value="Guinea-Bissau">Guinea-Bissau</option> <option value="Guyana">Guyana</option> <option value="Haiti">Haiti</option> <option value="Honduras">Honduras</option> <option value="Hong Kong">Hong Kong</option> <option value="Hungary">Hungary</option> <option value="Iceland">Iceland</option> <option value="India">India</option> <option value="Indonesia">Indonesia</option> <option value="Iran">Iran</option> <option value="Iraq">Iraq</option> <option value="Ireland">Ireland</option> <option value="Israel">Israel</option> <option value="Italy">Italy</option> <option value="Ivory Coast">Ivory Coast</option> <option value="Jamaica">Jamaica</option> <option value="Japan">Japan</option> <option value="Jordan">Jordan</option> <option value="Kazakhstan">Kazakhstan</option> <option value="Kenya">Kenya</option> <option value="Kiribati">Kiribati</option> <option value="Kosovo">Kosovo</option> <option value="Kuwait">Kuwait</option> <option value="Kyrgyzstan">Kyrgyzstan</option> <option value="Laos">Laos</option> <option value="Latvia">Latvia</option> <option value="Lebanon">Lebanon</option> <option value="Lesotho">Lesotho</option> <option value="Liberia">Liberia</option> <option value="Libya">Libya</option> <option value="Liechtenstein">Liechtenstein</option> <option value="Lithuania">Lithuania</option> <option value="Luxembourg">Luxembourg</option> <option value="Macedonia">Macedonia</option> <option value="Madagascar">Madagascar</option> <option value="Malawi">Malawi</option> <option value="Malaysia">Malaysia</option> <option value="Maldives">Maldives</option> <option value="Mali">Mali</option> <option value="Malta">Malta</option> <option value="Marshall">Marshall</option> <option value="Mauritania">Mauritania</option> <option value="Mauritius">Mauritius</option> <option value="Mexico">Mexico</option> <option value="Micronesia">Micronesia</option> <option value="Moldova">Moldova</option> <option value="Monaco">Monaco</option> <option value="Mongolia">Mongolia</option> <option value="Montenegro">Montenegro</option> <option value="Morocco">Morocco</option> <option value="Mozambique">Mozambique</option> <option value="Namibia">Namibia</option> <option value="Nauru">Nauru</option> <option value="Nepal">Nepal</option> <option value="Netherlands">Netherlands</option> <option value="New Zealand">New Zealand</option> <option value="Nicaragua">Nicaragua</option> <option value="Niger">Niger</option> <option value="Nigeria">Nigeria</option> <option value="North Korea">North Korea</option> <option value="Norway">Norway</option> <option value="Oman">Oman</option> <option value="Pakistan">Pakistan</option> <option value="Palau">Palau</option> <option value="Palestine">Palestine</option> <option value="Panama">Panama</option> <option value="Papua New Guinea">Papua New Guinea</option> <option value="Paraguay">Paraguay</option> <option value="Peru">Peru</option> <option value="Philippines">Philippines</option> <option value="Poland">Poland</option> <option value="Portugal">Portugal</option> <option value="Qatar">Qatar</option> <option value="Romania">Romania</option> <option value="Russia">Russia</option> <option value="Rwanda">Rwanda</option> <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option> <option value="Salvador">Salvador</option> <option value="Samoa">Samoa</option> <option value="San Marino">San Marino</option> <option value="Sao Tome and Principe">Sao Tome and Principe</option> <option value="Saudi Arabia">Saudi Arabia</option> <option value="Senegal">Senegal</option> <option value="Serbia">Serbia</option> <option value="Seychelles">Seychelles</option> <option value="Sierra Leone">Sierra Leone</option> <option value="Singapore">Singapore</option> <option value="Slovakia">Slovakia</option> <option value="Slovenia">Slovenia</option> <option value="Solomon">Solomon</option> <option value="Somalia">Somalia</option> <option value="South Africa">South Africa</option> <option value="South Korea">South Korea</option> <option value="South Sudan">South Sudan</option> <option value="Spain">Spain</option> <option value="Sri Lanka">Sri Lanka</option> <option value="St. Kitts and Nevis">St. Kitts and Nevis</option> <option value="St. LUCIA">St. LUCIA</option> <option value="Sudan">Sudan</option> <option value="Suriname">Suriname</option> <option value="Swaziland">Swaziland</option> <option value="Sweden">Sweden</option> <option value="Switzerland">Switzerland</option> <option value="Syria">Syria</option> <option value="Taiwan">Taiwan</option> <option value="Tajikistan">Tajikistan</option> <option value="Tanzania">Tanzania</option> <option value="Thailand">Thailand</option> <option value="Togo">Togo</option> <option value="Tonga">Tonga</option> <option value="Trinidad and Tobago">Trinidad and Tobago</option> <option value="Tunisia">Tunisia</option> <option value="Turkey">Turkey</option> <option value="Turkmenistan">Turkmenistan</option> <option value="Tuvalu">Tuvalu</option> <option value="Uganda">Uganda</option> <option value="UK">UK</option> <option value="Ukraine">Ukraine</option> <option value="United Arab Emirates">United Arab Emirates</option> <option value="United States">United States</option> <option value="Uruguay">Uruguay</option> <option value="Uzbekistan">Uzbekistan</option> <option value="Vanuatu">Vanuatu</option> <option value="Vatican">Vatican</option> <option value="Venezuela">Venezuela</option> <option value="Vietnam">Vietnam</option> <option value="Yemen">Yemen</option> <option value="Zambia">Zambia</option> <option value="Zimbabwe">Zimbabwe</option>'
    b.appendChild(h);

    // var i = document.getElementById("another_country");

    var j = document.createElement("span");
    j.setAttribute("class", "text-danger field-validation-valid");
    j.setAttribute("data-valmsg-for", "another_country");
    j.setAttribute("data-valmsg-replace", "true");
    b.appendChild(j);

    var k = document.createElement("div");
    k.setAttribute("class", "form-group col-md-5");
    a.appendChild(k);

    var l = document.createElement("div");
    l.setAttribute("class", "tooltipp");
    l.setAttribute("style", "position: relative; right: 2em;");
    k.appendChild(l);

    var m = document.createElement("i");
    m.setAttribute("class", "fas fa-question-circle hlp");
    l.appendChild(m);

    var n = document.createElement("span");
    n.setAttribute("class", "tooltiptext");
    n.innerHTML = "Explanation"
    l.appendChild(n);

    var o = document.createElement("label");
    o.setAttribute("class", "control-label");
    o.innerHTML = "How did you acquire citizenship from this country ? ";
    k.appendChild(o);

    var p = document.createElement("span");
    p.innerHTML = "*";
    o.appendChild(p);

    var r = document.createElement("div");
    r.setAttribute("class", "row");
    k.appendChild(r);

    var s = document.createElement("div");
    s.setAttribute("class", "col-md-7");
    s.setAttribute("style", "padding: 0;");
    r.appendChild(s);

    var t = document.createElement("select");
    t.setAttribute("class", "form-control how_acquired");
    t.setAttribute("name", "how_acquired[]");
    t.setAttribute("id", "how_acquired");
    t.setAttribute("data-bind", "value: how_acquired");
    t.setAttribute("data-val", "true");
    t.setAttribute("required", "required");
    s.appendChild(t);

    var u = document.createElement("option");
    u.setAttribute("value", "");
    u.setAttribute("checked", "");
    u.setAttribute("disabled", "");
    u.innerHTML = "Choose"
    t.appendChild(u);


    var v = document.createElement("option");
    v.setAttribute("value", "Par naissance");
    v.innerHTML = "By birth"
    t.appendChild(v);

    var w = document.createElement("option");
    w.setAttribute("value", "Par les parents");
    w.innerHTML = "By parents"
    t.appendChild(w);

    var x = document.createElement("option");
    x.setAttribute("value", "Naturalisé");
    x.innerHTML = "Naturalized"
    t.appendChild(x);

    var y = document.createElement("option");
    y.setAttribute("value", "Autre");
    y.innerHTML = "Other"
    t.appendChild(y);

    var z = document.createElement("div");
    z.setAttribute("class", "col-md-5");
    z.setAttribute("style", "padding-right: 0; padding-left: 10px;");
    r.appendChild(z);

    var z11 = document.createElement("input");
    z11.setAttribute("type", "text");
    z11.setAttribute("class", "form-control other_how_acquired");
    z11.setAttribute("autocomplete", "nope");
    z11.setAttribute("id", "other_how_acquired");
    z11.setAttribute("name", "other_how_acquired[]");
    z11.setAttribute("placeholder", "Other");
    z11.setAttribute("other_how_acquired", "");
    z11.setAttribute("data-bind", "value: other_how_acquired");
    z11.setAttribute("data-val", "true");
    z.appendChild(z11);

    var z12 = document.createElement("span");
    z12.setAttribute("class", "text-danger field-validation-valid");
    z12.setAttribute("data-valmsg-for", "how_acquired");
    z12.setAttribute("data-valmsg-replace", "true");
    t.appendChild(z12);

    var z13 = document.createElement("div");
    z13.setAttribute("class", "form-group col-md-2");
    a.appendChild(z13);

    var z14 = document.createElement("button");
    z14.setAttribute("class", "other-citizenship-add-item");
    z14.setAttribute("type", "button");
    z14.setAttribute("onclick", "remove_other_name_item1()");
    z14.setAttribute("style", "border: none; color: #ff0000; font-family: 'Roboto', sans-serif !important; background: none; font-size: 15px; font-weight: 600; padding-top: 33px;");
    z14.innerHTML = "DELETE";
    z13.appendChild(z14);

    var z15 = document.createElement("i");
    z15.setAttribute("class", "fas fa-minus-circle");
    z14.appendChild(z15);

}

function remove_other_name_item1() {
    var element = document.getElementById("miniSecond-item");
    element.parentNode.removeChild(element);
}





// *************** Second Button **************
const thirditem = document.getElementById('third-item');

function addAnotherInput2() {
    var a = document.createElement("div");
    a.setAttribute("class", "row document-question-item rowInput15 display-block");
    a.setAttribute("id", "miniThird-item");
    a.setAttribute("style", "gap: 1em; max-width: 80%; margin: 0 auto; padding-left: 0.7em; float: left; width: 100%;");
    document.getElementById('third-item').appendChild(a);

    var b = document.createElement("div");
    b.setAttribute("class", "form-group col-md-3");
    a.appendChild(b);

    var b1 = document.createElement("div");
    b1.setAttribute("class", "tooltipp");
    b.appendChild(b1);

    var b11 = document.createElement("i");
    b11.setAttribute("class", "fas fa-question-circle hlp");
    b1.appendChild(b11);

    var b12 = document.createElement("span");
    b12.setAttribute("class", "tooltiptext");
    b12.innerHTML = "Document Number";
    b1.appendChild(b12);

    var b2 = document.createElement("label");
    b2.setAttribute("class", "control-label");
    b2.innerHTML = "Document Number";
    b.appendChild(b2);

    var b21 = document.createElement("span");
    b21.innerHTML = "*";
    b2.appendChild(b21);

    var b3 = document.createElement("input");
    b3.setAttribute("class", "form-control NDOCU");
    b3.setAttribute("type", "text");
    b3.setAttribute("autocomplete", "nope");
    b3.setAttribute("id", "NDOCU");
    b3.setAttribute("name", "NDOCU[]");
    b3.setAttribute("onkeyup", "OnValidatNDOCU()");
    b3.setAttribute("data-bind", "value: NDOCU");
    b3.setAttribute("data-val", "true");
    b.appendChild(b3);

    var b4 = document.createElement("span");
    b4.setAttribute("class", "text-danger field-validation-valid");
    b4.setAttribute("id", "text-danger-NDOCU");
    b4.setAttribute("data-valmsg-replace", "true");
    b.appendChild(b4);

    var c = document.createElement("div");
    c.setAttribute("class", "form-group col-md");
    a.appendChild(c);

    var c1 = document.createElement("div");
    c1.setAttribute("class", "tooltipp");
    c.appendChild(c1);

    var c11 = document.createElement("i");
    c11.setAttribute("class", "fas fa-question-circle hlp");
    c1.appendChild(c11);

    var c12 = document.createElement("span");
    c12.setAttribute("class", "tooltiptext");
    c1.appendChild(c12);

    var c2 = document.createElement("label");
    c2.setAttribute("class", "control-label");
    c2.innerHTML = "Document Type";
    c.appendChild(c2);

    var c21 = document.createElement("span");
    c21.innerHTML = "*";
    c2.appendChild(c21);

    var c3 = document.createElement("select");
    c3.setAttribute("class", "form-control type_doc");
    c3.setAttribute("name", "type_doc[]");
    c3.setAttribute("id", "type_doc");
    c3.setAttribute("onkeyup", "OnValidatType_doc()");
    c3.setAttribute("data-bind", "value: type_doc");
    c3.setAttribute("data-val", "true");
    c3.setAttribute("required", "required");
    c3.innerHTML = '<option value=""></option> <option value="Passport">Passport</option> <option value=" Identity Card">Identity Card</option>';
    c.appendChild(c3);

    var c4 = document.createElement("span");
    c4.setAttribute("class", "text-danger field-validation-valid");
    c4.setAttribute("id", "text-danger-pays_doc");
    c4.setAttribute("data-valmsg-replace", "true");
    c.appendChild(c4);

    var d = document.createElement("div");
    d.setAttribute("class", "form-group col-md-3");
    a.appendChild(d);

    var d1 = document.createElement("div");
    d1.setAttribute("class", "tooltipp");
    d.appendChild(d1);

    var d11 = document.createElement("i");
    d11.setAttribute("class", "fas fa-question-circle hlp");
    d1.appendChild(d11);

    var d12 = document.createElement("span");
    d12.setAttribute("class", "tooltiptext");
    d12.innerHTML = "Issued Country";
    d1.appendChild(d12);

    var d2 = document.createElement("label");
    d2.setAttribute("class", "control-label");
    d2.innerHTML = "Issued country";
    d.appendChild(d2);

    var d21 = document.createElement("span");
    d21.innerHTML = "*";
    d2.appendChild(d21);

    var d3 = document.createElement("select");
    d3.setAttribute("class", "form-control pays_doc");
    d3.setAttribute("name", "pays_doc[]");
    d3.setAttribute("id", "pays_doc");
    d3.setAttribute("onkeyup", "OnValidatPays_doc()");
    d3.setAttribute("data-bind", "value: pays_doc");
    d3.setAttribute("data-val", "true");
    d3.setAttribute("required", "required");
    d3.innerHTML = '<option value=""></option> <option value="Afghanistan">Afghanistan</option> <option value="Albania">Albania</option> <option value="Algeria">Algeria</option> <option value="Andorra">Andorra</option> <option value="Angola">Angola</option> <option value="Antigua and Barbuda">Antigua and Barbuda</option> <option value="Argentina">Argentina</option> <option value="Armenia">Armenia</option> <option value="Australia">Australia</option> <option value="Austria">Austria</option> <option value="Azerbaijan">Azerbaijan</option> <option value="Bahamas">Bahamas</option> <option value="Bahrain">Bahrain</option> <option value="Bangladesh">Bangladesh</option> <option value="Barbados">Barbados</option> <option value="Belarus">Belarus</option> <option value="Belgium">Belgium</option> <option value="Belize">Belize</option> <option value="Benign">Benign</option> <option value="Bhutan">Bhutan</option> <option value="Bolivia">Bolivia</option> <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> <option value="Botswana">Botswana</option> <option value="Brazil">Brazil</option> <option value="Brunei">Brunei</option> <option value="Bulgaria">Bulgaria</option> <option value="Burkina Faso">Burkina Faso</option> <option value="Burma">Burma</option> <option value="Burundi">Burundi</option> <option value="Cambodia">Cambodia</option> <option value="Cameroon">Cameroon</option> <option value="Canada">Canada</option> <option value="Central African Republic">Central African Republic</option> <option value="Chad">Chad</option> <option value="Chile">Chile</option> <option value="China">China</option> <option value="Colombia">Colombia</option> <option value="Comoros">Comoros</option> <option value="Congo">Congo</option> <option value="Costa Rica">Costa Rica</option> <option value="Croatia">Croatia</option> <option value="Cuba">Cuba</option> <option value="Cyprus">Cyprus</option> <option value="Czech republic">Czech republic</option> <option value="Democratic Republic of Congo">Democratic Republic of Congo</option> <option value="Denmark">Denmark</option> <option value="Djibouti">Djibouti</option> <option value="Dominica">Dominica</option> <option value="Dominican Republic">Dominican Republic</option> <option value="East Timor">East Timor</option> <option value="Ecuador">Ecuador</option> <option value="Egypt">Egypt</option> <option value="Equatorial Guinea">Equatorial Guinea</option> <option value="Eritrea">Eritrea</option> <option value="Estonia">Estonia</option> <option value="Ethiopia">Ethiopia</option> <option value="Fiji">Fiji</option> <option value="Finland">Finland</option> <option value="France">France</option> <option value="Gabon">Gabon</option> <option value="Gambia">Gambia</option> <option value="Georgia">Georgia</option> <option value="Germany">Germany</option> <option value="Ghana">Ghana</option> <option value="Greece">Greece</option> <option value="Green cap">Green cap</option> <option value="Grenade">Grenade</option> <option value="Guatemala">Guatemala</option> <option value="Guinea">Guinea</option> <option value="Guinea-Bissau">Guinea-Bissau</option> <option value="Guyana">Guyana</option> <option value="Haiti">Haiti</option> <option value="Honduras">Honduras</option> <option value="Hong Kong">Hong Kong</option> <option value="Hungary">Hungary</option> <option value="Iceland">Iceland</option> <option value="India">India</option> <option value="Indonesia">Indonesia</option> <option value="Iran">Iran</option> <option value="Iraq">Iraq</option> <option value="Ireland">Ireland</option> <option value="Israel">Israel</option> <option value="Italy">Italy</option> <option value="Ivory Coast">Ivory Coast</option> <option value="Jamaica">Jamaica</option> <option value="Japan">Japan</option> <option value="Jordan">Jordan</option> <option value="Kazakhstan">Kazakhstan</option> <option value="Kenya">Kenya</option> <option value="Kiribati">Kiribati</option> <option value="Kosovo">Kosovo</option> <option value="Kuwait">Kuwait</option> <option value="Kyrgyzstan">Kyrgyzstan</option> <option value="Laos">Laos</option> <option value="Latvia">Latvia</option> <option value="Lebanon">Lebanon</option> <option value="Lesotho">Lesotho</option> <option value="Liberia">Liberia</option> <option value="Libya">Libya</option> <option value="Liechtenstein">Liechtenstein</option> <option value="Lithuania">Lithuania</option> <option value="Luxembourg">Luxembourg</option> <option value="Macedonia">Macedonia</option> <option value="Madagascar">Madagascar</option> <option value="Malawi">Malawi</option> <option value="Malaysia">Malaysia</option> <option value="Maldives">Maldives</option> <option value="Mali">Mali</option> <option value="Malta">Malta</option> <option value="Marshall">Marshall</option> <option value="Mauritania">Mauritania</option> <option value="Mauritius">Mauritius</option> <option value="Mexico">Mexico</option> <option value="Micronesia">Micronesia</option> <option value="Moldova">Moldova</option> <option value="Monaco">Monaco</option> <option value="Mongolia">Mongolia</option> <option value="Montenegro">Montenegro</option> <option value="Morocco">Morocco</option> <option value="Mozambique">Mozambique</option> <option value="Namibia">Namibia</option> <option value="Nauru">Nauru</option> <option value="Nepal">Nepal</option> <option value="Netherlands">Netherlands</option> <option value="New Zealand">New Zealand</option> <option value="Nicaragua">Nicaragua</option> <option value="Niger">Niger</option> <option value="Nigeria">Nigeria</option> <option value="North Korea">North Korea</option> <option value="Norway">Norway</option> <option value="Oman">Oman</option> <option value="Pakistan">Pakistan</option> <option value="Palau">Palau</option> <option value="Palestine">Palestine</option> <option value="Panama">Panama</option> <option value="Papua New Guinea">Papua New Guinea</option> <option value="Paraguay">Paraguay</option> <option value="Peru">Peru</option> <option value="Philippines">Philippines</option> <option value="Poland">Poland</option> <option value="Portugal">Portugal</option> <option value="Qatar">Qatar</option> <option value="Romania">Romania</option> <option value="Russia">Russia</option> <option value="Rwanda">Rwanda</option> <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option> <option value="Salvador">Salvador</option> <option value="Samoa">Samoa</option> <option value="San Marino">San Marino</option> <option value="Sao Tome and Principe">Sao Tome and Principe</option> <option value="Saudi Arabia">Saudi Arabia</option> <option value="Senegal">Senegal</option> <option value="Serbia">Serbia</option> <option value="Seychelles">Seychelles</option> <option value="Sierra Leone">Sierra Leone</option> <option value="Singapore">Singapore</option> <option value="Slovakia">Slovakia</option> <option value="Slovenia">Slovenia</option> <option value="Solomon">Solomon</option> <option value="Somalia">Somalia</option> <option value="South Africa">South Africa</option> <option value="South Korea">South Korea</option> <option value="South Sudan">South Sudan</option> <option value="Spain">Spain</option> <option value="Sri Lanka">Sri Lanka</option> <option value="St. Kitts and Nevis">St. Kitts and Nevis</option> <option value="St. LUCIA">St. LUCIA</option> <option value="Sudan">Sudan</option> <option value="Suriname">Suriname</option> <option value="Swaziland">Swaziland</option> <option value="Sweden">Sweden</option> <option value="Switzerland">Switzerland</option> <option value="Syria">Syria</option> <option value="Taiwan">Taiwan</option> <option value="Tajikistan">Tajikistan</option> <option value="Tanzania">Tanzania</option> <option value="Thailand">Thailand</option> <option value="Togo">Togo</option> <option value="Tonga">Tonga</option> <option value="Trinidad and Tobago">Trinidad and Tobago</option> <option value="Tunisia">Tunisia</option> <option value="Turkey">Turkey</option> <option value="Turkmenistan">Turkmenistan</option> <option value="Tuvalu">Tuvalu</option> <option value="Uganda">Uganda</option> <option value="UK">UK</option> <option value="Ukraine">Ukraine</option> <option value="United Arab Emirates">United Arab Emirates</option> <option value="United States">United States</option> <option value="Uruguay">Uruguay</option> <option value="Uzbekistan">Uzbekistan</option> <option value="Vanuatu">Vanuatu</option> <option value="Vatican">Vatican</option> <option value="Venezuela">Venezuela</option> <option value="Vietnam">Vietnam</option> <option value="Yemen">Yemen</option> <option value="Zambia">Zambia</option> <option value="Zimbabwe">Zimbabwe</option>';
    d.appendChild(d3);

    var d5 = document.createElement("span");
    d5.setAttribute("class", "text-danger field-validation-valid");
    d5.setAttribute("id", "text-danger-pays_doc");
    d5.setAttribute("data-valmsg-replace", "true");
    b.appendChild(d5);

    var e = document.createElement("div");
    e.setAttribute("class", "form-group col-md");
    a.appendChild(e);

    var e1 = document.createElement("div");
    e1.setAttribute("class", "tooltipp");
    e.appendChild(e1);

    var e11 = document.createElement("i");
    e11.setAttribute("class", "fas fa-question-circle hlp");
    e1.appendChild(e11);

    var e12 = document.createElement("span");
    e12.setAttribute("class", "tooltiptext");
    e12.innerHTML = "Expiration Date";
    e1.appendChild(e12);

    var e2 = document.createElement("label");
    e2.setAttribute("class", "control-label");
    e2.innerHTML = "Expiration Date";
    e.appendChild(e2);

    var e21 = document.createElement("span");
    e21.innerHTML = "*";
    e2.appendChild(e21);

    var e3 = document.createElement("input");
    e3.setAttribute("class", "form-control date_doc");
    e3.setAttribute("type", "text");
    e3.setAttribute("autocomplete", "nope");
    e3.setAttribute("id", "date_doc");
    e3.setAttribute("onkeyup", "OnValidatDate_doc()");
    e3.setAttribute("placeholder", "YYYY");
    e3.setAttribute("name", "date_doc[]");
    e3.setAttribute("pattern", "^[a-zA-Z0-9]{4}$");
    e3.setAttribute("data-msg-pattern", "please indicate only the year of expiry of the document");
    e3.setAttribute("data-bind", "value: date_doc");
    e3.setAttribute("data-val", "true");
    e3.setAttribute("required", "required");
    e.appendChild(e3);

    var e4 = document.createElement("span");
    e4.setAttribute("class", "text-danger field-validation-valid");
    e4.setAttribute("id", "text-danger-date_doc");
    e4.setAttribute("data-valmsg-replace", "true");
    e.appendChild(e4);

    var f = document.createElement("div");
    f.setAttribute("class", "form-group col-md");
    a.appendChild(f);

    var f1 = document.createElement("button");
    f1.setAttribute("type", "button");
    f1.setAttribute("class", "document-question-add-item");
    f1.setAttribute("onclick", "remove_other_name_item2()");
    f1.innerHTML = "DELETE"
    f1.setAttribute("style", "border: none; color: #ff0000; font-family: 'Roboto', sans-serif !important; background: none; font-size: 15px; font-weight: 600; padding-top: 33px;");
    f.appendChild(f1);

    var f11 = document.createElement("i");
    f11.setAttribute("class", "fas fa-minus-circle");
    f1.appendChild(f11);

    // var f12 = document.createElement("div");
    // 
    // a.appendChild(f12);
}

function remove_other_name_item2() {
    var element = document.getElementById("miniThird-item");
    element.parentNode.removeChild(element);
}




// *************** Second Button **************
const fourthitem = document.getElementById('fourth-item');

function addAnotherInput3() {
    var a = document.createElement("div");
    a.setAttribute("class", "row been-other-citizen-item first-item");
    a.setAttribute("id", "minifourth-item");
    a.setAttribute("style", "float: left; width: 80%; gap: 1em;");
    document.getElementById('fourth-item').appendChild(a);

    var b = document.createElement("div");
    b.setAttribute("class", "form-group col-md-3");
    a.appendChild(b);

    var b1 = document.createElement("div");
    b1.setAttribute("class", "tooltipp");
    b.appendChild(b1);

    var b11 = document.createElement("i");
    b11.setAttribute("class", "fas fa-question-circle hlp");
    b1.appendChild(b11);

    var b12 = document.createElement("span");
    b12.setAttribute("class", "tooltiptext");
    b12.innerHTML = "Country of Citizenship ";
    b1.appendChild(b12);

    var b2 = document.createElement("label");
    b2.setAttribute("class", "control-label");
    b2.innerHTML = "Country of Citizenship ";
    b.appendChild(b2);

    var b21 = document.createElement("span");
    b21.innerHTML = "*";
    b2.appendChild(b21);

    var b3 = document.createElement("select");
    b3.setAttribute("class", "form-control country_other2");
    b3.setAttribute("type", "text");
    b3.setAttribute("autocomplete", "nope");
    b3.setAttribute("id", "country_other2");
    b3.setAttribute("name", "country_other2[]");
    b3.setAttribute("data-bind", "value: country_other2");
    b3.setAttribute("data-val", "true");
    b3.innerHTML = '<option value=""></option> <option value="Afghanistan">Afghanistan</option> <option value="Albania">Albania</option> <option value="Algeria">Algeria</option> <option value="Andorra">Andorra</option> <option value="Angola">Angola</option> <option value="Antigua and Barbuda">Antigua and Barbuda</option> <option value="Argentina">Argentina</option> <option value="Armenia">Armenia</option> <option value="Australia">Australia</option> <option value="Austria">Austria</option> <option value="Azerbaijan">Azerbaijan</option> <option value="Bahamas">Bahamas</option> <option value="Bahrain">Bahrain</option> <option value="Bangladesh">Bangladesh</option> <option value="Barbados">Barbados</option> <option value="Belarus">Belarus</option> <option value="Belgium">Belgium</option> <option value="Belize">Belize</option> <option value="Benign">Benign</option> <option value="Bhutan">Bhutan</option> <option value="Bolivia">Bolivia</option> <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> <option value="Botswana">Botswana</option> <option value="Brazil">Brazil</option> <option value="Brunei">Brunei</option> <option value="Bulgaria">Bulgaria</option> <option value="Burkina Faso">Burkina Faso</option> <option value="Burma">Burma</option> <option value="Burundi">Burundi</option> <option value="Cambodia">Cambodia</option> <option value="Cameroon">Cameroon</option> <option value="Canada">Canada</option> <option value="Central African Republic">Central African Republic</option> <option value="Chad">Chad</option> <option value="Chile">Chile</option> <option value="China">China</option> <option value="Colombia">Colombia</option> <option value="Comoros">Comoros</option> <option value="Congo">Congo</option> <option value="Costa Rica">Costa Rica</option> <option value="Croatia">Croatia</option> <option value="Cuba">Cuba</option> <option value="Cyprus">Cyprus</option> <option value="Czech republic">Czech republic</option> <option value="Democratic Republic of Congo">Democratic Republic of Congo</option> <option value="Denmark">Denmark</option> <option value="Djibouti">Djibouti</option> <option value="Dominica">Dominica</option> <option value="Dominican Republic">Dominican Republic</option> <option value="East Timor">East Timor</option> <option value="Ecuador">Ecuador</option> <option value="Egypt">Egypt</option> <option value="Equatorial Guinea">Equatorial Guinea</option> <option value="Eritrea">Eritrea</option> <option value="Estonia">Estonia</option> <option value="Ethiopia">Ethiopia</option> <option value="Fiji">Fiji</option> <option value="Finland">Finland</option> <option value="France">France</option> <option value="Gabon">Gabon</option> <option value="Gambia">Gambia</option> <option value="Georgia">Georgia</option> <option value="Germany">Germany</option> <option value="Ghana">Ghana</option> <option value="Greece">Greece</option> <option value="Green cap">Green cap</option> <option value="Grenade">Grenade</option> <option value="Guatemala">Guatemala</option> <option value="Guinea">Guinea</option> <option value="Guinea-Bissau">Guinea-Bissau</option> <option value="Guyana">Guyana</option> <option value="Haiti">Haiti</option> <option value="Honduras">Honduras</option> <option value="Hong Kong">Hong Kong</option> <option value="Hungary">Hungary</option> <option value="Iceland">Iceland</option> <option value="India">India</option> <option value="Indonesia">Indonesia</option> <option value="Iran">Iran</option> <option value="Iraq">Iraq</option> <option value="Ireland">Ireland</option> <option value="Israel">Israel</option> <option value="Italy">Italy</option> <option value="Ivory Coast">Ivory Coast</option> <option value="Jamaica">Jamaica</option> <option value="Japan">Japan</option> <option value="Jordan">Jordan</option> <option value="Kazakhstan">Kazakhstan</option> <option value="Kenya">Kenya</option> <option value="Kiribati">Kiribati</option> <option value="Kosovo">Kosovo</option> <option value="Kuwait">Kuwait</option> <option value="Kyrgyzstan">Kyrgyzstan</option> <option value="Laos">Laos</option> <option value="Latvia">Latvia</option> <option value="Lebanon">Lebanon</option> <option value="Lesotho">Lesotho</option> <option value="Liberia">Liberia</option> <option value="Libya">Libya</option> <option value="Liechtenstein">Liechtenstein</option> <option value="Lithuania">Lithuania</option> <option value="Luxembourg">Luxembourg</option> <option value="Macedonia">Macedonia</option> <option value="Madagascar">Madagascar</option> <option value="Malawi">Malawi</option> <option value="Malaysia">Malaysia</option> <option value="Maldives">Maldives</option> <option value="Mali">Mali</option> <option value="Malta">Malta</option> <option value="Marshall">Marshall</option> <option value="Mauritania">Mauritania</option> <option value="Mauritius">Mauritius</option> <option value="Mexico">Mexico</option> <option value="Micronesia">Micronesia</option> <option value="Moldova">Moldova</option> <option value="Monaco">Monaco</option> <option value="Mongolia">Mongolia</option> <option value="Montenegro">Montenegro</option> <option value="Morocco">Morocco</option> <option value="Mozambique">Mozambique</option> <option value="Namibia">Namibia</option> <option value="Nauru">Nauru</option> <option value="Nepal">Nepal</option> <option value="Netherlands">Netherlands</option> <option value="New Zealand">New Zealand</option> <option value="Nicaragua">Nicaragua</option> <option value="Niger">Niger</option> <option value="Nigeria">Nigeria</option> <option value="North Korea">North Korea</option> <option value="Norway">Norway</option> <option value="Oman">Oman</option> <option value="Pakistan">Pakistan</option> <option value="Palau">Palau</option> <option value="Palestine">Palestine</option> <option value="Panama">Panama</option> <option value="Papua New Guinea">Papua New Guinea</option> <option value="Paraguay">Paraguay</option> <option value="Peru">Peru</option> <option value="Philippines">Philippines</option> <option value="Poland">Poland</option> <option value="Portugal">Portugal</option> <option value="Qatar">Qatar</option> <option value="Romania">Romania</option> <option value="Russia">Russia</option> <option value="Rwanda">Rwanda</option> <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option> <option value="Salvador">Salvador</option> <option value="Samoa">Samoa</option> <option value="San Marino">San Marino</option> <option value="Sao Tome and Principe">Sao Tome and Principe</option> <option value="Saudi Arabia">Saudi Arabia</option> <option value="Senegal">Senegal</option> <option value="Serbia">Serbia</option> <option value="Seychelles">Seychelles</option> <option value="Sierra Leone">Sierra Leone</option> <option value="Singapore">Singapore</option> <option value="Slovakia">Slovakia</option> <option value="Slovenia">Slovenia</option> <option value="Solomon">Solomon</option> <option value="Somalia">Somalia</option> <option value="South Africa">South Africa</option> <option value="South Korea">South Korea</option> <option value="South Sudan">South Sudan</option> <option value="Spain">Spain</option> <option value="Sri Lanka">Sri Lanka</option> <option value="St. Kitts and Nevis">St. Kitts and Nevis</option> <option value="St. LUCIA">St. LUCIA</option> <option value="Sudan">Sudan</option> <option value="Suriname">Suriname</option> <option value="Swaziland">Swaziland</option> <option value="Sweden">Sweden</option> <option value="Switzerland">Switzerland</option> <option value="Syria">Syria</option> <option value="Taiwan">Taiwan</option> <option value="Tajikistan">Tajikistan</option> <option value="Tanzania">Tanzania</option> <option value="Thailand">Thailand</option> <option value="Togo">Togo</option> <option value="Tonga">Tonga</option> <option value="Trinidad and Tobago">Trinidad and Tobago</option> <option value="Tunisia">Tunisia</option> <option value="Turkey">Turkey</option> <option value="Turkmenistan">Turkmenistan</option> <option value="Tuvalu">Tuvalu</option> <option value="Uganda">Uganda</option> <option value="UK">UK</option> <option value="Ukraine">Ukraine</option> <option value="United Arab Emirates">United Arab Emirates</option> <option value="United States">United States</option> <option value="Uruguay">Uruguay</option> <option value="Uzbekistan">Uzbekistan</option> <option value="Vanuatu">Vanuatu</option> <option value="Vatican">Vatican</option> <option value="Venezuela">Venezuela</option> <option value="Vietnam">Vietnam</option> <option value="Yemen">Yemen</option> <option value="Zambia">Zambia</option> <option value="Zimbabwe">Zimbabwe</option>'
    b3.setAttribute("required", "required");
    b.appendChild(b3);

    var b4 = document.createElement("span");
    b4.setAttribute("class", "text-danger field-validation-valid");
    b4.setAttribute("data-valmsg-replace", "true");
    b.appendChild(b4);

    var c = document.createElement("div");
    c.setAttribute("class", "form-group col-md-3");
    a.appendChild(c);

    var c1 = document.createElement("div");
    c1.setAttribute("class", "tooltipp");
    c.appendChild(c1);

    var c11 = document.createElement("i");
    c11.setAttribute("class", "fas fa-question-circle hlp");
    c1.appendChild(c11);

    var c12 = document.createElement("span");
    c12.setAttribute("class", "tooltiptext");
    c12.innerHTML = "From";
    c1.appendChild(c12);

    var c2 = document.createElement("label");
    c2.setAttribute("class", "control-label");
    c2.innerHTML = "From ";
    c.appendChild(c2);

    var c21 = document.createElement("span");
    c21.innerHTML = "*";
    c2.appendChild(c21);

    var c3 = document.createElement("input");
    c3.setAttribute("class", "form-control country_other2_start");
    c3.setAttribute("name", "country_other2_start[]");
    c3.setAttribute("id", "country_other2_start");
    c3.setAttribute("data-bind", "value: country_other2_start");
    c3.setAttribute("data-val", "true");
    c3.setAttribute("required", "required");
    c.appendChild(c3);

    var d = document.createElement("div");
    d.setAttribute("class", "form-group col-md-3");
    a.appendChild(d);

    var d1 = document.createElement("div");
    d1.setAttribute("class", "tooltipp");
    d.appendChild(d1);

    var d11 = document.createElement("i");
    d11.setAttribute("class", "fas fa-question-circle hlp");
    d1.appendChild(d11);

    var d12 = document.createElement("span");
    d12.setAttribute("class", "tooltiptext");
    d12.innerHTML = "To";
    d1.appendChild(d12);

    var d2 = document.createElement("label");
    d2.setAttribute("class", "control-label");
    d2.innerHTML = "To";
    d.appendChild(d2);

    var d21 = document.createElement("span");
    d21.innerHTML = "*";
    d2.appendChild(d21);

    var d3 = document.createElement("input");
    d3.setAttribute("class", "form-control country_other2_end");
    d3.setAttribute("type", "text");
    d3.setAttribute("autocomplete", "nope");
    d3.setAttribute("id", "country_other2_end");
    d3.setAttribute("name", "country_other2_end[]");
    d3.setAttribute("data-bind", "value: country_other2_end");
    d3.setAttribute("data-val", "true");
    d3.setAttribute("required", "required");
    d.appendChild(d3);

    var f = document.createElement("div");
    f.setAttribute("class", "form-group col-md");
    a.appendChild(f);

    var f1 = document.createElement("button");
    f1.setAttribute("type", "button");
    f1.setAttribute("class", "been-other-citizen-add-item");
    f1.setAttribute("onclick", "remove_other_name_item3()");
    f1.innerHTML = "DELETE"
    f1.setAttribute("style", "border: none; color: #ff0000; font-family: 'Roboto', sans-serif !important; background: none; font-size: 15px; font-weight: 600; padding-top: 33px;");
    f.appendChild(f1);

    var f11 = document.createElement("i");
    f11.setAttribute("class", "fas fa-minus-circle");
    f1.appendChild(f11);
}

function remove_other_name_item3() {
    var element = document.getElementById("minifourth-item");
    element.parentNode.removeChild(element);
}