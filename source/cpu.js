class cpu {
  constructor() {
    this.r = {
      a: 0,           // Accumulator
      x: 0,           // General Purpose X
      y: 0,           // General Purpose Y
      s: 0xff,        // Single-byte stack pointer
      /**
      Status Register (6 bits)
      |S|V|1|B|D|I|Z|C|
      C: Carry Flag: Carry out of most significant bit 
         in any arithmetic operation.
      Z: Zero Flag: Set to 1 when any arithmetic or 
         logical operation produces a zero result,
         and is set to 0 if the result is non-zero.
      I: Interrupt enable/disable Flag. If set, interrupts
         are disabled. If cleared, interrupts are enabled.
      D: Decimal Mode Status Flag. If set, when an Add
         with Carry or Subtract with Carry instruction is executed,
         the source values are treated as Binary Coded Decimal
         (0x00 - 0x99 = 0-99) numbers. Generates a BCD number.
      B: Set when software interrupt (BRK instruction) is executed.
         Bit 5: Not used, always set to logical one.
      V: Overflow Flag: When an arithmetic operation produces a
         result too large to be represented in a byte, V is set.
      S: Sign Flag: Set if the result of an operation is negative,
         cleared if positive.
      */
      p: 0b00100100,
      pc: 0,          // Program Counter
      flags: {
        'N': 128,     // Negative
        'V': 64,      // Overflow
        'B': 16,      // Break
        'D': 8,       // Decimal Mode
        'I': 4,       // IRQ Disable
        'Z': 2,       // Zero
        'C': 1        // Carry
      },
    }
  }

  /**
   * Reset all the registers.
  */
  reset() {
    // Reset x, y, a and p registers
    this.r.a = this.r.x = this.r.y = this.r.p = 0;
    // Reset stack pointer
    this.r.s = 0xff;
  }

  /**
   * Clear all flags.
  */
  clearFlags() {
    self.p = 0
  }

  /**
   * Set an individual special flag.
  */
  setFlag(flag, value) {
    if (value) {
      self.p = self.p | self.flags[flag]
    }
  }

  /**
   * Z flag is set if value is zero.
   * N gets set to same value as bit 7 of value.
  */
  setZeroFlag(value) {
    this.setFlag('Z', value);
    this.setFlag('N', value & 0x80);
  }
}

export default cpu;