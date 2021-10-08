 
 // we have Y = 6.3X - 4
 // y = 6.3 * x - 4


// Create Training Data
const x = tf.tensor([0, 1, 2, 3, 4, 5, 6, 7, 8]);
const y = x.mul(6.3).sub(4);


//Creating a Model 
const model = tf.sequential();
model.add(tf.layers.dense({units:1, inputShape:[1]}));

// Specify Loss and Optimizer
model.compile({loss: 'meanSquaredError', optimizer:'sgd'});

// Train the Model
model.fit(x, y, {epochs:500}).then(() => {myModel()});

// Use the Model
function myModel() {
  
  const myXarray = [];
  const myYarray = []; 

    for (let i = 0; i <= 12; i++) {
    let result = model.predict(tf.tensor([Number(i)]));
    result.data().then(y => {
        myXarray.push(i);
        myYarray.push(Number(y));
        if (i == 12) { plot(myXarray, myYarray)};
    });
  }
  document.getElementById('trainingnotification').style.display="none";
}

function plot(myXarray, myYarray) {
// Define Data
const data = [{ x: myXarray, y: myYarray,mode:"markers",type:"bar"}];

// Define Layout
const layout = {
  xaxis: {range: [0, 12]},
  yaxis: {range: [0, 40]},  
};

// Display Plot
Plotly.newPlot("myPlot", data, layout);
}
 
