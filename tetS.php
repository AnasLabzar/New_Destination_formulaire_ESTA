<div id="section-step1">

<summary id="summary">
    <h5>Information Personal</h5>
</summary>

<div class="col-xs-12 col-sm-8 d-grid mt-5 w-100">
    <div class="row">
        <div class="col-8">
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Enter your Family (last) name as it appears in your passport in the Last name field. Last name is required to complete the application.</span></div>
                    <label class="control-label">Family Name <span class="redspan">*</span></label>
                    <input type="text" name="familyname" onkeyup="OnValidatFamilyName()" class="form-control effect-19" autocomplete="nope" id="nom" name="nom" placeholder="Family  Name" data-bind="value: nom" data-val="true" aria-required="true">
                    <span id="text-danger-familyname" class="text-danger field-validation-valid" data-valmsg-for="nom" data-valmsg-replace="true">
                    </span>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Enter your first name here as it appears in your passport in the First Name field. The first name is required to complete the application.</span></div>
                    <label class="control-label">First (Given) Name <span class="redspan">*</span></label>
                    <input type="text" name="firstname" class="form-control" onkeyup="OnValidatFirstName()" autocomplete="nope" id="prenom" name="prenom" placeholder="First  (Given) Name" data-bind="value: prenom" data-val="true" aria-required="true">
                    <span id="text-danger-firstname" class="text-danger field-validation-valid" data-valmsg-for="prenom" data-valmsg-replace="true">
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Please indicate your gender. Required to complete the application.</span></div>
                    <label class="control-label">Gender <span class="redspan">*</span></label>
                    <select class="form-control" name="sexe" onchange="OnValidatGender()" id="sexe" placeholder="Sex" data-bind="value: sexe" data-val="true" aria-required="true">
                        <option value="" selected disabled>Choose your gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select><span id="text-danger-Sexe" class="text-danger field-validation-valid" data-valmsg-for="sexe" data-valmsg-replace="true">
                    </span>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Please indicate your marital status</span></div>
                    <label class="control-label">Marital Status <span class="redspan">*</span></label>
                    <select class="form-control" name="situation_familiale" onchange="OnValidatSituation_f()" id="situation_familiale" placeholder="Marital Status" data-bind="value: situation_familiale" data-val="true" aria-required="true">
                        <option value="" selected disabled>Choose your marital status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="In civil union">In civil union</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widower">Widower</option>
                        <option value="separated">Separated</option>
                        <option value="Other">Other</option>
                    </select><span id="text-danger-situation_f" class="text-danger field-validation-valid" data-valmsg-for="situation_familiale" data-valmsg-replace="true">
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Enter the email address at which you can be contacted. The email address is required to complete the request. If you don't have an e-mail address, you may provide the e-mail address of a third party (for example, a family member, friend or colleague).</span></div>
                    <label class="control-label">Email address <span class="redspan">*</span></label>
                    <input type="email" class="form-control" onkeyup="OnValidatEmail()" autocomplete="nope" id="email" name="email" placeholder="Email address" data-bind="value: email" data-val="true" aria-required="true">
                    <span id="text-danger-email" class="text-danger field-validation-valid" data-valmsg-for="email" data-valmsg-replace="true">
                    </span>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Confirm here the email address you entered in the first Email field</span></div>
                    <label class="control-label">Email confirmation <span class="redspan">*</span></label>
                    <input type="email" class="form-control" onkeyup="OnValidatConfirmationEmail()" autocomplete="nope" id="emailconfirm" name="emailconfirm" placeholder="Retype email" equalto="#email" data-rule-email="true" data-msg-email="Please enter a valid email address." data-msg-equalto="Emails don't match, please enter the same value again." data-bind="value: emailconfirm" data-val="true" aria-required="true">
                    <span id="text-danger-confirmation-email" class="text-danger field-validation-valid" data-valmsg-for="emailconfirm" data-valmsg-replace="true">
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Indicate your date of birth. Date of birth is required to complete the request.</span></div>
                    <label class="control-label">Date of birth <span class="redspan">*</span></label>
                    <input type="date" class="form-control" onchange="OnValidatDate()" autocomplete="nope" id="date_naiss" name="date_naiss" placeholder="DD/MM/YYYY" lessthan="#date_inscr" data-msg-lessthan="Date must be less than or equal to today's date" lessthan16y="#date_inscr" data-msg-lessthan16y="Children under the age of 16 are exempt" data-bind="value: date_naiss" data-val="true" aria-required="true">
                    <span id="text-danger-date" class="text-danger field-validation-valid" data-valmsg-for="date_naiss" data-valmsg-replace="true">
                    </span>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Please confirm your date of birth</span></div>
                    <label class="control-label">Confirmation of birth date <span>*</span></label>
                    <input type="date" class="form-control" onchange="OnValidatConfirmationDate()" autocomplete="nope" id="confirm_date_naissance" name="confirm_date_naissance" placeholder="DD/MM/YYYY" equalto="#date_naiss" data-msg-equalto="The dates are different." data-bind="value: confirm_date_naissance" data-val="true" aria-required="true">
                    <span id="text-danger-confirmation-date" class="text-danger field-validation-valid" data-valmsg-for="confirm_date_naissance" data-valmsg-replace="true">
                    </span>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-xs-12 col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Indicate here the town, chief town, village or hamlet where you were born. The city, town, village or hamlet where you were born is required to complete the request. If you don't know the city where you were born, type UNKNOWN.</span></div>
                    <label class="control-label">Place of birth <span class="redspan">*</span></label>
                    <input type="text" class="form-control" onkeyup="OnValidatPlaceBirth()" autocomplete="nope" id="vill_naiss" name="vill_naiss" placeholder="Place of birth" data-bind="value: vill_naiss" data-val="true" aria-required="true">
                    <span id="text-danger-placeBirth" class="text-danger field-validation-valid" data-valmsg-for="vill_naiss" data-valmsg-replace="true">
                    </span>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Choose the country where you were born. Country of birth is required to complete the request.</span></div>
                    <label class="control-label">Country of birth <span class="redspan">*</span></label>
                    <select class="form-control" onchange="OnValidatCountry()" name="pays_naiss" id="pays_naiss" placeholder="Country of birth" data-bind="value: pays_naiss" data-val="true" aria-required="true">
                        <option value=""></option>
                        <option value="Australia">Australia</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Finland">Finland</option>
                        <option value="Iceland">Iceland</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Japan">Japan</option>
                        <option value="Malta">Malta</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Singapore">Singapore</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Sweden">Sweden</option>
                        <option value="UK">UK</option>
                        <option disabled="disabled">-------</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benign">Benign</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burma">Burma</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Central African Republic">Central African Republic</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech republic">Czech republic</option>
                        <option value="Democratic Republic of Congo">Democratic Republic of Congo</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="East Timor">East Timor</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Greece">Greece</option>
                        <option value="Green cap">Green cap</option>
                        <option value="Grenade">Grenade</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Ivory Coast">Ivory Coast</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Kosovo">Kosovo</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Laos">Laos</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall">Marshall</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia">Micronesia</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="North Korea">North Korea</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestine">Palestine</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                        <option value="Salvador">Salvador</option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon">Solomon</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Korea">South Korea</option>
                        <option value="South Sudan">South Sudan</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="St. Kitts and Nevis">St. Kitts and Nevis</option>
                        <option value="St. LUCIA">St. LUCIA</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Togo">Togo</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="UK">UK</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United States">United States</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Vatican">Vatican</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                    </select><span id="text-danger-country" class="text-danger field-validation-valid" data-valmsg-for="pays_naiss" data-valmsg-replace="true">
                    </span>
                </div>
            </div>
        </div>
        <div class="col-4 mb-5">
            <div class="review-exemple">
                <h5>SAMPLE NATIONAL ID CARD</h5>
                <img class="cardID-module" src="assets/images/national id card.png" alt="">
                <p>This sample national id card displays the information you will need from applicant's information personal. Information must be entered exactly as it appears in national id card. Enlarge image to see more information</p>
            </div>
        </div>
    </div>
    <div class="container text-center my-5 footer-form">
        <div class="row">
            <div class="col">
                <button id="prev disabled" disabled>Previous</button>
            </div>
            <div class="col-6">
                <strong>Step 1 of 6</strong>
            </div>
            <div class="col">
                <button id="next" type="button" onclick="run()">Next
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>
</div>

