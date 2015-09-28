/*
  Copyright(c) 2015 David Leonard
  
  CPU.js
*/
class Cpu {
	
	constructor() {
		this.mem = null;     // Virtual Memory 
		this.REG_ACC = null; // Accumulator Register
		this.REG_X = null;   // X-index Register
		this.REG_Y = null;   // Y-index Register
		this.REG_PC = null;  // Program Counter
		this.REG_SP = null;  // Stack Pointer Register
		this.REG_SR = null;  // Status Register 

		/* FLAGS */
		this.CF = null;      		// Carry Flag (Bit 0 of Status Register)
        this.ZF = null; 	 		// Zero Flag (Bit 1 of Status Register)
        this.INTERRUPT = null; 		// Interrupt Flag (Bit 2 of Status Register)
        this.DECIMAL = null;  		// Decimal Mode Flag (Bit 3 of Status Register)
        this.SOFT_INTERRUPT = null; // Software Interrupt Flag (Bit 4 of Status Register)
        this.LOGICAL = 0x00000001; 	// Bit 5 of Status Register not used, set to logical 1 at all times
        this.OVERFLOW = null; 		// Overflow flag (Bit 6 of Status Register)
        this.SIGN = null; 			// Sign Flag (Bit 7 of Status Register)
	}

	testFunc() {
		console.log("Hello world!");
	}

	emulate() {
		switch(addrMode) {
			case 0: {
				// Zero Page Mode
			}

			case 1: {
				// Relative Mode
			}

			case 2: {
				// Ignore this, the address is passed inside the instruction
			}

			case 3: {
				// Absolute Mode
			}

			case 4: {
				// Accumulator Mode
			}

			case 5: {
				// Immediate Mode 
			}

			case 6: {
				// Zero Page Indexed Mode (X)
			}

			case 7: {
				// Zero Page Index Mode (Y)
			}

			case 8: {
				// Absolute Index Mode (X)
			}

			case 9: {
				// Absolute Index Mode (Y)
			}

			case 10: {
				// Pre-Index Indirect Mode
			}

			case 11: {
				// Post-Index Indirect Mode
			}

			case 12: {
				// Indirect Absolute Mode 
			}
		}
	}

}
export default Cpu;