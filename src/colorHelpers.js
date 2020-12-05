import chroma from 'chroma-js'
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };
    // create the level arrays
    for(let level of levels) {
        newPalette.colors[level] = [];
    }

    for(let color of starterPalette.colors) {
        // gets us 10 scales for each color
        let scale = getScale(color.color, 10).reverse();
        for(let i in scale){
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                // replaces spaces with - to use in routes later
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                // takes rgb value replaces rgb with rgba and replaces the final comma with ,1.0)
                rgba: chroma(scale[i])
                    .css().replace("rgb", "rgba")
                    .replace(")", ",1.0)")
            })
        }
    }
    return newPalette;
}
function getRange(hexColor) {
    // color.darken(1.4) - color - white
    // generates an array with 3 color values 
    const end = "#fff"
    return [
        chroma(hexColor)
        .darken(1.4)
        .hex(),
    hexColor,
    end
    ];
}

function getScale(hexColor, numberOfColors) {
    //  mode=lab computes the Euclidean distance between two colors in a given color space
    return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors)
}

export {generatePalette};