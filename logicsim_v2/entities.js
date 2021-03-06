const ENTITY_INFOES = {

    // primitives

    "and": new EntityInfo(
        "m 100,40 c 0,22.091395 -17.90861,40 -40,40 H 0 V 0 h 60 c 22.091387,0 40,17.90861 40,40 z",
        [[0, 15, -40, 15], [0, 65, -40, 65]],
        [[100, 40, 140, 40]],
        input => input == 3
    ),

    "or": new EntityInfo(
        "M 0,15 C 5.318,31.212 5.318,48.788 0,65 -1.695,70.168 -3.931,75.197 -6.707,80 l 37.409,0 c 29.611,0 55.465,-16.088 69.297,-40 C 86.168,16.088 60.314,0 30.703,0 H -6.707 C -3.931,4.803 -1.695,9.832 0,15 Z",
        [[0, 15, -40, 15], [0, 65, -40, 65]],
        [[100, 40, 140, 40]],
        input => !!input
    ),

    "xor": new EntityInfo(
        "M -6.707,0 C -3.931,4.803 -1.695,9.832 0,15 c 5.318,16.212 5.318,33.788 0,50 -1.695,5.168 -3.931,10.197 -6.707,15 m 21.707,-65 c 5.318,16.212 5.318,33.788 0,50 -1.695,5.168 -3.931,10.197 -6.707,15 l 22.409,0 C 60.314,80 86.168,63.912 100,40 86.168,16.088 60.314,0 30.703,0 L 8.294,0 C 11.07,4.803 13.305,9.832 15,15 Z",
        [[0, 15, -40, 15], [0, 65, -40, 65]],
        [[100, 40, 140, 40]],
        input => input == 1 || input == 2
    ),

    "nand": new EntityInfo(
        "m 120,40 a 10,10 0 0 1 -10,10 10,10 0 0 1 -10,-10 10,10 0 0 1 10,-10 10,10 0 0 1 10,10 z M 100,40 C 100,62.091 82.091,80 60,80 H 0 V 0 h 60 c 22.091,0 40,17.909 40,40 z",
        [[0, 15, -40, 15], [0, 65, -40, 65]],
        [[100, 40, 140, 40]],
        input => input != 3
    ),

    "nor": new EntityInfo(
        "m 120,40 a 10,10 0 0 1 -10,10 10,10 0 0 1 -10,-10 10,10 0 0 1 10,-10 10,10 0 0 1 10,10 z M 0,15 c 5.318,16.212 5.318,33.788 0,50 C -1.695,70.168 -3.931,75.197 -6.707,80 l 37.409,0 c 29.611,0 55.465,-16.088 69.297,-40 C 86.168,16.088 60.314,0 30.703,0 H -6.707 C -3.931,4.803 -1.695,9.832 0,15 Z",
        [[0, 15, -40, 15], [0, 65, -40, 65]],
        [[100, 40, 140, 40]],
        input => !input
    ),

    "xnor": new EntityInfo(
        "m 120,40 a 10,10 0 0 1 -10,10 10,10 0 0 1 -10,-10 10,10 0 0 1 10,-10 10,10 0 0 1 10,10 z M -6.707,0 C -3.931,4.803 -1.695,9.832 0,15 c 5.318,16.212 5.318,33.788 0,50 -1.695,5.168 -3.931,10.197 -6.707,15 m 21.707,-65 c 5.318,16.212 5.318,33.788 0,50 -1.695,5.168 -3.931,10.197 -6.707,15 l 22.409,0 C 60.314,80 86.168,63.912 100,40 86.168,16.088 60.314,0 30.703,0 L 8.294,0 C 11.07,4.803 13.305,9.832 15,15 Z",
        [[0, 15, -40, 15], [0, 65, -40, 65]],
        [[100, 40, 140, 40]],
        input => input == 0 || input == 3
    ),

    "not": new EntityInfo(
        "M 80.621772,35 A 10,10 0 0 1 70.62177,45 10,10 0 0 1 60.621772,35 10,10 0 0 1 70.62177,25 10,10 0 0 1 80.621772,35 Z m -20,0 L 0,0 v 70 z",
        [[0, 35, -40, 35]],
        [[80.621762, 35, 120, 35]],
        input => !input
    ),

    // standard input/output

    "input_high": new EntityInfo(
        "M 40,25 A 15,15 0 0 1 25,40 15,15 0 0 1 10,25 15,15 0 0 1 25,10 15,15 0 0 1 40,25 Z M 50,25 A 25,25 0 0 1 25,50 25,25 0 0 1 0,25 25,25 0 0 1 25,0 25,25 0 0 1 50,25 Z",
        [],
        [[50, 25, 90, 25]],
        () => 1,
        (item, l, h, hh) => {
            h.moveTo(25 + item.x, 25 + item.y);
            h.arc(25 + item.x, 25 + item.y, 8, 0, Math.PI * 2);
            hh.moveTo(25 + item.x, 25 + item.y);
            hh.arc(25 + item.x, 25 + item.y, 5, 0, Math.PI * 2);
        }
    ),

    "input_low": new EntityInfo(
        "M 40,25 A 15,15 0 0 1 25,40 15,15 0 0 1 10,25 15,15 0 0 1 25,10 15,15 0 0 1 40,25 Z M 50,25 A 25,25 0 0 1 25,50 25,25 0 0 1 0,25 25,25 0 0 1 25,0 25,25 0 0 1 50,25 Z",
        [],
        [[50, 25, 90, 25]],
        () => 0,
        (item, l) => {
            l.moveTo(25 + item.x, 25 + item.y);
            l.arc(25 + item.x, 25 + item.y, 8, 0, Math.PI * 2);
        }
    ),

    "input_clk": new EntityInfo(
        "m 40,25 c 0,8.284 -6.716,15 -15,15 -8.284,0 -15,-6.716 -15,-15 0,-8.284 6.716,-15 15,-15 8.284,0 15,6.716 15,15 z m 10,0 C 50,38.807 38.807,50 25,50 11.193,50 0,38.807 0,25 0,11.193 11.193,0 25,0 38.807,0 50,11.193 50,25 m -37.993,7.5 12.993,0 0,-15 h 12.993",
        [],
        [[50, 25, 90, 25]],
        () => new Date().getTime() % 1500 > 750
    ),

    "output": new EntityInfo(
        "M 50,25 A 25,25 0 0 1 25,50 25,25 0 0 1 0,25 25,25 0 0 1 25,0 25,25 0 0 1 50,25 Z",
        [[0, 25, -40, 25]],
        [[50, 25, 70, 25]],
        input => !!input,
        (item, l, h, hh) => {
            if (item.input) {
                h.moveTo(25 + item.x, 25 + item.y);
                h.arc(25 + item.x, 25 + item.y, 17.5, 0, Math.PI * 2);
                hh.moveTo(25 + item.x, 25 + item.y);
                hh.arc(25 + item.x, 25 + item.y, 12.5, 0, Math.PI * 2);
            } else {
                l.moveTo(25 + item.x, 25 + item.y);
                l.arc(25 + item.x, 25 + item.y, 17, 0, Math.PI * 2);
            }
        }
    ),

    // integrated circuits

    "fa": new EntityInfo(
        "M 92.5,110 H 78 V 90 H 92.5 M 10,20 l 12,0 m -12,40 12,0 v 10 H 10 V 50 l 10,0.036 v 9.964 M 24.5,110 H 10 V 90 h 14.5 m 68,-80 H 78 v 10 h 12 v 10 H 75.5 M 10,32.5 V 10 h 12 V 32.5 M 0,0 H 100 V 120 H 0 Z",
        [[0, 20, -40, 20], [0, 60, -40, 60], [0, 100, -40, 100]],
        [[100, 20, 140, 20], [100, 100, 140, 100]],
        input => (input & 1) + (input >> 1 & 1) + (input >> 2 & 1)
    ),

    "jkff": new EntityInfo(
        "m 75.5,82.5 h 17 m -8.5,27.5 v -7.5 h 6 M 78,90 h 12 v 20 H 78 Z M 84,30 v -7.5 h 6 M 78,10 H 90 V 30 H 78 Z m -59,90 3,3 V 112.5 M 10,87.5 v 25 m 0,-12.5 h 9 l 3,-3 V 92.5 m 0,-85 V 30 L 10,30 V 22.5 M 0,75 20,60 0,45 m 120,55 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.523 4.477,-10 10,-10 5.523,0 10,4.477 10,10 z M 0,60 C 0,65.523 -4.477,70 -10,70 c -5.523,0 -10,-4.477 -10,-10 0,-5.523 4.477,-10 10,-10 C -4.477,50 0,54.477 0,60 Z M 0,0 H 100 V 120 H 0 Z",
        [[0, 20, -40, 20], [-20, 60, -40, 60], [0, 100, -40, 100]],
        [[100, 20, 140, 20], [120, 100, 140, 100]],
        (input, item) => {
            if (!item.output) return 2;
            if ((~input & 2) && (~item.output & 4)) {
                switch (input) {
                    case 0: return item.output | 4;
                    case 1: return 5;
                    case 4: return 6;
                    case 5: return (item.output ^ 3) | 4;
                }
            }
            if (input & 2) return item.output & 3;
            return item.output;
        }
    ),

    "tff": new EntityInfo(
        "m 120,100 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.523 4.477,-10 10,-10 5.523,0 10,4.477 10,10 z M 75.5,80.5 h 17 M 7.5,10 h 17 m -8.5,0 V 32.5 M 0,60 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.523 4.477,-10 10,-10 5.523,0 10,4.477 10,10 z M 0,75 20,60 0,45 m 84,65 v -7.5 h 6 M 78,90 H 90 V 110 H 78 Z M 84,30 v -7.5 h 6 M 78,10 H 90 V 30 H 78 Z M 0,0 H 100 V 120 H 0 Z",
        [[0, 20, -40, 20], [-20, 60, -40, 60]],
        [[100, 20, 140, 20], [120, 100, 140, 100]],
        (input, item) => {
            if (!item.output) return 2;
            if ((~input & 2) && (~item.output & 4)) {
                if (input) return (item.output ^ 3) | 4;
                return item.output | 4;
            }
            if (input & 2) return item.output & 3;
            return item.output;
        }
    ),

    "dff": new EntityInfo(
        "M 10,10 H 20 L 22,19 l 0,2 -2,9 H 10 m 0,2.5 V 7.5 M 120,100 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.523 4.477,-10 10,-10 5.523,0 10,4.477 10,10 z M 75.5,80.5 h 17 M 0,60 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.523 4.477,-10 10,-10 5.523,0 10,4.477 10,10 z M 0,75 20,60 0,45 m 84,65 v -7.5 h 6 M 78,90 H 90 V 110 H 78 Z M 84,30 v -7.5 h 6 M 78,10 H 90 V 30 H 78 Z M 0,0 H 100 V 120 H 0 Z",
        [[0, 20, -40, 20], [-20, 60, -40, 60]],
        [[100, 20, 140, 20], [120, 100, 140, 100]],
        (input, item) => {
            if (!item.output) return 2;
            if ((~input & 2) && (~item.output & 4)) {
                if (input) return 5;
                return 6;
            }
            if (input & 2) return item.output & 3;
            return item.output;
        }
    ),

    "4bit_add": new EntityInfo(
        "M 92.5,350 H 78 V 330 h 14.5 m -68,20 h -14.5 v -20 h 14.5 M 92.5,130 H 78 v 10 H 90 v 10 H 75.5 M 92.5,90 H 78 V 100 H 90 v 10 H 75.5 m 17,-60 H 78 V 60 H 90 V 70 H 75.5 M 92.5,10 H 78 V 20 H 90 v 10 H 75.5 M 10,300 H 22 v 10 H 10 v -20 h 9.5 v 10 M 10,260 h 12 v 10 h -12 v -20 h 9.5 v 10 m -9.5,-40 h 12 v 10 h -12 V 210 h 9.5 v 10 m -9.5,-40 12,0 v 10 h -12 v -20 h 9.5 v 10 m -9.5,-40 h 12 M 10,152.5 V 130 H 22 v 22.5 M 10,100 h 12 m -12,12.5 V 90 h 12 V 112.5 M 10,60 h 12 M 10,72.5 V 50 H 22 V 72.5 M 10,20 h 12 M 10,32.5 V 10 h 12 V 32.5 M 0,0 H 100 V 360 H 0 Z",
        [[0, 20, -40, 20], [0, 60, -40, 60], [0, 100, -40, 100], [0, 140, -40, 140], [0, 180, -40, 180], [0, 220, -40, 220], [0, 260, -40, 260], [0, 300, -40, 300], [0, 340, -40, 340]],
        [[100, 20, 140, 20], [100, 60, 140, 60], [100, 100, 140, 100], [100, 140, 140, 140], [100, 340, 140, 340]],
        input => (input & 15) + (input >> 4 & 15) + (input >> 8 & 1)
    ),

    "4bit_ctr": new EntityInfo(
        "m 0,20 a 10,10 0 0 1 -10,10 10,10 0 0 1 -10,-10 A 10,10 0 0 1 -10,10 10,10 0 0 1 0,20 Z M 0,35 20,20 0,5 M 84,150 v -7.5 h 6 m -12,-12.5 H 90 V 150 H 78 Z m 6,-20 v -7.5 h 6 M 78,90 H 90 V 110 H 78 Z M 84,70 v -7.5 h 6 M 78,50 H 90 V 70 H 78 Z M 84,30 v -7.5 h 6 M 78,10 H 90 V 30 H 78 Z M 16,140 22,146 v 6.5 m -12,0 0,-22.5 h 12 l 0,10 H 10 M 0,0 H 100 V 160 H 0 Z",
        [[-20, 20, -40, 20], [0, 140, -40, 140]],
        [[100, 20, 140, 20], [100, 60, 140, 60], [100, 100, 140, 100], [100, 140, 140, 140]],
        (input, item) => {
            if (input & 2) return 0;
            if ((~input & 1) && (item.output & 16)) return item.output + 1 & 15;
            else if (input & 1) return item.output | 16;
            return item.output;
        }
    ),

    "7seg_dec": new EntityInfo(
        "m 24.5,110 h -14.5 V 90 h 14.5 M 10,60 l 12,0 v 10 H 10 V 50 h 9.5 V 60 M 10,20 H 22 M 10,32.5 V 10 H 22 V 32.5 M 10,130 h 10 l 1.976,9 0.024,2 -2,9 h -10 m 0,2.5 v -25 M 92.5,110 h -14.5 V 90 h 14.5 M 78,60 l 12,0 v 10 H 78 V 50 h 9.5 V 60 M 78,20 90,20 M 78,32.5 V 10 H 90 V 32.5 M 91.5,250 H 78 v 20 H 90 V 260 H 83.5 M 78,220 H 90 M 78,232.5 V 210 l 14.5,0 M 78,180 h 12 m 2.5,-10 H 78 v 20 H 92.5 M 78,130 h 10 l 1.976,9 0.024,2 -2,9 h -10 m 0,2.5 v -25 M 0,0 H 100 V 280 H 0 Z",
        [[0, 20, -40, 20], [0, 60, -40, 60], [0, 100, -40, 100], [0, 140, -40, 140]],
        [[100, 20, 140, 20], [100, 60, 140, 60], [100, 100, 140, 100], [100, 140, 140, 140], [100, 180, 140, 180], [100, 220, 140, 220], [100, 260, 140, 260]],
        input => [0b0111111, 0b0000110, 0b1011011, 0b1001111, 0b1100110, 0b1101101, 0b1111101, 0b0100111, 0b1111111, 0b1101111, 0b1110111, 0b1111100, 0b0111001, 0b1011110, 0b1111001, 0b1110001][input]
    ),

}