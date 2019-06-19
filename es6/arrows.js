function speedUp() {
    console.log(this)
    return `
        Codekul ${10 + 56}
        s;lvmlsvm
        s.,bmbsbmv
        slkfmvlsfmv
        asdlkvmslfv
    `
}

let spd = speedUp()
console.log(spd)

let spdArw = () => {
    console.log(this)
    return 'codekul'+ 'slkfgsflkfgjslkgjsl'
}