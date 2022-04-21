//Creates a object to keep track of values
const Calculator = {
    Display_Value: '0',
    First_Operand: null,
    Wait_second_Operand: false,
    operator: null,
};

//this modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_second_Operand } = Calculator;
    if (Wait_second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//This function manages decimal points
function Input_Decimal(dot) {
    if (Calculator.Wait_second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

//This function manages operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    const Value_of_Input = parseFloat(Display_Value);
    if (operator && Calculator.Wait_second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(0);
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

//Resets all varaible for the next use of the calculator.
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_second_Operand = false;
    Calculator.operator = null;
}

//this function updates the screen with tthe contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

const keys = document.querySelector('.calculator-keys');
keys. addEventListener('click', (event) => {
    const {target } = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    //ensures that AC clears the number from the Calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})