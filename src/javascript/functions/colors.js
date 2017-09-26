export const blue = '#337ab7';
export const red = '#b74233';
export const green = '#4B993F';
export const yellow = '#b7a533';
export const lightBlack = '#143049';
export const brown = '#b77033';

//taken from http://www.color-hex.com/color/337ab7 => 3 tints from related colors
export const blues = ['#22527b', blue, '#63a0d4'];
export const greens = ['#7ab733', '#a1cc70', '#c9e2ad'];
export const browns = [brown, '#cc9a70', '#e2c5ad'];
export const violets = ['#b7337a', '#cc70a1', '#e9c1d7'];
export const yellows = [yellow, '#ccc970', '#e2e0ad'];

export const reds = ['#7b2c22', red, '#d47063']


export const barColors = [
    ...blues,
    ...greens,
    ...browns,
    ...violets,
    ...yellows,
    ...reds,
];

export const lineColors = [];

for (var i = 0; i <= 3; i++) {
    lineColors.push(blues[i]);
    lineColors.push(greens[i]);
    lineColors.push(browns[i]);
    lineColors.push(violets[i]);
    lineColors.push(yellows[i]);
}

export const tooltipBackground = '#efefef';