led.plot(2, 2)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        led.unplot(2, 2)
        led.toggle(2, 3)
        led.unplot(2, 3)
        led.toggle(2, 4)
    }
})
