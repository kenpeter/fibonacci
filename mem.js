// recur with cachem
function fibo(num, mem) {
	// empty hash or orig mem 
	mem = mem || {};

	// we hit, got it, then return
	if(mem[num]) return mem[num];

	if(num == 0) return 1;
	if(num == 1) return 1;

	// store it in mem
	mem[num] = fibo(num - 2, mem) + fibo(num - 1, mem);
	
	return mem[num];
}


let out = fibo(100, {});
console.log(out);
