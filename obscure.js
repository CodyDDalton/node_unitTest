//takes a string
const obscure = (string) => {
    //if string is greater than 16 or less than 12 returns 'Invalid Credit Card Number'
    if(string.length > 16 || string.length < 12){
        return "Invalid Credit Card Number"
    } else {
        //cuts off last four digits of the string and stores them in a variable
        let visible = string.slice(-4);
        //empty variable for the obscured digits
        let hidden = '';
        // loop to add an X digit to the hidden variable
        // for each remaining string digit
        for(let i = (string.length) - 4; i > 0; i--){
            hidden += 'X';
        }
        //return the hidden plus the visible credit card digits
        return hidden+visible;
        }
    }
    
module.exports = obscure;