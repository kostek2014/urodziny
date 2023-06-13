input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 100))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showString("sto lat tymon")
    }
})
