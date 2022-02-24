let Terning_1 = 0
let Terning_2 = 0
input.onButtonPressed(Button.A, function () {
    Terning_1 = randint(1, 6)
    if (Terning_1 == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (Terning_1 == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    }
    if (Terning_1 == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    }
    if (Terning_1 == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    }
    if (Terning_1 == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
    if (Terning_1 == 6) {
        basic.showLeds(`
            # . . # .
            . . . . .
            # . . # .
            . . . . .
            # . . # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Terning_1 + Terning_2)
})
input.onButtonPressed(Button.B, function () {
    Terning_2 = randint(1, 6)
    if (Terning_2 == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (Terning_2 == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    }
    if (Terning_2 == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    }
    if (Terning_2 == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    }
    if (Terning_2 == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
    if (Terning_2 == 6) {
        basic.showLeds(`
            # . . # .
            . . . . .
            # . . # .
            . . . . .
            # . . # .
            `)
    }
})
