///------------Multi Table--------------------////

const num = parseInt(prompt('Enter an integer'))

for (let i =1 ; i < 11 ; i++){
        let multi = `${num}* ${i} = ${i * num}`
        document.write(`${multi} <br/>`)
        
    }

///----------Kilometer to Mile Convert---------///

function kmToMile(num){
    let result = num * 0.621371192;
    return document.write(result , 'miles')
}



///---------------REverse Word-----------//

function reverse(s){
    return s.split("").reverse().join("");
}

console.log(reverse('ibrahim'))//


//--------Celcius_to_Fahrenheit--------/////7

function temprature() {
    while (true){
        let choose = prompt('Welcome to Cell to Fahre \n 1-) Cell to Fahre \n 2-) Fahre to Cell \n 3-) Exit')
            if (choose == 1){
                let choose1 = prompt('Please Enter Cell Value')
                let result=  cellToFahre(choose1) 
                document.write(result)
                break    
                
            }
            else if (choose == 2){
                let choose2 = prompt('Please Enter Fahre Value')
                let result=  fahreToCell(choose2) 
                document.write(result)
                break       
        
            }
            else if (choose == 3){
                document.write('<h1>Have a nice day</h1>')
                break
        
            }
    }
    
}

function cellToFahre(params){
    
    return `<h1>${params}°C = ${(params * 1.8 +32).toFixed(2)}°F</h1> `
}
function fahreToCell(params){
    
    return `<h1>${params}°F = ${((params-32)/1.8).toFixed(2)}°C</h1>`
}
temprature()





//-----------Find Most Common word and which index ist in?------/////
function commonIndx(){
    let stra=prompt('Write a something')
    
    var b =[];
    var count = 0;
    let maxChar = '';
    var stran = stra.toLowerCase()
    var arr=stran.split(' ')

    for(i of arr){
        let missingLength = stra.split(i).length
        if(missingLength > count){
            maxChar=i
            count=missingLength
            2
        }
    }
    for (var i=0;i<arr.length;i++){
        if (arr[i]===maxChar){
        b.push(i)
    }
}
return document.write(`Most common character is : "${maxChar.toLocaleUpperCase()}"<br><hr>Index numbers are : ${b} `)
}
commonIndx()


/////------Find Fibonacci numbers between two given numbers---/////

function fibonacci(min ,max) {
    const fibonacci=[];
   
    while (min <= max) {
        fibonacci.push(min);
        if (fibonacci.length < 2) {
            min+=min           
        }
        else{
            min=fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2]
        }
        
    }
    return fibonacci

}

