class RandomBag<T> {
  private remainingPatterns: T[];

  constructor(public readonly patterns: T[]) {
    this.remainingPatterns = [...patterns];
  }

  pop() {
    const index = Math.floor(Math.random() * this.remainingPatterns.length);
    const value = this.remainingPatterns[index];

    this.remainingPatterns.splice(index, 1);

    return value;
  }

  push(value: T) {
    this.remainingPatterns.push(value);
  }

  reset() {
    this.remainingPatterns = [...this.patterns];
  }
}

namespace RandomBag {
  export function selectOne<T>(patterns: T[]) {
    return new RandomBag<T>(patterns).pop();
  }

  export function selectMany<T>(amount: number, patterns: T[]) {
    const bag = new RandomBag<T>(patterns);
    return [...Array(amount)].map((_) => bag.pop());
  }
}

export default RandomBag;
