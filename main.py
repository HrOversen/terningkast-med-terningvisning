Terning_1 = 0

def on_button_pressed_a():
    global Terning_1
    Terning_1 = randint(1, 6)
    if Terning_1 == 1:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
    if Terning_1 == 2:
        basic.show_leds("""
            . . . . .
                        . # . . .
                        . . . . .
                        . . . # .
                        . . . . .
        """)
    if Terning_1 == 3:
        basic.show_leds("""
            # . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . #
        """)
    if Terning_1 == 4:
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        . # . # .
                        . . . . .
        """)
    if Terning_1 == 5:
        basic.show_leds("""
            # . . . #
                        . . . . .
                        . . # . .
                        . . . . .
                        # . . . #
        """)
    if Terning_1 == 6:
        basic.show_leds("""
            # . . # .
                        . . . . .
                        # . . # .
                        . . . . .
                        # . . # .
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)
