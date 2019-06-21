import { Car } from "./oop";
class Bmw extends Car {

    speedUp() {
        console.log('speed up')
        super.speedUp()
    }
}