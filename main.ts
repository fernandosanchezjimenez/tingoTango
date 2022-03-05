radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    tiempo = receivedNumber
    basic.pause(tiempo)
    music.playMelody("C5 B C5 - - - - - ", 120)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Sad)
    basic.clearScreen()
    radio.sendString("t")
})
input.onButtonPressed(Button.A, function () {
    send = randint(5000, 30000)
    radio.sendNumber(send)
    music.playMelody("E B C5 A B G A F ", 120)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "t") {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        music.playMelody("- - - - - - - - ", 120)
        basic.pause(2000)
        basic.clearScreen()
    }
})
let send = 0
let tiempo = 0
tiempo = 0
radio.setGroup(1)
