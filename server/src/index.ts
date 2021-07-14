interface IProgram {
	run(): void
}

class Program implements IProgram {
	run(): void {
		console.log('hello world')
	}
}

const program = new Program()
program.run()
