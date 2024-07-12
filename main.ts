input.onButtonPressed(Button.A, function () {
    max7219_matrix.fillAll()
})
max7219_matrix.setup(
1,
DigitalPin.P0,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
