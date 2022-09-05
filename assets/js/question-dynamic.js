// ********************* question 7 **********************
const rowInput7 = document.getElementById('rowInput7');
const questionusa7yes = document.getElementById('questionusa7yes');
const questionusa7no = document.getElementById('questionusa7no');

questionusa7yes.addEventListener("click", () => {

    if (questionusa7yes.value !== "YES") {
        console.log("Error");
    }

    rowInput7.classList.add('display-block');
    return true;
})

questionusa7no.addEventListener("click", () => {

    if (questionusa7no.value !== "NO") {
        console.log("Error");
    }

    rowInput7.classList.remove('display-block');
    return true;
})



// ********************* question 9 **********************
const rowInput9 = document.getElementById('rowInput9');
const questionusa9yes = document.getElementById('questionusa9yes');
const questionusa9no = document.getElementById('questionusa9no');
questionusa9yes.addEventListener("click", () => {

    if (questionusa9yes.value !== "YES") {
        console.log("Error");
    }

    rowInput9.classList.add('display-block');
    return true;
})

questionusa9no.addEventListener("click", () => {

    if (questionusa9no.value !== "NO") {
        console.log("Error");
    }

    rowInput9.classList.remove('display-block');
    return true;
})



// ********************* question 10 **********************
const rowInput10 = document.getElementById('rowInput10');
const autre_aliasyes = document.getElementById('autre_aliasyes');
const autre_aliasno = document.getElementById('autre_aliasno');

autre_aliasyes.addEventListener("click", () => {

    if (autre_aliasyes.value !== "YES") {
        console.log("Error");
    }

    rowInput10.classList.add('display-block');
    return true;
})

autre_aliasno.addEventListener("click", () => {

    if (autre_aliasno.value !== "NO") {
        console.log("Error");
    }

    rowInput10.classList.remove('display-block');
    return true;
})



// ********************* question 11 **********************
const rowInput11 = document.getElementById('rowInput11');
const emploiyes = document.getElementById('emploiyes');
const emploino = document.getElementById('emploino');

emploiyes.addEventListener("click", () => {

    if (emploiyes.value !== "YES") {
        console.log("Error");
    }

    rowInput11.classList.add('display-block');
    return true;
})

emploino.addEventListener("click", () => {

    if (emploino.value !== "NO") {
        console.log("Error");
    }

    rowInput11.classList.remove('display-block');
    return true;
})


// ********************* question 13 **********************
const rowInput13 = document.getElementById('rowInput13');
const question2 = document.getElementById('question-dyn');
const other_citizenshipyes = document.getElementById('other_citizenshipyes');
const other_citizenshipno = document.getElementById('other_citizenshipno');

