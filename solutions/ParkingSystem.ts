
// https://leetcode.com/problems/design-parking-system/description/

export class ParkingSystem {

  place: Record<number, number> = {
    1: 0,
    2: 0,
    3: 0
  }

  constructor(big: number, medium: number, small: number) {
    this.place = {
      1: big,
      2: medium,
      3: small
    }
  }

  addCar(carType: number): boolean {
    const pl = this.place[carType]

    if(pl < 1){
      return false
    }

    this.place[carType] = pl - 1

    return true
  }
}

// execute(() => {
//   const log = (p: any) => console.log(p)
//   const ps = new ParkingSystem(1, 1, 0)
//   log(ps.addCar(1))
//   log(ps.addCar(2))
//   log(ps.addCar(3))
//   log(ps.addCar(1))
// })