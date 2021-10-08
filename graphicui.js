

const mytag = document.getElementById('mygraph2');

const data = [
    { index: 0, value: 10 },
    { index: 1, value: 20 },
    { index: 2, value: 30 },
    { index: 3, value: 40 },
    { index: 4, value: 50 },
    { index: 5, value: 60 },
    { index: 6, value: 70 },
    { index: 7, value: 80 },
];

tfvis.render.barchart(mytag, data);








// const data = [
//     { index: 0, value: 10 },
//     { index: 1, value: 20 },
//     { index: 2, value: 30 },
//     { index: 3, value: 40 },
//     { index: 4, value: 50 },
//     { index: 5, value: 60 },
//     { index: 6, value: 70 },
//     { index: 7, value: 80 },
// ];

// tfvis.render.barchart({ name: "my Data" }, data);









const surface = document.getElementById('mygraph3');

let values = [
    { x: 1, y: 10 },
    { x: 2, y: 20 },
    { x: 3, y: 30 },
    { x: 4, y: 22 },
    { x: 5, y: 12 },
    { x: 6, y: 34 },
    { x: 7, y: 12 },
    { x: 8, y: 55 }
];

tfvis.render.linechart(surface, { values });







