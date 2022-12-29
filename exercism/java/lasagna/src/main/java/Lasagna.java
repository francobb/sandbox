public class Lasagna {
    // TODO: define the 'expectedMinutesInOven()' method
  public int expectedMinutesInOven() {
    return 40;
  }

    // TODO: define the 'remainingMinutesInOven()' method
  public int remainingMinutesInOven(int mins) {
    return expectedMinutesInOven()-mins;
  }


      // TODO: define the 'preparationTimeInMinutes()' method
  public int preparationTimeInMinutes(int layer){
    return layer*2;
  }

    // TODO: define the 'totalTimeInMinutes()' method
  public int totalTimeInMinutes(int a, int b){
    return preparationTimeInMinutes(a) + b;
  }
}
