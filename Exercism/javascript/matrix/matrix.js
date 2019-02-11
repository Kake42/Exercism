// "hi" 
export function Matrix (num) {
    this.num = num.split(" ").join();
    this.rows = [], this.columns = [];
    let index = 0;
    let row_seq = '';
    // loop through the number sequence passed in
    for (let j = 0; j <= this.num.length; j += 1 ) {
        // if the character is a new line, commit the sequence to the array and continue
        if ( this.num.charAt(j) === '\n' || j === this.num.length) {
            j += 1;
            row_seq = row_seq.split(",");
            row_seq.forEach(function (num, i) {
                row_seq[i] = Number(num);
            });
            this.rows[index] = row_seq;
            row_seq = '';
            index += 1;
        } 
        row_seq += this.num.charAt(j);

    }
    index = 0;
    // using the rows, find the columns
     while ( index < this.rows.length ) {
        this.columns[index] = [];
        for (let k = 0; k < this.rows.length; k += 1 ) {
            this.columns[index][k] = this.rows[k][index];
        }
        index += 1;
    }
}
