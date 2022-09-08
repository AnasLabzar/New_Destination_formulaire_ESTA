// const questionusa7 = document.querySelector('input[name=questionusa7]:checked').value;
// console.log(questionusa7);
// const questionusa9 = document.querySelector('input[name=questionusa9]:checked').value;


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