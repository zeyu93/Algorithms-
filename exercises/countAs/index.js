function repeatedString(s, n) {
    if(!s.includes('a')) return 0
    let remainder = n % s.length  //remainder is the length of substring, count remaining a 's in this substring
    let result = n - remainder
    let remainingString = s.substring(0,remainder);
}


repeatedString('abc',10)