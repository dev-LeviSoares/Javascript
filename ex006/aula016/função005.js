function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))



/*
    5! = 5 x 4 x 3 x 2 x 1
    5! = 5 x 4!     O fatorial de 5 é 5 x o fatorial de 4!  (5 x (4*=24) = 120)

    n! = n x (n-1)! O fatorial de n! é n-1!(n menos 1 fatorial)
    1! = 1
*/