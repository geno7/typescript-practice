function eatIceCream(cb) {
    console.log("You ate ice cream.")
    let nm = "Shinji"
    cb(nm)
}

function regret() {
    console.log("you regret your life choices")
}

function acidReflux(nm) {
    console.log("you got acid reflux, " + nm)
}

eatIceCream(acidReflux)

setTimeout(acidReflux,2000,"Fool")

let names = ['Gendo','Rei','Asuka','Misato']
names.forEach(acidReflux)