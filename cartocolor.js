!function() {

var cartocolor = {
"Antique": {
        "2": ["#75445C", "#D5A75B"],
        "3": ["#75445C", "#D5A75B", "#AF6458"],
        "4": ["#75445C", "#D5A75B", "#AF6458", "#736F4C"],
        "5": ["#75445C", "#D5A75B", "#AF6458", "#736F4C", "#5b788e"],
        "6": ["#75445C", "#D5A75B", "#AF6458", "#736F4C", "#5b788e", "#4C4E8F"],
        "7": ["#75445C", "#D5A75B", "#AF6458", "#736F4C", "#5b788e", "#4C4E8F", "#6c4c8f"],
        "8": ["#75445C", "#D5A75B", "#AF6458", "#736F4C", "#5b788e", "#4C4E8F", "#6c4c8f", "#44755d"],
        "9": ["#75445C", "#D5A75B", "#AF6458", "#736F4C", "#5b788e", "#4C4E8F", "#6c4c8f", "#44755d", "#af5878"],
        "10": ["#75445C", "#D5A75B", "#AF6458", "#736F4C", "#5b788e", "#4C4E8F", "#6c4c8f", "#44755d", "#af5878", "#5c4c73"],
        "11": ["#75445C", "#D5A75B", "#AF6458", "#736F4C", "#5b788e", "#4C4E8F", "#6c4c8f", "#44755d", "#af5878", "#5c4c73", "#6C6D6F"],
        "tags": ["qualitative"]
    },
"ArmyRose": {
        "2": ["#929b4f", "#db8195"],
        "3": ["#a3ad62", "#fdfbe4", "#df91a3"],
        "4": ["#929b4f", "#d9dbaf", "#f3d1ca", "#db8195"],
        "5": ["#879043", "#c1c68c", "#fdfbe4", "#ebb4b8", "#d8758b"],
        "6": ["#7f883b", "#b0b874", "#e3e4be", "#f6ddd1", "#e4a0ac", "#d66d85"],
        "7": ["#798234", "#a3ad62", "#d0d3a2", "#fdfbe4", "#f0c6c3", "#df91a3", "#d46780"],
        "tags": ["diverging"]
    },
"BluGrn": {
        "2": ["#1d4f60", "#c4e6c3"],
        "3": ["#1d4f60", "#4da284", "#c4e6c3"],
        "4": ["#1d4f60", "#36877a", "#6dbc90", "#c4e6c3"],
        "5": ["#1d4f60", "#2d7974", "#4da284", "#80c799", "#c4e6c3"],
        "6": ["#1d4f60", "#297071", "#3e927e", "#5fb28b", "#8dce9f", "#c4e6c3"],
        "7": ["#1d4f60", "#266b6e", "#36877a", "#4da284", "#6dbc90", "#96d2a4", "#c4e6c3"],
        "tags": ["quantitative"]
    },
"BluYl": {
        "2": ["#045275", "#f7feae"],
        "3": ["#045275", "#46aea0", "#f7feae"],
        "4": ["#045275", "#089099", "#7ccba2", "#f7feae"],
        "5": ["#045275", "#058092", "#46aea0", "#9bd8a4", "#f7feae"],
        "6": ["#045275", "#02778e", "#2a9c9c", "#68bfa1", "#ace1a4", "#f7feae"],
        "7": ["#045275", "#00718b", "#089099", "#46aea0", "#7ccba2", "#b7e6a5", "#f7feae"],
        "tags": ["quantitative"]
    },
"Bold": {
        "2": ["#7F3C8D", "#11A579"],
        "3": ["#7F3C8D", "#11A579", "#3969AC"],
        "4": ["#7F3C8D", "#11A579", "#3969AC", "#F2B701"],
        "5": ["#7F3C8D", "#11A579", "#3969AC", "#F2B701", "#E73F74"],
        "6": ["#7F3C8D", "#11A579", "#3969AC", "#F2B701", "#E73F74", "#80BA5A"],
        "7": ["#7F3C8D", "#11A579", "#3969AC", "#F2B701", "#E73F74", "#80BA5A", "#E68310"],
        "8": ["#7F3C8D", "#11A579", "#3969AC", "#F2B701", "#E73F74", "#80BA5A", "#E68310", "#008695"],
        "9": ["#7F3C8D", "#11A579", "#3969AC", "#F2B701", "#E73F74", "#80BA5A", "#E68310", "#008695", "#CF1C90"],
        "10": ["#7F3C8D", "#11A579", "#3969AC", "#F2B701", "#E73F74", "#80BA5A", "#E68310", "#008695", "#CF1C90", "#f97b72"],
        "11": ["#7F3C8D", "#11A579", "#3969AC", "#F2B701", "#E73F74", "#80BA5A", "#E68310", "#008695", "#CF1C90", "#f97b72", "#A5AA99"],
        "tags": ["qualitative"]
    },
"BrwnYl": {
        "2": ["#541f3f", "#ede5cf"],
        "3": ["#541f3f", "#c1766f", "#ede5cf"],
        "4": ["#541f3f", "#a65461", "#d39c83", "#ede5cf"],
        "5": ["#541f3f", "#95455a", "#c1766f", "#daaf91", "#ede5cf"],
        "6": ["#541f3f", "#8a3c56", "#b26166", "#cd8c7a", "#ddba9b", "#ede5cf"],
        "7": ["#541f3f", "#813753", "#a65461", "#c1766f", "#d39c83", "#e0c2a2", "#ede5cf"],
        "tags": ["quantitative"]
    },
"Burg": {
        "2": ["#672044", "#ffc6c4"],
        "3": ["#672044", "#cc607d", "#ffc6c4"],
        "4": ["#672044", "#ad466c", "#e38191", "#ffc6c4"],
        "5": ["#672044", "#9e3963", "#cc607d", "#ee919b", "#ffc6c4"],
        "6": ["#672044", "#93345d", "#b95073", "#da7489", "#f29ca3", "#ffc6c4"],
        "7": ["#672044", "#8b3058", "#ad466c", "#cc607d", "#e38191", "#f4a3a8", "#ffc6c4"],
        "tags": ["quantitative"]
    },
"BurgYl": {
        "2": ["#70284a", "#fbe6c5"],
        "3": ["#70284a", "#dc7176", "#fbe6c5"],
        "4": ["#70284a", "#c8586c", "#ee8a82", "#fbe6c5"],
        "5": ["#70284a", "#b24b65", "#dc7176", "#f2a28a", "#fbe6c5"],
        "6": ["#70284a", "#a44360", "#d06270", "#e7807d", "#f4b191", "#fbe6c5"],
        "7": ["#70284a", "#9c3f5d", "#c8586c", "#dc7176", "#ee8a82", "#f5ba98", "#fbe6c5"],
        "tags": ["quantitative"]
    },
"DarkMint": {
        "2": ["#123f5a", "#d2fbd4"],
        "3": ["#123f5a", "#559c9e", "#d2fbd4"],
        "4": ["#123f5a", "#3a7c89", "#7bbcb0", "#d2fbd4"],
        "5": ["#123f5a", "#2b6c7f", "#559c9e", "#8eccb9", "#d2fbd4"],
        "6": ["#123f5a", "#266377", "#458892", "#6cafa9", "#9cd5be", "#d2fbd4"],
        "7": ["#123f5a", "#235d72", "#3a7c89", "#559c9e", "#7bbcb0", "#a5dbc2", "#d2fbd4"],
        "tags": ["quantitative"]
    },
"Earth": {
        "2": ["#A16928", "#2887a1"],
        "3": ["#A16928", "#edeac2", "#2887a1"],
        "4": ["#A16928", "#d6bd8d", "#b5c8b8", "#2887a1"],
        "5": ["#A16928", "#caa873", "#edeac2", "#98b7b2", "#2887a1"],
        "6": ["#A16928", "#c29b64", "#e0cfa2", "#cbd5bc", "#85adaf", "#2887a1"],
        "7": ["#A16928", "#bd925a", "#d6bd8d", "#edeac2", "#b5c8b8", "#79a7ac", "#2887a1"],
        "tags": ["diverging"]
    },
"Emrld": {
        "2": ["#074050", "#d3f2a3"],
        "3": ["#074050", "#4c9b82", "#d3f2a3"],
        "4": ["#074050", "#217a79", "#6cc08b", "#d3f2a3"],
        "5": ["#074050", "#19696f", "#4c9b82", "#82d091", "#d3f2a3"],
        "6": ["#074050", "#145f69", "#35877d", "#60b187", "#8fda94", "#d3f2a3"],
        "7": ["#074050", "#105965", "#217a79", "#4c9b82", "#6cc08b", "#97e196", "#d3f2a3"],
        "tags": ["quantitative"]
    },
"Fall": {
        "2": ["#3d5941", "#ca562c"],
        "3": ["#3d5941", "#f6edbd", "#ca562c"],
        "4": ["#3d5941", "#b5b991", "#edbb8a", "#ca562c"],
        "5": ["#3d5941", "#96a07c", "#f6edbd", "#e6a272", "#ca562c"],
        "6": ["#3d5941", "#839170", "#cecea2", "#f1cf9e", "#e19464", "#ca562c"],
        "7": ["#3d5941", "#778868", "#b5b991", "#f6edbd", "#edbb8a", "#de8a5a", "#ca562c"],
        "tags": ["diverging"]
    },
"Geyser": {
        "2": ["#008080", "#ca562c"],
        "3": ["#008080", "#f6edbd", "#ca562c"],
        "4": ["#008080", "#b4c8a8", "#edbb8a", "#ca562c"],
        "5": ["#008080", "#92b69e", "#f6edbd", "#e6a272", "#ca562c"],
        "6": ["#008080", "#7eab98", "#ced7b1", "#f1cf9e", "#e19464", "#ca562c"],
        "7": ["#008080", "#70a494", "#b4c8a8", "#f6edbd", "#edbb8a", "#de8a5a", "#ca562c"],
        "tags": ["diverging"]
    },
"Magenta": {
        "2": ["#6c2167", "#f3cbd3"],
        "3": ["#6c2167", "#ca699d", "#f3cbd3"],
        "4": ["#6c2167", "#b14d8e", "#dd88ac", "#f3cbd3"],
        "5": ["#6c2167", "#a24186", "#ca699d", "#e498b4", "#f3cbd3"],
        "6": ["#6c2167", "#983a81", "#bc5894", "#d67ba5", "#e7a2b9", "#f3cbd3"],
        "7": ["#6c2167", "#91357d", "#b14d8e", "#ca699d", "#dd88ac", "#eaa9bd", "#f3cbd3"],
        "tags": ["quantitative"]
    },
"Mint": {
        "2": ["#0d585f", "#e4f1e1"],
        "3": ["#0d585f", "#63a6a0", "#e4f1e1"],
        "4": ["#0d585f", "#448c8a", "#89c0b6", "#e4f1e1"],
        "5": ["#0D585F", "#337F7F", "#63A6A0", "#9CCDC1", "#E4F1E1"],
        "6": ["#0d585f", "#2c7778", "#509693", "#7ab5ad", "#abd4c7", "#e4f1e1"],
        "7": ["#0d585f", "#287274", "#448c8a", "#63a6a0", "#89c0b6", "#b4d9cc", "#e4f1e1"],
        "tags": ["quantitative"]
    },
"OrYel": {
        "2": ["#ee4d5a", "#ecda9a"],
        "3": ["#ee4d5a", "#f7945d", "#ecda9a"],
        "4": ["#ee4d5a", "#f97b57", "#f3ad6a", "#ecda9a"],
        "5": ["#ee4d5a", "#f86f56", "#f7945d", "#f1b973", "#ecda9a"],
        "6": ["#ee4d5a", "#f76856", "#f98558", "#f5a363", "#f0c079", "#ecda9a"],
        "7": ["#ee4d5a", "#f66356", "#f97b57", "#f7945d", "#f3ad6a", "#efc47e", "#ecda9a"],
        "tags": ["quantitative"]
    },
"Pastel": {
        "2": ["#78BDC8", "#F4C34C"],
        "3": ["#78BDC8", "#F4C34C", "#DCB0F2"],
        "4": ["#78BDC8", "#F4C34C", "#DCB0F2", "#87C55F"],
        "5": ["#78BDC8", "#F4C34C", "#DCB0F2", "#87C55F", "#9EB9F3"],
        "6": ["#78BDC8", "#F4C34C", "#DCB0F2", "#87C55F", "#9EB9F3", "#F89C74"],
        "7": ["#78BDC8", "#F4C34C", "#DCB0F2", "#87C55F", "#9EB9F3", "#F89C74", "#FE88B1"],
        "8": ["#78BDC8", "#F4C34C", "#DCB0F2", "#87C55F", "#9EB9F3", "#F89C74", "#FE88B1", "#48C1C0"],
        "9": ["#78BDC8", "#F4C34C", "#DCB0F2", "#87C55F", "#9EB9F3", "#F89C74", "#FE88B1", "#48C1C0", "#C9DB74"],
        "10": ["#78BDC8", "#F4C34C", "#DCB0F2", "#87C55F", "#9EB9F3", "#F89C74", "#FE88B1", "#48C1C0", "#C9DB74", "#8BE0A4"],
        "11": ["#78BDC8", "#F4C34C", "#DCB0F2", "#87C55F", "#9EB9F3", "#F89C74", "#FE88B1", "#48C1C0", "#C9DB74", "#8BE0A4", "#9DB8C1"],
        "tags": ["qualitative"]
    },
"Peach": {
        "3": ["#eb4a40", "#f59e72", "#fde0c5"],
        "4": ["#eb4a40", "#f2855d", "#f8b58b", "#fde0c5"],
        "5": ["#eb4a40", "#f17854", "#f59e72", "#f9c098", "#fde0c5"],
        "6": ["#eb4a40", "#f0704f", "#f38f65", "#f7ac80", "#fac7a1", "#fde0c5"],
        "7": ["#eb4a40", "#ef6a4c", "#f2855d", "#f59e72", "#f8b58b", "#facba6", "#fde0c5"],
        "tags": ["quantitative"]
    },
"PinkYl": {
        "2": ["#e15383", "#fef6b5"],
        "3": ["#e15383", "#ffa679", "#fef6b5"],
        "4": ["#e15383", "#fa8a76", "#ffc285", "#fef6b5"],
        "5": ["#e15383", "#f67b77", "#ffa679", "#ffd08e", "#fef6b5"],
        "6": ["#e15383", "#f37378", "#fd9576", "#ffb77f", "#ffd795", "#fef6b5"],
        "7": ["#e15383", "#f16d7a", "#fa8a76", "#ffa679", "#ffc285", "#ffdd9a", "#fef6b5"],
        "tags": ["quantitative"]
    },
"Prism": {
        "2": ["#5B3F95","#1D6996"],
        "3": ["#5B3F95","#1D6996","#129C63","#73AF48"],
        "4": ["#5B3F95","#1D6996","#129C63","#73AF48","#EDAD08"],
        "5": ["#5B3F95","#1D6996","#129C63","#73AF48","#EDAD08","#E17C05"],
        "6": ["#5B3F95","#1D6996","#129C63","#73AF48","#EDAD08","#E17C05","#C94034"],
        "7": ["#5B3F95","#1D6996","#129C63","#73AF48","#EDAD08","#E17C05","#C94034","#BA0040"],
        "8": ["#5B3F95","#1D6996","#129C63","#73AF48","#EDAD08","#E17C05","#C94034","#BA0040","#8E1966"],
        "9": ["#5B3F95","#1D6996","#129C63","#73AF48","#EDAD08","#E17C05","#C94034","#BA0040","#8E1966","#6F3072"],
        "10":["#5B3F95","#1D6996","#129C63","#73AF48","#EDAD08","#E17C05","#C94034","#BA0040","#8E1966","#6F3072","#DC1721"],
        "11":["#5B3F95","#1D6996","#129C63","#73AF48","#EDAD08","#E17C05","#C94034","#BA0040","#8E1966","#6F3072","#DC1721","#555"],
        "tags": ["qualitative"]
    },
"Purp": {
        "2": ["#63589f", "#f3e0f7"],
        "3": ["#63589f", "#b998dd", "#f3e0f7"],
        "4": ["#63589f", "#9f82ce", "#d1afe8", "#f3e0f7"],
        "5": ["#63589f", "#9178c4", "#b998dd", "#dbbaed", "#f3e0f7"],
        "6": ["#63589f", "#8871be", "#aa8bd4", "#c8a5e4", "#e0c2ef", "#f3e0f7"],
        "7": ["#63589f", "#826dba", "#9f82ce", "#b998dd", "#d1afe8", "#e4c7f1", "#f3e0f7"],
        "tags": ["quantitative"]
    },
"PurpOr": {
        "3": ["#573b88", "#ce78b3", "#f9ddda"],
        "4": ["#573b88", "#ad5fad", "#e597b9", "#f9ddda"],
        "5": ["#573b88", "#9955a8", "#ce78b3", "#eda8bd", "#f9ddda"],
        "6": ["#573b88", "#8c4fa4", "#bb69b0", "#dd8ab6", "#f0b2c1", "#f9ddda"],
        "7": ["#573b88", "#834ba0", "#ad5fad", "#ce78b3", "#e597b9", "#f2b9c4", "#f9ddda"],
        "tags": ["quantitative"]
    },
"RedOr": {
        "2": ["#b13f64", "#f6d2a9"],
        "3": ["#b13f64", "#ea8171", "#f6d2a9"],
        "4": ["#b13f64", "#dd686c", "#f19c7c", "#f6d2a9"],
        "5": ["#b13f64", "#d55d6a", "#ea8171", "#f3aa84", "#f6d2a9"],
        "6": ["#b13f64", "#cf5669", "#e3726d", "#ef9177", "#f4b28a", "#f6d2a9"],
        "7": ["#b13f64", "#ca5268", "#dd686c", "#ea8171", "#f19c7c", "#f5b78e", "#f6d2a9"],
        "tags": ["quantitative"]
    },
"Safe": {
        "2": ["#88CCEE", "#CC6677"],
        "3": ["#88CCEE", "#CC6677", "#DDCC77"],
        "4": ["#88CCEE", "#CC6677", "#DDCC77", "#117733"],
        "5": ["#88CCEE", "#CC6677", "#DDCC77", "#117733", "#332288"],
        "6": ["#88CCEE", "#CC6677", "#DDCC77", "#117733", "#332288", "#AA4499"],
        "7": ["#88CCEE", "#CC6677", "#DDCC77", "#117733", "#332288", "#AA4499", "#44AA99"],
        "8": ["#88CCEE", "#CC6677", "#DDCC77", "#117733", "#332288", "#AA4499", "#44AA99", "#999933"],
        "9": ["#88CCEE", "#CC6677", "#DDCC77", "#117733", "#332288", "#AA4499", "#44AA99", "#999933", "#882255"],
        "10": ["#88CCEE", "#CC6677", "#DDCC77", "#117733", "#332288", "#AA4499", "#44AA99", "#999933", "#882255", "#661100"],
        "11": ["#88CCEE", "#CC6677", "#DDCC77", "#117733", "#332288", "#AA4499", "#44AA99", "#999933", "#882255", "#661100", "#888888"],
        "tags": ["qualitative", "colorblind"]
    },
"Sunset": {
        "2": ["#5c53a5", "#f3e79b"],
        "3": ["#5c53a5", "#eb7f86", "#f3e79b"],
        "4": ["#5c53a5", "#ce6693", "#f8a07e", "#f3e79b"],
        "5": ["#5c53a5", "#b95e9a", "#eb7f86", "#fab27f", "#f3e79b"],
        "6": ["#5c53a5", "#ab5b9e", "#dc6f8e", "#f59280", "#fabc82", "#f3e79b"],
        "7": ["#5c53a5", "#a059a0", "#ce6693", "#eb7f86", "#f8a07e", "#fac484", "#f3e79b"],
        "tags": ["quantitative"]
    },
"SunsetDark": {
        "2": ["#7c1d6f", "#fcde9c"],
        "3": ["#7c1d6f", "#e34f6f", "#fcde9c"],
        "4": ["#7c1d6f", "#dc3977", "#f0746e", "#fcde9c"],
        "5": ["#7c1d6f", "#d72d7c", "#e34f6f", "#f58670", "#fcde9c"],
        "6": ["#7c1d6f", "#c5287b", "#df4273", "#ec666d", "#f89872", "#fcde9c"],
        "7": ["#7c1d6f", "#b9257a", "#dc3977", "#e34f6f", "#f0746e", "#faa476", "#fcde9c"],
        "tags": ["quantitative"]
    },
"Teal": {
        "2": ["#2a5674", "#d1eeea"],
        "3": ["#2a5674", "#68abb8", "#d1eeea"],
        "4": ["#2a5674", "#4f90a6", "#85c4c9", "#d1eeea"],
        "5": ["#2a5674", "#45829b", "#68abb8", "#96d0d1", "#d1eeea"],
        "6": ["#2a5674", "#3f7994", "#599bae", "#79bbc3", "#a1d7d6", "#d1eeea"],
        "7": ["#2a5674", "#3b738f", "#4f90a6", "#68abb8", "#85c4c9", "#a8dbd9", "#d1eeea"],
        "tags": ["quantitative"]
    },
"TealGrn": {
        "2": ["#257d98", "#b0f2bc"],
        "3": ["#257d98", "#4cc8a3", "#b0f2bc"],
        "4": ["#257d98", "#38b2a3", "#67dba5", "#b0f2bc"],
        "5": ["#257d98", "#31a6a2", "#4cc8a3", "#77e2a8", "#b0f2bc"],
        "6": ["#257d98", "#2e9ea1", "#3fbba3", "#5bd4a4", "#82e6aa", "#b0f2bc"],
        "7": ["#257d98", "#2c98a0", "#38b2a3", "#4cc8a3", "#67dba5", "#89e8ac", "#b0f2bc"],
        "tags": ["quantitative"]
    },
"TealRose": {
        "2": ["#009392", "#cf597e"],
        "3": ["#009392", "#e9e29c", "#cf597e"],
        "4": ["#009392", "#9ccb86", "#eeb479", "#cf597e"],
        "5": ["#009392", "#71be83", "#e9e29c", "#ed9c72", "#cf597e"],
        "6": ["#009392", "#52b684", "#bcd48c", "#edc783", "#eb8d71", "#cf597e"],
        "7": ["#009392", "#39b185", "#9ccb86", "#e9e29c", "#eeb479", "#e88471", "#cf597e"],
        "tags": ["diverging"]
    },
"Tropic": {
        "2": ["#C75DAB", "#009B9E"],
        "3": ["#C75DAB", "#F1F1F1", "#009B9E"],
        "4": ["#C75DAB", "#E4C1D9", "#A7D3D4", "#009B9E"],
        "5": ["#C75DAB", "#DDA9CD", "#F1F1F1", "#7CC5C6", "#009B9E"],
        "6": ["#C75DAB", "#D99BC6", "#E9D4E2", "#C6DFDF", "#5DBCBE", "#009B9E"],
        "7": ["#C75DAB", "#D691C1", "#E4C1D9", "#F1F1F1", "#A7D3D4", "#42B7B9", "#009B9E"],
        "tags": ["diverging"]
    },
"Vivid": {
        "2": ["#E58606", "#5D69B1"],
        "3": ["#E58606", "#5D69B1", "#52BCA3"],
        "4": ["#E58606", "#5D69B1", "#52BCA3", "#99C945"],
        "5": ["#E58606", "#5D69B1", "#52BCA3", "#99C945", "#2F8AC4"],
        "6": ["#E58606", "#5D69B1", "#52BCA3", "#99C945", "#2F8AC4", "#24796C"],
        "7": ["#E58606", "#5D69B1", "#52BCA3", "#99C945", "#2F8AC4", "#24796C", "#cc2d7f"],
        "8": ["#E58606", "#5D69B1", "#52BCA3", "#99C945", "#2F8AC4", "#24796C", "#cc2d7f", "#764e9f"],
        "9": ["#E58606", "#5D69B1", "#52BCA3", "#99C945", "#2F8AC4", "#24796C", "#cc2d7f", "#764e9f", "#ed645a"],
        "10": ["#E58606", "#5D69B1", "#52BCA3", "#99C945", "#2F8AC4", "#24796C", "#cc2d7f", "#764e9f", "#ed645a", "#CC61B0"],
        "11": ["#E58606", "#5D69B1", "#52BCA3", "#99C945", "#2F8AC4", "#24796C", "#cc2d7f", "#764e9f", "#ed645a", "#CC61B0", "#A5AA99"],
        "tags": ["qualitative"]
    },
"ag_GrnYl": {
        "2": ["#245668", "#EDEF5D"],
        "3": ["#245668", "#39AB7E", "#EDEF5D"],
        "4": ["#245668", "#0D8F81", "#6EC574", "#EDEF5D"],
        "5": ["#245668", "#39AB7E", "#39AB7E", "#8BD16D", "#EDEF5D"],
        "6": ["#245668", "#09787C", "#1D9A81", "#58BB79", "#9DD869", "#EDEF5D"],
        "7": ["#245668", "#0F7279", "#0D8F81", "#39AB7E", "#6EC574", "#A9DC67", "#EDEF5D"],
        "tags": ["aggregation"]
    },
"ag_Sunset": {
        "2": ["#4b2991", "#edd9a3"],
        "3": ["#4b2991", "#ea4f88", "#edd9a3"],
        "4": ["#4b2991", "#c0369d", "#fa7876", "#edd9a3"],
        "5": ["#4b2991", "#a52fa2", "#ea4f88", "#fa9074", "#edd9a3"],
        "6": ["#4b2991", "#932da3", "#d43f96", "#f7667c", "#f89f77", "#edd9a3"],
        "7": ["#4b2991", "#872ca2", "#c0369d", "#ea4f88", "#fa7876", "#f6a97a", "#edd9a3"],
        "tags": ["aggregation"]
    },
};


var colorbrewer_tags = {
  "Blues": { "tags": ["quantitative"] },
  "BrBG": { "tags": ["diverging"] },
  "Greys": { "tags": ["quantitative"] },
  "PiYG": { "tags": ["diverging"] },
  "PRGn": { "tags": ["diverging"] },
  "Purples": { "tags": ["quantitative"] },
  "RdYlGn": { "tags": ["diverging"] },
  "Spectral": { "tags": ["diverging"] },
  "YlOrBr": { "tags": ["quantitative"] },
  "YlGn": { "tags": ["quantitative"] },
  "YlGnBu": { "tags": ["quantitative"] },
  "YlOrRd": { "tags": ["quantitative"] }
}

var colorbrewer = require('colorbrewer');

// augment colorbrewer with tags
for (var r in colorbrewer) {
  var ramps = colorbrewer[r];
  var reversedRamps = {};
  for (var i in ramps) {
    reversedRamps[i] = [].concat(ramps[i]).reverse();
  }

  if (r in colorbrewer_tags) {
    reversedRamps.tags = colorbrewer_tags[r].tags;
  }

  cartocolor['cb_' + r] = reversedRamps;
}

if (typeof define === "function" && define.amd) {
    define(cartocolor);
} else if (typeof module === "object" && module.exports) {
    module.exports = cartocolor;
} else {
    this.colorbrewer = cartocolor;
}

}();
