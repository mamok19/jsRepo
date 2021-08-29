function digitSum(num) {
    let sum =0
    while (num > 1)
    {
        sum += num % 10
        num = num/10
    }
    console.log(sum);
  }

  function quadratic_equation() {
      let a = 1; b = -6; c = 9;
      let solutionA = solutionB = 0
      solutionA=(-b + Math.sqrt(b*b - 4 * a * c))/2*a
      solutionA=(-b - Math.sqrt(b*b - 4 * a * c))/2*a
      console.log(solutionA, solutionB)
  }
  