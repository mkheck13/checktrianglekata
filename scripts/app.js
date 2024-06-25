// A triangle is called an equable triangle if its area equals its perimeter.
// Return true, if it is an equable triangle, else return false. You will be provided with the length of sides of the triangle. Happy Coding!

// so we first need to figure out how to get the area and perimeter
// had to look up the math on both of those
// the perimeter is adding the three sides together then dividing that by 2
// the area is first subtracting the perimeter from each of the sides individually. Then multipling those together. Then squaring that number to get the area. This hurts my head.
// finally we return the perimeter multiplied by two, if it equals the area its true otherwise its false.
function equableTriangle(a,b,c){
    const per = (a + b + c) / 2;
    const area = Math.sqrt(per * (per - a) * (per - b) * (per - c));

    return per * 2 == area;
}