<div id="section-step2">
<summary id="summary">
    <h5>Address</h5>
</summary>
<div class="col-xs-12 mt-5">
    <div class="row">
        <div class="col-8">
            <div class="row">
                <div class="form-group col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">In this Line 1 Address field, enter your home address number and street. Don't include city and state in this field. Line 1 address is required to complete the application.</span></div>
                    <label class="control-label">Address line 1 <span class="redspan">*</span></label>
                    <input type="text" class="form-control" onkeyup="OnValidatAdresseLine()" autocomplete="nope" id="adresseligne1" name="adresseligne1" placeholder="Address line 1" data-bind="value: adresseligne1" data-val="true" aria-required="true">
                    <span id="text-danger-adresse" class="text-danger field-validation-valid" data-valmsg-for="adresseligne1" data-valmsg-replace="true">
                    </span>
                </div>
                <div class="form-group col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Enter the postal code of your city</span></div>
                    <label class="control-label">Postcode <span class="redspan">*</span></label>
                    <input type="text" class="form-control" onkeyup="OnValidatPostcode()" autocomplete="nope" id="cp" name="cp" placeholder="Postcode" data-bind="value: cp" data-val="true" aria-required="true">
                    <span id="text-danger-postcode" class="text-danger field-validation-valid" data-valmsg-for="cp" data-valmsg-replace="true">
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="form-group col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Indicate here the city, the chief town, the village or the hamlet. The city, town, village or hamlet is required to complete the application.</span></div>
                    <label class="control-label">Town or city <span class="redspan">*</span></label>
                    <input type="text" class="form-control" onkeyup="OnValidatCity()" autocomplete="nope" id="ville" name="ville" placeholder="Town or city" data-bind="value: ville" data-val="true" aria-required="true">
                    <span id="text-danger-city" class="text-danger field-validation-valid" data-valmsg-for="ville" data-valmsg-replace="true">
                    </span>
                </div>

                <div class="form-group col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Indicate your country of residence. The country is required to complete the application.</span></div>
                    <label class="control-label">Country <span class="redspan">*</span></label>
                    <select class="form-control" name="pays" onkeyup="OnValidatCountry2()" id="pays" placeholder="Country" data-val="true" aria-required="true">
                        <option value="" selected disabled>select your country</option>
                        <option value="Australia">Australia</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Finland">Finland</option>
                        <option value="Iceland">Iceland</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Japan">Japan</option>
                        <option value="Malta">Malta</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Singapore">Singapore</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Sweden">Sweden</option>
                        <option value="UK">UK</option>
                        <option disabled="disabled">-------</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benign">Benign</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burma">Burma</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Central African Republic">Central African Republic</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech republic">Czech republic</option>
                        <option value="Democratic Republic of Congo">Democratic Republic of Congo</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="East Timor">East Timor</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Greece">Greece</option>
                        <option value="Green cap">Green cap</option>
                        <option value="Grenade">Grenade</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Ivory Coast">Ivory Coast</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Kosovo">Kosovo</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Laos">Laos</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall">Marshall</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia">Micronesia</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="North Korea">North Korea</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestine">Palestine</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                        <option value="Salvador">Salvador</option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon">Solomon</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Korea">South Korea</option>
                        <option value="South Sudan">South Sudan</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="St. Kitts and Nevis">St. Kitts and Nevis</option>
                        <option value="St. LUCIA">St. LUCIA</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Togo">Togo</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="UK">UK</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United States">United States</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Vatican">Vatican</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                    </select><span id="text-danger-country2" class="text-danger field-validation-valid" data-valmsg-for="pays" data-valmsg-replace="true">
                    </span>

                </div>
            </div>

            <div class="row">
                <div class="form-group col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">At least one telephone number is required to complete the application. If you don't have a telephone number, you can give an alternative telephone number of a third party belonging to a contact point (for example a family member, friend or colleague). The telephone number is required to complete the application.</span></div>
                    <label class="control-label">Mobile phone <span class="redspan">*</span></label>
                    <input type="text" class="form-control" onkeyup="OnValidatPhone()" autocomplete="nope" id="tel_portabl" name="tel_portabl" placeholder="Mobile phone" pattern="^[ ()+]*([0-9][ ()+]*)*" data-val-regex="" data-msg-pattern="The phone number can only contain (numbers, spaces, (, ), +)" data-bind="value: tel_portabl" data-val="true" aria-required="true">
                    <span id="text-danger-phone" class="text-danger field-validation-valid" data-valmsg-for="tel_portabl" data-valmsg-replace="true">
                    </span>
                </div>
                <div class="form-group col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">At least one telephone number is required to complete the application. If you do not have a telephone number, you can give an alternative telephone number of a third party belonging to a contact point (for example a family member, friend or colleague). The telephone number is required to complete the application.</span></div>
                    <label class="control-label">Landline Phone <span> </span></label>
                    <input type="text" class="form-control" onkeyup="OnValidatLandlinephone()" autocomplete="nope" id="tel_fix" name="tel_fix" placeholder="Landline" pattern="^[ ()+]*([0-9][ ()+]*)*" data-val-regex="" data-msg-pattern="The phone number can only contain (numbers, spaces, (, ), +)" data-bind="value: tel_fix" data-val="true">
                    <span id="text-danger-landlinephone" class="text-danger field-validation-valid" data-valmsg-for="tel_fix" data-valmsg-replace="true">
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="form-group">
                    <div class="form-group col-sm-6">
                        <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Indicate your planned date of travel (as a precaution, a minimum of five days before your departure date is recommended for all e-Authorization requests)</span></div>
                        <label class="control-label">Date of departure <span> </span></label>
                        <input type="text" class="form-control" onkeyup="" id="date_arriv" name="date_arriv" placeholder="(Optional information)" data-bind="value: date_arriv" data-val="true">
                        <span id="text-danger-datedeparture" class="text-danger field-validation-valid" data-valmsg-for="date_arriv" data-valmsg-replace="true">
                        </span>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-4 mb-5">
            <div class="review-exemple">
                <h5>SAMPLE NATIONAL ID CARD</h5>
                <img class="cardID-module" src="assets/images/national id card.png" alt="">
                <p>This sample national id card displays the information you will need from applicant's information personal. Information must be entered exactly as it appears in national id card. Enlarge image to see more information</p>
            </div>
        </div>
    </div>
    <div class="container text-center my-5 footer-form">
        <div class="row">
            <div class="col">
                <button id="prev1" onclick="prevStep2()">Previous</button>
            </div>
            <div class="col-6">
                <strong>Step 2 of 6</strong>
            </div>
            <div class="col">
                <button id="next1" type="button" onclick="run2()">Next
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>

