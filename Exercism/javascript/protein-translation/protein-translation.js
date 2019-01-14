function translate(rna){
    if(!rna) return [];
    let protein = [];
    let iter1 = 0;
    let iter2 = 3;
    let temp = "";

    for(let i = 0; i < (rna.length)/3; i++){
        temp = rna.slice(iter1, iter2);
        if((/AUG/).test(temp)) protein.push("Methionine");
        else if((/U{2}([UC])/).test(temp)) protein.push("Phenylalanine");
        else if((/U{2}([AG])/).test(temp)) protein.push("Leucine");
        else if ((/^UC([UCAG])/).test(temp)) protein.push("Serine");
        else if ((/^UA([UC])/).test(temp)) protein.push("Tyrosine");
        else if ((/^UG([UC])/).test(temp)) protein.push("Cysteine");
        else if ((/^UGG$/).test(temp)) protein.push("Tryptophan");
        else if ((/^UA([AG])|^UGA/).test(temp)) break;
        else throw new Error('Invalid codon');    
        iter1 += 3;
        iter2 += 3;
    }

    return protein;
//AUG - Methionine 
//UUU, UUC - Phenylalanine (first two = u, last = u or c)
//UUA, UUG - leucine (first two = u, last = a or g)
//UCU, UCC, UCA, UCG - Serine (middle always = c)
//UAU, UAC - tyrosine 
//UGU, UGC - Cysteine
//UGG - Tryptophan
//UAA, UAG, UGA - (STOP) codon, does not translate (terminates)

}

export default translate;