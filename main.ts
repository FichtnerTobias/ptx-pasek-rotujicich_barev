type Color = {
    h: number; // hue
    s: number; // saturation
    l: number; // lightness
};

const blackColor: Color = { h: 0, s: 0, l: 0 };

const colorArray: Array<Color> = [];

colorArray.push({ h: 0, s: 100, l: 50 });  // červená
colorArray.push({ h: 120, s: 100, l: 50 }); // zelená
colorArray.push({ h: 240, s: 100, l: 50 }); // modrá
colorArray.push({ h: 60, s: 100, l: 50 });  // žlutá

const pasek: Array<Color> = [];

for (let i = 0; i < 20; i++) {
    pasek.push({ h: 0, s: 0, l: 0 }); // blackColor
}

const strip = neopixel.create(DigitalPin.P1, pasek.length, NeoPixelMode.RGB);


let colorIndex = 0;

basic.forever(function () {

  
    // const first = pasek.shift(); 
    // pasek.push(first);


    for (let i = 0; i < pasek.length; i++) {

        // Barva se opakuje 2×

        const color = colorArray[Math.floor((colorIndex + i) / 2) % colorArray.length];

        pasek[i] = color;
        strip.setPixelColor(i, neopixel.hsl(color.h, color.s, color.l));
    }

    strip.show();
    basic.pause(200);

    colorIndex++;
});
