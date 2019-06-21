export interface GpsListener {
    locate(lat: number, lng: number): void
}

let gps: GpsListener = {
    locate: (num1, num2) => {

    }
}