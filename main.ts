input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showArrow(ArrowNames.SouthEast)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . . .
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # . . # #
        # . . # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.stopAllSounds()
})
