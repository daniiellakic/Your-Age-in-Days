// Age in days function
function ageInDays() {
    var birthYear = prompt ( 'What year were you born? '); 
    var ageInDays = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}

// Reset function
function reset(){
    document.getElementById('ageInDays').remove();

}