other_citizenshipyes.addEventListener("click", () => {

    if (other_citizenshipyes.value !== "YES") {
        console.log("Error");
    }

    rowInput13.classList.add('display-block');
    question2.classList.remove("display-none");
    question2.innerHTML = '<div class="row form-group"> <div class="col-md-10 no-padding"><label for="dateExpirat" class="control-label"> <div class="tooltipp"><i class="fas fa-question-circle hlp"></i><span class="tooltiptext">kindly indicate if you were citizen of any other country</span></div>Have you been a citizen of another country? <span>*</span> </label></div><div class="col-md radio-option no-padding"><label class="control-label pull-right"> <input type="radio" value="NO" id="been_other_citizen_no" name="been_other_citizen" required="" data-bind="checked: been_other_citizen" data-val="true" aria-required="true" checked> NO </label><label class="control-label pull-right"> <input type="radio" value="YES" id="been_other_citizen_yes" name="been_other_citizen" required="" data-bind="checked: been_other_citizen" data-val="true" aria-required="true"> YES </label></div><span class="text-danger field-validation-valid" data-valmsg-for="been_other_citizen" data-valmsg-replace="true"> </span> </div> <div class="document-question-items"> <div class="row document-question-item rowInput15" id="rowInput15" style="gap: 1em; max-width: 80%; margin: 0 auto; padding-left: 0.7em; float: left; width: 100%;"> <div class="form-group col-md-3" > <div class="tooltipp"><i class="fas fa-question-circle hlp"></i><span class="tooltiptext">Document Number</span></div><label class="control-label">Document number <span>*</span> </label> <input type="text" class="form-control NDOCU" autocomplete="nope" id="NDOCU" name="NDOCU[]" placeholder="" data-bind="value: NDOCU" data-val="true" required="required"> <span class="text-danger field-validation-valid" data-valmsg-for="NDOCU" data-valmsg-replace="true"> </span> </div><div class="form-group col-md" > <div class="tooltipp"><i class="fas fa-question-circle hlp"></i><span class="tooltiptext">Document Type</span></div><label class="control-label">Document type <span>*</span> </label> <select class="form-control type_doc" name="type_doc[]" id="type_doc" placeholder="" data-bind="value: type_doc" data-val="true" required="required"> <option value=""></option> <option value="Passport">Passport</option> <option value=" Identity Card">Identity Card</option> </select><span class="text-danger field-validation-valid" data-valmsg-for="type_doc" data-valmsg-replace="true"> </span> </div><div class="form-group col-md-3" > <div class="tooltipp"><i class="fas fa-question-circle hlp"></i><span class="tooltiptext">Issued Country</span></div><label class="control-label">Issued country <span>*</span> </label> <select class="form-control pays_doc" name="pays_doc[]" id="pays_doc" placeholder="" data-bind="value: pays_doc" data-val="true" required="required"> <option value=""></option> <option value="Afghanistan">Afghanistan</option> <option value="Albania">Albania</option> <option value="Algeria">Algeria</option> <option value="Andorra">Andorra</option> <option value="Angola">Angola</option> <option value="Antigua and Barbuda">Antigua and Barbuda</option> <option value="Argentina">Argentina</option> <option value="Armenia">Armenia</option> <option value="Australia">Australia</option> <option value="Austria">Austria</option> <option value="Azerbaijan">Azerbaijan</option> <option value="Bahamas">Bahamas</option> <option value="Bahrain">Bahrain</option> <option value="Bangladesh">Bangladesh</option> <option value="Barbados">Barbados</option> <option value="Belarus">Belarus</option> <option value="Belgium">Belgium</option> <option value="Belize">Belize</option> <option value="Benign">Benign</option> <option value="Bhutan">Bhutan</option> <option value="Bolivia">Bolivia</option> <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> <option value="Botswana">Botswana</option> <option value="Brazil">Brazil</option> <option value="Brunei">Brunei</option> <option value="Bulgaria">Bulgaria</option> <option value="Burkina Faso">Burkina Faso</option> <option value="Burma">Burma</option> <option value="Burundi">Burundi</option> <option value="Cambodia">Cambodia</option> <option value="Cameroon">Cameroon</option> <option value="Canada">Canada</option> <option value="Central African Republic">Central African Republic</option> <option value="Chad">Chad</option> <option value="Chile">Chile</option> <option value="China">China</option> <option value="Colombia">Colombia</option> <option value="Comoros">Comoros</option> <option value="Congo">Congo</option> <option value="Costa Rica">Costa Rica</option> <option value="Croatia">Croatia</option> <option value="Cuba">Cuba</option> <option value="Cyprus">Cyprus</option> <option value="Czech republic">Czech republic</option> <option value="Democratic Republic of Congo">Democratic Republic of Congo</option> <option value="Denmark">Denmark</option> <option value="Djibouti">Djibouti</option> <option value="Dominica">Dominica</option> <option value="Dominican Republic">Dominican Republic</option> <option value="East Timor">East Timor</option> <option value="Ecuador">Ecuador</option> <option value="Egypt">Egypt</option> <option value="Equatorial Guinea">Equatorial Guinea</option> <option value="Eritrea">Eritrea</option> <option value="Estonia">Estonia</option> <option value="Ethiopia">Ethiopia</option> <option value="Fiji">Fiji</option> <option value="Finland">Finland</option> <option value="France">France</option> <option value="Gabon">Gabon</option> <option value="Gambia">Gambia</option> <option value="Georgia">Georgia</option> <option value="Germany">Germany</option> <option value="Ghana">Ghana</option> <option value="Greece">Greece</option> <option value="Green cap">Green cap</option> <option value="Grenade">Grenade</option> <option value="Guatemala">Guatemala</option> <option value="Guinea">Guinea</option> <option value="Guinea-Bissau">Guinea-Bissau</option> <option value="Guyana">Guyana</option> <option value="Haiti">Haiti</option> <option value="Honduras">Honduras</option> <option value="Hong Kong">Hong Kong</option> <option value="Hungary">Hungary</option> <option value="Iceland">Iceland</option> <option value="India">India</option> <option value="Indonesia">Indonesia</option> <option value="Iran">Iran</option> <option value="Iraq">Iraq</option> <option value="Ireland">Ireland</option> <option value="Israel">Israel</option> <option value="Italy">Italy</option> <option value="Ivory Coast">Ivory Coast</option> <option value="Jamaica">Jamaica</option> <option value="Japan">Japan</option> <option value="Jordan">Jordan</option> <option value="Kazakhstan">Kazakhstan</option> <option value="Kenya">Kenya</option> <option value="Kiribati">Kiribati</option> <option value="Kosovo">Kosovo</option> <option value="Kuwait">Kuwait</option> <option value="Kyrgyzstan">Kyrgyzstan</option> <option value="Laos">Laos</option> <option value="Latvia">Latvia</option> <option value="Lebanon">Lebanon</option> <option value="Lesotho">Lesotho</option> <option value="Liberia">Liberia</option> <option value="Libya">Libya</option> <option value="Liechtenstein">Liechtenstein</option> <option value="Lithuania">Lithuania</option> <option value="Luxembourg">Luxembourg</option> <option value="Macedonia">Macedonia</option> <option value="Madagascar">Madagascar</option> <option value="Malawi">Malawi</option> <option value="Malaysia">Malaysia</option> <option value="Maldives">Maldives</option> <option value="Mali">Mali</option> <option value="Malta">Malta</option> <option value="Marshall">Marshall</option> <option value="Mauritania">Mauritania</option> <option value="Mauritius">Mauritius</option> <option value="Mexico">Mexico</option> <option value="Micronesia">Micronesia</option> <option value="Moldova">Moldova</option> <option value="Monaco">Monaco</option> <option value="Mongolia">Mongolia</option> <option value="Montenegro">Montenegro</option> <option value="Morocco">Morocco</option> <option value="Mozambique">Mozambique</option> <option value="Namibia">Namibia</option> <option value="Nauru">Nauru</option> <option value="Nepal">Nepal</option> <option value="Netherlands">Netherlands</option> <option value="New Zealand">New Zealand</option> <option value="Nicaragua">Nicaragua</option> <option value="Niger">Niger</option> <option value="Nigeria">Nigeria</option> <option value="North Korea">North Korea</option> <option value="Norway">Norway</option> <option value="Oman">Oman</option> <option value="Pakistan">Pakistan</option> <option value="Palau">Palau</option> <option value="Palestine">Palestine</option> <option value="Panama">Panama</option> <option value="Papua New Guinea">Papua New Guinea</option> <option value="Paraguay">Paraguay</option> <option value="Peru">Peru</option> <option value="Philippines">Philippines</option> <option value="Poland">Poland</option> <option value="Portugal">Portugal</option> <option value="Qatar">Qatar</option> <option value="Romania">Romania</option> <option value="Russia">Russia</option> <option value="Rwanda">Rwanda</option> <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option> <option value="Salvador">Salvador</option> <option value="Samoa">Samoa</option> <option value="San Marino">San Marino</option> <option value="Sao Tome and Principe">Sao Tome and Principe</option> <option value="Saudi Arabia">Saudi Arabia</option> <option value="Senegal">Senegal</option> <option value="Serbia">Serbia</option> <option value="Seychelles">Seychelles</option> <option value="Sierra Leone">Sierra Leone</option> <option value="Singapore">Singapore</option> <option value="Slovakia">Slovakia</option> <option value="Slovenia">Slovenia</option> <option value="Solomon">Solomon</option> <option value="Somalia">Somalia</option> <option value="South Africa">South Africa</option> <option value="South Korea">South Korea</option> <option value="South Sudan">South Sudan</option> <option value="Spain">Spain</option> <option value="Sri Lanka">Sri Lanka</option> <option value="St. Kitts and Nevis">St. Kitts and Nevis</option> <option value="St. LUCIA">St. LUCIA</option> <option value="Sudan">Sudan</option> <option value="Suriname">Suriname</option> <option value="Swaziland">Swaziland</option> <option value="Sweden">Sweden</option> <option value="Switzerland">Switzerland</option> <option value="Syria">Syria</option> <option value="Taiwan">Taiwan</option> <option value="Tajikistan">Tajikistan</option> <option value="Tanzania">Tanzania</option> <option value="Thailand">Thailand</option> <option value="Togo">Togo</option> <option value="Tonga">Tonga</option> <option value="Trinidad and Tobago">Trinidad and Tobago</option> <option value="Tunisia">Tunisia</option> <option value="Turkey">Turkey</option> <option value="Turkmenistan">Turkmenistan</option> <option value="Tuvalu">Tuvalu</option> <option value="Uganda">Uganda</option> <option value="UK">UK</option> <option value="Ukraine">Ukraine</option> <option value="United Arab Emirates">United Arab Emirates</option> <option value="United States">United States</option> <option value="Uruguay">Uruguay</option> <option value="Uzbekistan">Uzbekistan</option> <option value="Vanuatu">Vanuatu</option> <option value="Vatican">Vatican</option> <option value="Venezuela">Venezuela</option> <option value="Vietnam">Vietnam</option> <option value="Yemen">Yemen</option> <option value="Zambia">Zambia</option> <option value="Zimbabwe">Zimbabwe</option> </select><span class="text-danger field-validation-valid" data-valmsg-for="pays_doc" data-valmsg-replace="true"> </span> </div><div class="form-group col-md" > <div class="tooltipp"><i class="fas fa-question-circle hlp"></i><span class="tooltiptext">Expiration Date</span></div><label class="control-label">Expiration date <span>*</span> </label> <input type="text" class="form-control date_doc" autocomplete="nope" id="date_doc" name="date_doc[]" placeholder="YYYY" pattern="^[a-zA-Z0-9]{4}$" data-msg-pattern="please indicate only the year of expiry of the document" data-bind="value: date_doc" data-val="true" required="required"> <span class="text-danger field-validation-valid" data-valmsg-for="date_doc" data-valmsg-replace="true"> </span> </div><div class="form-group col-md"> <button onclick="addAnotherInput2()" type="button" class="document-question-add-item" style="border: none; color: green; background: none; font-size: 15px; font-weight: 600; padding-top: 33px;"><i class="fas fa-plus-circle"></i> ADD ANOTHER</button></div></div><div class="third-item" id="third-item"></div></div>';

    
    // ********************* question 15 **********************
    const rowInput15 = document.getElementById('rowInput15');
    const been_other_citizen_yes = document.getElementById('been_other_citizen_yes');
    const been_other_citizen_no = document.getElementById('been_other_citizen_no');


    been_other_citizen_yes.addEventListener("click", () => {
        if (been_other_citizen_yes.value !== "YES") {
            console.log("Error");
        }
        rowInput15.classList.add('display-block');
        return true;
    })

    been_other_citizen_no.addEventListener("click", () => {
        if (been_other_citizen_no.value !== "NO") {
            console.log("Error");
        }

        rowInput15.classList.remove('display-block');
        return true;
    })
    return true;
})

