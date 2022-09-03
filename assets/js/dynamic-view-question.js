function dynamic_Question(){
    const questionNone = document.getSelection('.questionNone');
    const bindSpan = document.getSelection('.bind-span');
    console.log(questionNone);
    console.log(bindSpan);
    
    if (bindSpan === '') {
        questionNone.style.display = 'none';
    
        return false;
    }
    
    questionNone.style.display = 'block';
    return true;
}

