class cpu {
  constructor() {
    this.r = {
      a: 0,         // Accumulator
      x: 0,         // General Purpose X
      y: 0,         // General Purpose Y
      s: 0xff,      // Single-byte stack pointer
      p: 0b00100100,  // Status Register (6 bits)
      pc: 0,        // Program Counter
      flags: {
        'N': 128,   // Negative
        'V': 64,    // Overflow
        'B': 16,    // Break
        'D': 8,     // Decimal Mode
        'I': 4,     // IRQ Disable
        'Z': 2,     // Zero
        'C': 1      // Carry
      },
    }
  }

  reset () {
    // Reset x, y, a and p registers
    this.r.a = this.r.x = this.r.y = this.r.p = 0;
    // Reset stack pointer
    this.r.s = 0xff;
  }
}

export default cpu;