other_citizenshipno.addEventListener("click", () => {

    if (other_citizenshipno.value !== "NO") {
        console.log("Error");
    }

    question2.classList.add("display-none");
    rowInput13.classList.remove('display-block');
    return true;
})




// ********************* question 16 **********************
const rowInput16 = document.getElementById('rowInput16');
const Document_question_yes = document.getElementById('Document_question_yes');
const Document_question_no = document.getElementById('Document_question_no');


Document_question_yes.addEventListener("click", () => {
    if (Document_question_yes.value !== "YES") {
        console.log("Error");
    }
    rowInput16.classList.add('display-block');
    return true;
})

Document_question_no.addEventListener("click", () => {
    if (Document_question_no.value !== "NO") {
        console.log("Error");
    }

    rowInput16.classList.remove('display-block');
    return true;
})


// ********************* question 17 **********************
const rowInput17 = document.getElementById('rowInput17');
const transit_question_yes = document.getElementById('transit_question_yes');
const transit_question_no = document.getElementById('transit_question_no');


transit_question_no.addEventListener("click", () => {
    if (transit_question_no.value !== "NO") {
        console.log("Error");
    }
    rowInput17.classList.add('display-block');
    return true;
})

transit_question_yes.addEventListener("click", () => {
    if (transit_question_yes.value !== "YES") {
        console.log("Error");
    }

    rowInput17.classList.remove('display-block');
    return true;
})



// ********************* question 18 **********************
const rowInput18 = document.getElementById('rowInput18');
const transit_outher_address_yes = document.getElementById('transit_outher_address_yes');
const transit_outher_address_no = document.getElementById('transit_outher_address_no');


transit_outher_address_no.addEventListener("click", () => {
    if (transit_outher_address_no.value !== "NO") {
        console.log("Error");
    }
    rowInput18.classList.add('display-block');
    return true;
})

transit_outher_address_yes.addEventListener("click", () => {
    if (transit_outher_address_yes.value !== "YES") {
        console.log("Error");
    }

    rowInput18.classList.remove('display-block');
    return true;
})