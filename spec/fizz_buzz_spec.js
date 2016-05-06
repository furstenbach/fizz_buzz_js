describe("SampleObject", function() {
  var subject;

  beforeEach(function() {
    subject = new SampleObject();
  });

  it("returns 1 if number = 1", function() {
    expect(subject.Fizz_Buzz(1)).toEqual('1');
  });

  it("returns fizzbuzz if number = 45", function(){
    expect(subject.Fizz_Buzz(60)).toEqual('FizzBuzz')
  });

  it("returns fizz if number = 12", function() {
    expect(subject.FizzBuzz(12)).toEqual('Fizz');
  });

  it("returns buzz if number = 20", function() {
    expect(subject.FizzBuzz(20)).toEqual('Buzz');
  });

  it("returns number if number is not divisible by 3, 5 or 15", function() {
    expect(subject.FizzBuzz(17)).toEqual('17');
  });
