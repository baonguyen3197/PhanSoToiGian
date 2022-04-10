/*function reduce(numerator, denominator) {
    var gcd = function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    };
    gcd = gcd(numerator, denominator);
    if (denominator == 0) {
        return -1;
    }
    return [numerator / gcd, denominator / gcd];
}

console.log(reduce(9, 7));*/

function UCLN(tu, mau) {
    let temp;
    while (mau != 0) {
        temp = tu % mau;
        tu = mau;
        mau = temp;
    }
    return tu;
}

function phanSoToiGian(tu, mau) {
    if (mau == 0) {
        return -1;
    } else {
        return [tu / UCLN(tu, mau), mau / UCLN(tu, mau)];
    }
}

console.log(phanSoToiGian(15, 25));