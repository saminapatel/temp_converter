var input = document.querySelector('.temp-f');

document.querySelector('.temp-img').style.display = 'none';
document.querySelector('.temp-c').style.display = 'none';

document.querySelector('.submit').addEventListener('click', function(){

    var tempC = Math.round((input.value - 32) * 5/9);
    document.querySelector('.temp-c').style.display = 'block';
    document.querySelector('.temp-c').textContent = tempC + ' Degrees Celsius';

    document.querySelector('.temp-img').style.display = 'block';

    if(tempC <= 0){
        document.querySelector('.temp-img').src = 'freeze.jpg';
    } 
    else if(tempC > 0 && tempC < 40){
        document.querySelector('.temp-img').src = 'roomtemp.jpg';
    }
    else {
        document.querySelector('.temp-img').src = 'hot.jpg';
    }

});