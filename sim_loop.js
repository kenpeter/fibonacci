function fibo(num){
	// f(1) = 1 
	var c_n = 1;
	// f(0) = 1
	var p_n = 0;
	// tmp
	var tmp;	

	// no need zero
	// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
	// x, 0, 1, 2, 3, 4, 5, 6,  7,  8
	while (num >= 0) {
		// backup curr_num	
    	tmp = c_n;
		// future_curr_num = curr_num + prev_num 
    	c_n = c_n + p_n;
		// curr_num -> prev_num
    	p_n = tmp;
		// down
    	num--;
	}

	// return prev_num
  	return p_n;
}

let out = fibo(5);
console.log(out);
