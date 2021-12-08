let lottery = 0
input.onButtonPressed(Button.A, function () {
    lottery = randint(1, 6)
    if (lottery == randint(1, 6)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showNumber(1)
        basic.pause(1000)
    } else if (lottery == randint(1, 6)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
        basic.showNumber(2)
        basic.pause(1000)
    } else if (lottery == randint(1, 6)) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
        basic.showNumber(3)
        basic.pause(1000)
    } else if (lottery == randint(1, 6)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        basic.showNumber(4)
        basic.pause(1000)
    } else if (lottery == randint(1, 6)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.showNumber(5)
        basic.pause(1000)
    } else if (lottery == randint(1, 6)) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            `)
        basic.showNumber(6)
        basic.pause(1000)
    }
    if (lottery != randint(1, 6)) {
        game.gameOver()
        if (lottery == randint(1, 6)) {
            basic.showString("YOU WIN")
        }
    }
})
