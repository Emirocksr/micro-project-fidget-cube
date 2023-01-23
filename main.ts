input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # . #
        # . # . #
        # # # . #
        # . # . #
        # . # . #
        `)
})
input.onSound(DetectedSound.Loud, function () {
    music.playMelody("E B G A B G A F ", 120)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(69)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # # #
        . # . # #
        # . # . #
        # # . # .
        # # # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Hold up.... Let him COOK")
})
