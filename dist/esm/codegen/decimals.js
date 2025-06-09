const maxFractionalDigits = 30;
class Decimal {
  static fromUserInput(input, fractionalDigits) {
    Decimal.verifyFractionalDigits(fractionalDigits);
    const badCharacter = input.match(/[^0-9.]/);
    if (badCharacter) {
      throw new Error(
        `Invalid character at position ${badCharacter.index + 1}`
      );
    }
    let whole;
    let fractional;
    if (input === "") {
      whole = "0";
      fractional = "";
    } else if (input.search(/\./) === -1) {
      whole = input;
      fractional = "";
    } else {
      const parts = input.split(".");
      switch (parts.length) {
        case 0:
        case 1:
          throw new Error(
            "Fewer than two elements in split result. This must not happen here."
          );
        case 2:
          if (!parts[1]) throw new Error("Fractional part missing");
          whole = parts[0];
          fractional = parts[1].replace(/0+$/, "");
          break;
        default:
          throw new Error("More than one separator found");
      }
    }
    if (fractional.length > fractionalDigits) {
      throw new Error("Got more fractional digits than supported");
    }
    const quantity = `${whole}${fractional.padEnd(fractionalDigits, "0")}`;
    return new Decimal(quantity, fractionalDigits);
  }
  static fromAtomics(atomics, fractionalDigits) {
    Decimal.verifyFractionalDigits(fractionalDigits);
    return new Decimal(atomics, fractionalDigits);
  }
  static verifyFractionalDigits(fractionalDigits) {
    if (!Number.isInteger(fractionalDigits))
      throw new Error("Fractional digits is not an integer");
    if (fractionalDigits < 0)
      throw new Error("Fractional digits must not be negative");
    if (fractionalDigits > maxFractionalDigits) {
      throw new Error(
        `Fractional digits must not exceed ${maxFractionalDigits}`
      );
    }
  }
  get atomics() {
    return this.data.atomics.toString();
  }
  get fractionalDigits() {
    return this.data.fractionalDigits;
  }
  data;
  constructor(atomics, fractionalDigits) {
    if (!atomics.match(/^[0-9]+$/)) {
      throw new Error(
        "Invalid string format. Only non-negative integers in decimal representation supported."
      );
    }
    this.data = {
      atomics: BigInt(atomics),
      fractionalDigits
    };
  }
  toString() {
    const factor = BigInt(10) ** BigInt(this.data.fractionalDigits);
    const whole = this.data.atomics / factor;
    const fractional = this.data.atomics % factor;
    if (fractional === 0n) {
      return whole.toString();
    } else {
      const fullFractionalPart = fractional.toString().padStart(this.data.fractionalDigits, "0");
      const trimmedFractionalPart = fullFractionalPart.replace(/0+$/, "");
      return `${whole.toString()}.${trimmedFractionalPart}`;
    }
  }
}
export {
  Decimal
};