</div>

<div id="section-step3">
<summary id="summary">
    <h5>Passport information</h5>
</summary>
<div class="col-xs-12 mt-5">
    <div class="row">
        <div class="col-8">
            <div class="row">
                <div class="form-group col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Enter your passport number as it appears on your passport. The passport number may contain numbers and/or letters (9 maximum). Make a clear distinction between the number 0 and the letter O. The passport number is required to complete the application.</span></div>
                    <label class="control-label">Passport Number <span class="redspan">*</span></label>
                    <input type="text" class="form-control" onkeyup="OnValidatPassportNumber()" autocomplete="nope" id="num_pass" name="num_pass" placeholder="" pattern="^[a-zA-Z0-9]{3,9}$" data-val-regex="" data-msg-pattern="The passport number may contain numbers and/or letters (9 maximum, 3 minimum)" data-bind="value: num_pass" data-val="true" aria-required="true">
                    <span id="text-danger-passport" class="text-danger field-validation-valid" data-valmsg-for="num_pass" data-valmsg-replace="true">
                    </span>
                </div>
                <div class="form-group col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Enter your passport number as it appears on your passport. The passport number may contain numbers and/or letters (9 maximum). Make a clear distinction between the number 0 and the letter O. The passport number is required to complete the application.</span></div>
                    <label class="control-label">Confirmation of passport number <span class="redspan">*</span></label>
                    <input type="text" class="form-control" autocomplete="nope" onkeyup="OnValidatConfirmationPassportNumber()" id="confirm_num_pass" name="confirm_num_pass" placeholder="" equalto="#num_pass" data-bind="value: confirm_num_pass" data-val="true" aria-required="true">
                    <span id="text-danger-confirmation-passportNumber" class="text-danger field-validation-valid" data-valmsg-for="confirm_num_pass" data-valmsg-replace="true">
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Indicate the date your passport was issued, as it appears in your passport in the Date of Issue field. The date of issue of the passport is required to complete the application.</span></div>
                    <label class="control-label">Date of issue <span class="redspan">*</span></label>
                    <input type="date" class="form-control" autocomplete="nope" onchange="OnValidatDateDelivrance()" id="date_delivrance" name="date_delivrance" placeholder="DD/MM/YYYY" data-bind="value: date_delivrance" data-val="true" aria-required="true">
                    <span id="text-danger-date-delivrance" class="text-danger field-validation-valid" data-valmsg-for="date_delivrance" data-valmsg-replace="true">
                    </span>
                </div>
                <div class="form-group col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Indicate the expiry date of your passport, as it appears in your passport in the Expiry Date field. The expiry date of the passport is required to complete the application.</span></div>
                    <label class="control-label">Expiration date <span class="redspan">*</span></label>
                    <input type="date" class="form-control" autocomplete="nope" id="date_exp" onchange="OnValidatDateExpiration()" name="date_exp" placeholder="DD/MM/YYYY" greaterthan="#date_delivrance" data-msg-greaterthan="Passport 'expiration date' must be greater than the 'issuance date'" data-msg-passmoisexp="Your passport must be valid at least 6 months from the date of entry." data-bind="value: date_exp" data-val="true" aria-required="true">
                    <span id="text-danger-date-expiration" class="text-danger field-validation-valid" data-valmsg-for="date_exp" data-valmsg-replace="true">
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="form-group col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Indicate the country of your nationality as it appears in your passport. The country that issued the passport must complete the application.</span></div>
                    <label class="control-label">Issuing Country <span class="redspan">*</span></label>
                    <select class="form-control" value="" name="pays_emission" id="pays_emission" onchange="OnValidatPaysEmission()" placeholder="" data-bind="value: pays_emission" data-val="true" aria-required="true">
                        <option value="" selected disabled>Select country</option>
                        <option value="Australia">Australia</option>
                        <option value="Czech republic">Czech republic</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Finland">Finland</option>
                        <option value="Iceland">Iceland</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Japan">Japan</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Norway">Norway</option>
                        <option value="Poland">Poland</option>
                        <option value="Singapore">Singapore</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Sweden">Sweden</option>
                        <option value="UK">UK</option>
                        <option disabled="disabled">-------</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Chile">Chile</option>
                        <option value="Czech republic">Czech republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Greece">Greece</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Malta">Malta</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Norway">Norway</option>
                        <option value="Portugal">Portugal</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Spain">Spain</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="UK">UK</option>
                    </select><span id="text-danger-pays-emission" class="text-danger field-validation-valid" data-valmsg-for="pays_emission" data-valmsg-replace="true">
                    </span>
                </div>
                <div class="form-group col-sm-6">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Choose the country of which you are a national, as it appears in your passport. The country of which you are a national is required to complete the application.</span></div>
                    <label class="control-label">Citizenship <span class="redspan">*</span></label>
                    <select class="form-control" name="nationalite" id="nationalite" placeholder="" onchange="OnValidatNationalite()" data-msg-notrequiredradiovalue="Children with an 8-digit German passport are not eligible." data-bind="value: nationalite" data-val="true" aria-required="true">
                        <option value=""></option>
                        <option value="Australia">Australia</option>
                        <option value="Czech republic">Czech republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Finland">Finland</option>
                        <option value="Greece">Greece</option>
                        <option value="Iceland">Iceland</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Japan">Japan</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Norway">Norway</option>
                        <option value="Singapore">Singapore</option>
                        <option value="South Korea">South Korea</option>
                        <option value="UK">UK</option>
                        <option disabled="disabled">-------</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Chile">Chile</option>
                        <option value="Czech republic">Czech republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Greece">Greece</option>
                        <option value="Iceland">Iceland</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Malta">Malta</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Norway">Norway</option>
                        <option value="Portugal">Portugal</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Spain">Spain</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="UK">UK</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Chile">Chile</option>
                        <option value="Czech republic">Czech republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Greece">Greece</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Malta">Malta</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Norway">Norway</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Spain">Spain</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="UK">UK</option>
                    </select><span id="text-danger-Nationalite" class="text-danger field-validation-valid" data-valmsg-for="nationalite" data-valmsg-replace="true">
                    </span>
                </div>

            </div>

            <div class="row">
                <div class="form-group col-sm-6" style="/* display: none; */">
                    <div class="wrapper"><i class="fas fa-question-circle hlp"></i><span class="tooltip">Please enter your national ID number</span></div>
                    <label class="control-label">National identity number <span class="redspan">*</span></label>
                    <input type="text" class="form-control ignore" autocomplete="nope" id="numero_identite" onkeyup="OnValidatNumeroIdentite()" name="numero_identite" placeholder="National identity number" data-bind="value: numero_identite" data-val="true">
                    <span id="text-danger-numero-identite" class="text-danger field-validation-valid" data-valmsg-for="numero_identite" data-valmsg-replace="true">
                    </span>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="review-exemple">
                <h5>SAMPLE PASSEPORT</h5>
                <img class="cardID-module" src="assets/images/passeport id card.jpg" alt="">
                <p>This sample national id card displays the information you will need from applicant's information personal. Information must be entered exactly as it appears in national id card. Enlarge image to see more information</p>
            </div>
        </div>
    </div>
</div>
<div class="container text-center my-5 footer-form">
    <div class="row">
        <div class="col">
            <button id="prev2" onclick="prevStep3()">Previous</button>
        </div>
        <div class="col-6">
            <strong>Step 3 of 6</strong>
        </div>
        <div class="col">
            <button id="next2" onclick="run3()" type="submit">Next
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
                </svg>
            </button>
        </div>
    </div>
</div>
</div>