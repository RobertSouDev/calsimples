let input = document.getElementById('inputCalc');

let result = document.getElementById('resultCalc');

document.addEventListener('keypress', function(event) {
    if(event.key === 'Enter'){
        const resultCalc = eval(input.value);

        result.innerText = resultCalc;
    }
})