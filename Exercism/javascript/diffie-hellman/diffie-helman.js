//Diffie-Hellman key exchange for secrets

export class DiffieHellman {
  constructor(...primeRange) {
    //check for valid range
    if (!primeRange.every(checkRange) || !primeRange.every(checkPrime)) {
      throw new Error("Invalid numbers");
    }

    this.primeP = primeRange[0];
    this.primeG = primeRange[1];

    function checkRange(num) {
      return num > 0 && num < 9999;
    }

    function checkPrime(num) {
      //need half of number for limit, anything above is not evenly divisible
      let limit = num / 2;
      //dont need to check one, all numbers/primes are divisible by 1
      for (let i = 2; i <= limit; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  }

  getPublicKeyFromPrivateKey(privKey) {
    //private key is passed in public key comes out
    if (privKey <= 1 || privKey >= this.primeP) {
      throw new Error("Invalid key");
    }
    return this.primeG ** privKey % this.primeP;
  }

  getSharedSecret(privKey, pubKey) {
    //our private key, other party public key is passed in
    //secrete key comes out
    return pubKey ** privKey % this.primeP;
  }
}
