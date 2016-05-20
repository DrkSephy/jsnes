class cpu {
  constructor() {
    this.r = {
      a: 0,     // Accumulator
      x: 0,     // General Purpose X
      y: 0,     // General Purpose Y
      s: 0xff,  // Single-byte stack pointer
      p: 0,     // Status Register (6 bits)
      pc: 0     // Program Counter
    }
  }
}

export default cpu;