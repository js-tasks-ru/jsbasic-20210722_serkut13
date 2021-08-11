function factorial(n) {
    if (n == 0 || n == 1)
    return 1
  else
    for(var i = n - 1; i > 0; i--){
      n *= i;
  }
  return n   }