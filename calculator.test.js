describe("Loan Calculator", function () {
  it("should calculate the monthly rate correctly", function () {
    const loanValues = {
      amount: 10000,
      years: 5,
      rate: 5,
    };

    const principal = loanValues.amount;
    const monthlyRate = loanValues.rate / 100 / 12;
    const numberOfPayments = loanValues.years * 12;
    const expectedMonthlyPayment =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    const actualMonthlyPayment = calculateMonthlyPayment(loanValues);

    expect(actualMonthlyPayment).toBeCloseTo(expectedMonthlyPayment, 2);
  });

  it("should return a result with 2 decimal places", function () {
    // Set up the test data
    const loanValues = {
      amount: 15000,
      years: 3,
      rate: 6.5,
    };

    const monthlyPayment = calculateMonthlyPayment(loanValues);

    const decimalPlaces = monthlyPayment.toString().split(".")[1];

    expect(decimalPlaces.length).toBe(2);
  });

});
