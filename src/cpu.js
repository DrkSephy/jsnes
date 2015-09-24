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

}
export default Cpu;