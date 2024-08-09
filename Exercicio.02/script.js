// This kata is about multiplying a Tgiven number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = (n) =>{
    return n *(n %2? 9 : 8);
}
