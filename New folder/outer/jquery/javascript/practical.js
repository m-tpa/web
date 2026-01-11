let a=1
console.log(a)
if(true){
    let a=11
    console.log(a)
}
console.log(a)

var fruits= ['Apple', 'Mango', 'Banana']//Object def key and value
console.log(fruits)

var fruit={
    Apple:200 ,
    Mango:150,
    Banana:50,

}
console.log(fruit)
const c=3
console.log(c)
if(true){
    const d=4
    console.log(d)
}
console.log(c)

//Operator
//Arithematic operator
// var b = parseInt(prompt("Enter a number"))
// var d = parseInt(prompt("Enter Second Number"))//ask user to enter a number
// console.log(b+d)//print
// console.log(b-d)
// console.log(b/d)
// console.log(b%d)
// console.log(b**d)
// console.log(b*d)
debugger;
for  ( var s=2; s<4; s++){
    document.write(`<h2>*</h2>`)
    document.write(`<h2>**</h2>`)
    document.write(`<h2>***</h2>`)
    document.write(`<h2>****</h2>`)
    document.write(`<h2>****</h2>`)
}

document.write(`<select>`)

for(var n='1'; n<8; n++){
document.write(`<option>${n} </option>`)
}
document.write(`</select>`)

document.write(`<select>`)
for (var q=1; q<13; q++){
    document.write(`<option> ${q} </option>`)
}
document.write(`</select>`)


var month=11
switch(month){
    case 1:document.write("Jan");break
    case 2:document.write("Feb");break
    case 3:document.write("Mar");break
    case 4:document.write("Apr");break
    case 5:document.write("May");break
    case 6:document.write("June");break
    case 7:document.write("July");break
    case 8:document.write("Aug");break
    case 9:document.write("Sep");break
    case 10:document.write("Oct");break
    case 11:document.write("Nov");break
    case 12:document.write("Dec");break
    default: document.write("Not specified")
}

