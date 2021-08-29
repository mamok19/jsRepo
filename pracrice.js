function digitSum(num) {
    num= 123;
    let sum =0;
    while (num >= 1)
    {
        sum += (num % 10);
        num /= 10;
        num = Math.floor(num);
    }
    console.log(sum);
}

function quadratic_equation() {
      let a = 1; b = -6; c = 9;
      let solutionA = solutionB = 0;
      solutionA=(-b + Math.sqrt(b*b - 4 * a * c))/2*a;
      solutionA=(-b - Math.sqrt(b*b - 4 * a * c))/2*a;
      console.log(solutionA,  solutionB);
}

function absuluteNumber(num) {
    num = -8;
    let absulute = 0;
    absulute = num * num;
    absulute = Math.sqrt(absulute);
    console.log(absulute);

}
  digitSum();
  quadratic_equation();
  absuluteNumber();