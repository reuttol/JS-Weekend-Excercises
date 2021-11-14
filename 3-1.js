function nb_year(p0, percent, aug, p){
    let pop = p0;
    let year = 0;
    while(pop < p){
        pop = pop + Math.floor(pop*(percent/100)) + aug;
        year++;
    }
    return year;
}

console.log(nb_year(1000, 2, 50, 1200));
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));