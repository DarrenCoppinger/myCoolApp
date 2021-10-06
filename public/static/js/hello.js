var salary = parseInt(
    prompt("Please enter your salary","Type here")
);

var statement;
if(salary > 500000){
   statement = "You are wealthy!";
}else if(salary < 100000){
    statement = "You are poor!";
} else {
    statement = "You are average!";
}

alert(statement);

//
// var Monexpenses = parseInt(
//     prompt("Please enter your monthly expenses","Type")
// );
// var AnnualExpenses = Monexpenses*12;
//
// var netIncome = salary- AnnualExpenses;
//
// var maxBorrow = netIncome*3.5;
//
// alert("Max Mortgage Amount "+maxBorrow);

// var age = 20;
// alert(age);

//
// var A = 20;
// var B = 20;
// var C = 20;
// var D = 20;
//
// var result = A*B+C*D
//
// alert(result);
