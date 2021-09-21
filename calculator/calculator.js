let result_values = []
let start = () => {
    //Declare empty arrays to store all the input values
    let x_values = []
    let op_values = []
    let y_values = []
    let cont = true
    //Prompt the user until they press cancel
    while(cont) {
        let x = prompt("Value of X")
        x_values.push(x)
        let op = prompt("Operator")
        op_values.push(op)
        let y = prompt("Value of Y")
        y_values.push(y)
        cont = confirm("Continue?")
}

let num_values = x_values.length

//Write a table with a border of 4 and create a row
let table = document.createElement('table');
table.setAttribute("class", "table");
table.setAttribute("border","4")
let row = table.insertRow()

//Table Header
//Fill that created row with 4 cells corresponding to x, operator, y, and result
let x = row.insertCell()
x.textContent = "X"
x.setAttribute("class","th")

let op = row.insertCell()
op.textContent = "op"
op.setAttribute("class","th")

let y = row.insertCell()
y.textContent = "Y"
y.setAttribute("class","th")

let result = row.insertCell()
result.textContent = "result"
result.setAttribute("class","th")


//Table content
//Loop through all the inputs and create and populate rows with those inputs
for(let i = 0; i < num_values; i++) {
    let row = table.insertRow()

    let x = row.insertCell()
    x.textContent = x_values[i]

    let op = row.insertCell()
    op.textContent = op_values[i]
    op.setAttribute("style","background-color: #ffe3b4;")


    let y = row.insertCell()
    y.textContent = y_values[i]


    //Calculate result
    let result = row.insertCell()
    result.textContent = calculate(x_values[i],op_values[i],y_values[i])

    
}

//Add row of inputs to the DOM and create second table
document.body.appendChild(table);
secondTable()

}

//Construct second table
let secondTable = () => {
let table = document.createElement('table');
table.setAttribute("class", "table");
table.setAttribute("border","4")
let row = table.insertRow()

//Table header
let min = row.insertCell()
min.textContent = "Min"
min.setAttribute("class","th")

let max = row.insertCell()
max.textContent = "Max"
max.setAttribute("class","th")

let average = row.insertCell()
average.textContent = "Average"
average.setAttribute("class","th")

let total = row.insertCell()
total.textContent = "Total"
total.setAttribute("class","th")

//Second Table Content
let content_row = table.insertRow()

//Find the minimum value in the table
let min_content = content_row.insertCell()
min_content.textContent = Math.min.apply(Math,result_values)

//Find the maximum value in the table
let max_content = content_row.insertCell()
max_content.textContent = Math.max.apply(Math,result_values)

//Find the average of the table
let avg_content = content_row.insertCell()
avg_content.textContent = sumValues(result_values) / result_values.length

//Find the total of the table
let total_content = content_row.insertCell()
total_content.textContent = sumValues(result_values)

document.body.append(table)

 }


 //Regex to determine if value is a number
let isNumeric = (value) => {
    return /^-?\d+$/.test(value);
}

//If operator is in list of acceptable operators
//and if x and y inputs are valid regex numbers
//then evaluate the expression
let calculate = (x, op, y) => {
    valid_ops = ['+','-','%','/','*']
    if(valid_ops.includes(op) && isNumeric(x) && isNumeric(y)) {
        let evaluation = eval((x + op + y))
        result_values.push(evaluation)
        return(evaluation) 
    }
    //If the operator is invalid print computation error
    else if(!valid_ops.includes(op)) {
        return("Computation Error")
    }
    //otherwise print wrong number
    else{
        return("Wrong Input Number")
    }
}

//sum the values of the result array
let sumValues = (arr) => {
    sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i])
        
    }
    return sum;
}
