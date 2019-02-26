const name = 'changpu';
const age = 20;
const job = 'student';
const city = 'tamsui';
let html;

// Without template strings (es5)

html='<ul>'+
     '<li>Name:' +name+'</li>'+
     '<li>age:' +age+'</li>'+   
     '<li>job:' +job+'</li>'+
     '<li>city:' +city+'</li>'+ 
         '</ul';

document.body.innerHTML =html;

// With template strings (es6)

function hello(){
    return 'hello';
}

html=`
<ul>
<li>Name: ${name}</li>
<li>age: ${age}</li>
<li>job: ${job}</li>
<li>city: ${city}</li>
<li>Name: ${(age>30 ?'over 30': 'under 30')}</li>
<li> ${hello()}</li>
</ul>
`

document.body.innerHTML =html;