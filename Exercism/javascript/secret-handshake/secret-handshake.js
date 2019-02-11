// got idea from this link
// https://exercism.io/tracks/javascript/exercises/roman-numerals/
// solutions/3bc57aeaeae042f6aa75c5f64998b51e
export function secretHandshake(num) {
  // create array
  const sec_arr = [];
  let regexp = new RegExp('[01]');
  let binary = (num >>> 0).toString(2);
  binary = Number(binary);
  let rev = false;
  debugger;
  if (isNaN(num)) {
    throw new Error('Handshake must be a number');
  }

  function change(bin_num, sign) {
    while (binary >= bin_num ) {
      sec_arr.unshift(sign);
      binary -= bin_num;
      if (sign === 'reverse') rev = true;
    }
  }
  change(10000, 'reverse')
  change(1000, 'jump');
  change(100, 'close your eyes');
  change(10, 'double blink');
  change(1, 'wink');

  if (rev === true) {
    sec_arr.pop();
    sec_arr.reverse();
  }
  return sec_arr;
}
