function fibo(num) {
	// e.g. 1, 1, 2, 3, 5....
	if(num == 0) return 1;
	if(num == 1) return 1;

	// f_c_n = p_n + c_n
	return fibo(num - 1) + fibo(num - 2);
}

let out = fibo(5);
console.log(out);
