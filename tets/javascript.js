// var inputs = document.getElementById('rowInput7').getElementsByTagName('input');
// var input = inputs.getAttribute("value");

// // if( === ""){
// //   console.log('text')
// // }
// console.log(input);

//  // true

// var matches = [];
// var rowInput7 = document.getElementById('rowInput7');
var check1 = document.getElementById('rowInput7').classList.contains("display-block"); 
var inputs = document.getElementById('rowInput7').getElementsByTagName('input');
if (check1 == true) {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type.toLowerCase() == "text") {
            if (inputs.value == "") {
                textDangerEmail2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg>Email is required';
                textDangerEmail2.classList.add("runERRMSG");
                document.getElementById('rowInput7').classList.add("inputError");
        
                textDangerEmail2.classList.remove("runSUCSSMSG");
                document.getElementById('rowInput7').classList.remove("inputValid");
                document.getElementById('rowInput7').classList.remove('verifedinput');
        
                return false;
            }

            if (!inputs.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {

                textDangerEmail2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: .8em; fill: red;" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg> Special character not supported';
                textDangerEmail2.classList.add("runERRMSG");
                document.getElementById('rowInput7').classList.add("inputError");
        
                textDangerEmail2.classList.remove("runSUCSSMSG");
                document.getElementById('rowInput7').classList.remove("inputValid");
                document.getElementById('rowInput7').classList.remove('verifedinput');
        
                return false;
            }
        
            document.getElementById('rowInput7').classList.add("inputValid");
            textDangerEmail2.classList.add("runSUCSSMSG");
            document.getElementById('rowInput7').classList.add('verifedinput');
            textDangerEmail2.innerHTML = "";
        
            return true; 
        }
    }
}else{
    console.log("error");
}



// console.log(inputs[1].style.display);

