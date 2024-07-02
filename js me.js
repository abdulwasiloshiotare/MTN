//var firstname="abdul"
//var lastname="wasil"
//let fullname=firstname+""+lastname;
//document.write(fullname);
//console.log(fullname.length);
//document.write(firstname.charCodeAt(3));

//var a=12
//var b=20
//var c="50"
//d=c.toString()
//sum=a+b+d
//document.write(sum)

var text="<ul>"
var states=["abuja","edo","delta","ebony","abia","bayelsa","kano","lagos","kastina","nasarawa"];
var statesLen=states.length
var a=0;
for(a; a<statesLen; a++){
    console.log(states[a])
    text+="<li>"+states[a]+"</li>"
}
text+="</ul>"
document.write(text)


//console.log(states[5])


//states.toString()
//document.write(states)

//states[state.lenght-2]
//document.write(state)

var person={
    name:"mary",
    height:"6m",
    sex:"male",
    weight:"78kg"
}
document.write(person.name)

var table="<table>"
table +="<tr>"
table +="<th>"
table +="property name";
table +="</th>"
table +="<th>"
table +="property Value";
table +="</th>"
table +="</tr>"
table +="<tr>"
table +="<td>"
table +="name"
table +="</td>"
table +="<td>"+person.name+"</td>"
table +="</tr>"
table +="</tr>"
table +="<tr>"
table +="<td>"
table +="height"
table +="</td>"
table +="<td>"+person.height+"</td>"
table +="</tr>"
table +="</tr>"
table +="<tr>"
table +="<td>"
table +="sex"
table +="</td>"
table +="<td>"+person.sex+"</td>"
table +="</tr>"
table +="</tr>"
table +="<tr>"
table +="<td>"
table +="weight"
table +="</td>"
table +="<td>"+person.weight+"</td>"
table +="</tr>"
document.write(table)



var cars =[
{name:"toyota",model:"2019"},
{name:"volve",model:"2018"},
{name:"toyota",model:"2019"}
]

document.write(cars[0].name)
document.write(cars[0].model)

document.write(cars[1].model)
document.write(cars[1].model)

document.write(cars[2].model)
document.write(cars[2].model)


var jsobject=[{
    person:{name:"mary",height:"6m",sex:"male",weight:"78kg"},
    cars:{name:"toyota",model:"2019",name:"volve",model:"2018",name:"toyota",model:"2019"},
    }]


    document.write(jsobject[0].person.name)
    document.write(jsobject[0].person.height)

    
