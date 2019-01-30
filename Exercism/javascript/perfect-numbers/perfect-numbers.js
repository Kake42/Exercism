export const classify = (number) => {
    let aliquot_sum = 0;
    let quotient = 0;
    let classification = 'deficient';

    if (number <= 0) {
        throw new Error('Classification is only possible for natural numbers.');
    }
    for (let i = 1; i <= number/2; i++){
       quotient = number % i;
       if(quotient == 0) aliquot_sum += i; 
    }

    if(aliquot_sum == number) classification = 'perfect';
    else if (aliquot_sum > number) classification = 'abundant';
    return classification;
}
