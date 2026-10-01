let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML.trim();
        
        if (value == '=') {   
            string = eval(string);
            display.value = string;
        }  
        
        else if (value == 'AC') {
            string = "";
            display.value = string;
        }
        else if (value == 'DEL') {
            string = string.slice(0, -1);
            display.value = string;
        }
        else{
            string+= value;
            display.value = string;
        }
        
    });
});
