const {
  digitToRoman,
  romanToDigit
  } = require("../js_kata_exercises/rock_kata");

  
  describe("digitToRoman", () => {
    test("returns a Roman numeral(1 digit)", () => {
        expect(digitToRoman(1)).toBe("I") ;
        expect(digitToRoman(2)).toBe("II") ;
    })
    test("returns a Roman numeral(2 digits)", () => {
      expect(digitToRoman(40)).toBe("XL") ;//special test case 40 to add '' in dictionary
      expect(digitToRoman(75)).toBe("LXXV") ;
  })
    test("returns a Roman numeral( 3 digits)", () => {
      expect(digitToRoman(369)).toBe("CCCLXIX") ;
      expect(digitToRoman(448)).toBe("CDXLVIII");
     })
    test("returns a Roman numeral ( 4 digits)", () => {
      expect(digitToRoman(2751)).toBe("MMDCCLI");
      expect(digitToRoman(1998)).toBe("MCMXCVIII");
     })
  });

  describe("romanToDigit", () => {
    test("returns a digit for a Roman numeral(of one character string)", () => {
        expect(romanToDigit("V")).toBe(5) ;
        expect(romanToDigit("X")).toBe(10) ;
        expect(romanToDigit("XI")).toBe(11);
    })
    test("returns a digit for a Roman numeral(of two character string)", () => {
      expect(romanToDigit("MC")).toBe(1100) ;
      expect(romanToDigit("IX")).toBe(9) ;
      expect(romanToDigit("MD")).toBe(1500) ;
  })
  test("returns a digit for a Roman numeral((of more than two long string)", () => {
    expect(romanToDigit("CCCLXIX")).toBe(369) ;
    expect(romanToDigit("CDXLVIII")).toBe(448) ;
    expect(romanToDigit("MCMXCVIII")).toBe(1998) ;
    expect(romanToDigit("MMDCCLI")).toBe(2751)
})

  
  });
