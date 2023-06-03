// Requirements
// TDD - create tests for a module that will:
// obscure credit card number except the last 4 digits
// Test make sure the function obscures credit card numbers that are between 
// the length of 12 and 16 digits
// input: 123456789012 or input: 1234567890123456
// output: XXXXXXXX9012 or output: XXXXXXXXXXXX3456

const obscure = require("./obscure");

// create a module that takes in prices in an array and returns the total



describe("Credit Card Obscure Test", () => {
    test("Input should result in twelve obscured digits except the last four",() => {
        //test to ensure 16-digit card number returns 12 obscured and 4 visible
        expect(obscure("1234567890123456")).toBe("XXXXXXXXXXXX3456");
        //test to ensure 16-digit card number does not return unobscured
        expect(obscure("1234567890123456")).not.toBe("1234567890123456");
    })
    test("Input should result in eight obscured digits except the last four", () => {
        //test to ensure 12-digit card number returns 8 obscured and 4 visible
        expect(obscure("123456789012")).toBe("XXXXXXXX9012");
        //test to ensure 12-digit card number does not return unobscured
        expect(obscure("123456789012")).not.toBe("123456789012");
    })
    test("Input of more than sixteen, or less then twelve, digits should return 'Invalid Credit Card Number'", () => {
        //test to ensure an entry of more than 16 digits returns as invalid
        expect(obscure("12345678901234567")).toBe("Invalid Credit Card Number");
        //test to ensure an entry of more than 16 digits does not return unobscured
        expect(obscure("12345678901234567")).not.toBe("12345678901234567");
        //test to ensure an entry of more than 16 digits does not return a result
        expect(obscure("12345678901234567")).not.toBe("XXXXXXXXXXXXX4567");
        //test to ensure an entry of less than 12 digits returns as invalid
        expect(obscure("12345678901")).toBe("Invalid Credit Card Number");
        //test to ensure an entry of more than 12 digits does not return unobscured
        expect(obscure("12345678901")).not.toBe("12345678901");
        //test to ensure an entry of more than 16 digits does not return a result
    })
});