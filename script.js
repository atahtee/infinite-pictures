function ageInDays() {
    var birthYear = prompt('What year were you born?...... Good friend?');
    var ageInDayss = (2018 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.querySelector('flex-box-result').appendChild(h1); 
}   
