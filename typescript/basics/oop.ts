export class Car {
    private speed: number

    speedUp(): void {
        this.speed++
    }
}

let cr = new Car()
cr.speedUp()