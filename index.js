 

// const myValues = tf.tensor([1, 2, 3, 4]);

//document.getElementById("test").innerHTML = myValues;

// const myValues2 = tf.tensor([[1, 2], [3, 4]]);

// Pass a flat array and specify a shape yourself.
// const myValues3 = tf.tensor([1, 2, 3, 4,5,6], [3, 2]) ;


// const shape = [3, 2]
// const myValues4 = tf.tensor([1, 2, 3, 4, 5, 6], shape );

// const myValues5 = tf.tensor([1, 2, 3, 4, 5, 6], shape,"int32");
 


// function display(myvalues) {
//     document.getElementById("test").innerHTML = myvalues;
// }

// const myValues6 = tf.tensor([[21, 31], [3, 2]] );
// myValues6.data().then(data=>{
//     display(data)
// })
// document.getElementById("test2").innerHTML = myValues6;
// myValues6.print();


// const myValues7 = tf.tensor([[211, 131], [3, 2]]);
// myValues7.array().then(data => {
//     display(data[0])
// })
// document.getElementById("test2").innerHTML = myValues7;
// myValues7.print();







//tf.scalar (value, dtype?) function
// const xyz = tf.scalar(3.14) ;
// document.getElementById("test").innerHTML = xyz;
// xyz.print();



//tf.tensor1d (values, dtype?) function
// const x = tf.tensor1d([1, 2, 3],"int32") ;
// document.getElementById("test").innerHTML = x;
// x.print();



//tf.tensor2d (values, shape?, dtype?) function

// Pass a nested array.
// const x = tf.tensor2d([[1, 2], [3, 4]]) ;
// document.getElementById("test").innerHTML = x;
// x.print();

// Pass a flat array and specify a shape.
// const x = tf.tensor2d([1, 2, 3, 4], [2, 2]) ;
// document.getElementById("test").innerHTML = x;
// x.print();




//tf.tensor3d(values, shape ?, dtype ?) function

// Pass a nested array.
// const x = tf.tensor3d([[[1], [2]], [[3], [4]]]) ;
// document.getElementById("test").innerHTML = x;
// x.print();

// Pass a flat array and specify a shape.
//  const x = tf.tensor3d([1, 2, 3, 4], [2, 2, 1]) ;
// document.getElementById("test").innerHTML = x;
// x.print();



//tf.clone (x) function
//Creates a new tensor with the same values and shape as the specified tensor.

// const x = tf.tensor([1, 2]);
// x.clone();
// document.getElementById("test").innerHTML = x;
// x.print();



//tf.complex (real, imag) function
// const real = tf.tensor1d([2.25, 3.25]);
// const imag = tf.tensor1d([4.75, 5.75]);
// const complex = tf.complex(real, imag);

 
// document.getElementById("test").innerHTML = complex;
// complex.print();



//tf.diag (x) function
// const x = tf.tensor1d([1, 2, 3, 4]);
 

// document.getElementById("test").innerHTML = tf.diag(x);
// tf.diag(x).print();




//tf.ones (shape, dtype?) function
// const x = tf.ones([2, 2]) ;

// document.getElementById("test").innerHTML = x;
// x.print();


//tf.range(start, stop, step ?, dtype ?) function
// const x = tf.range(0, 9,2) ;

// document.getElementById("test").innerHTML = x;
// x.print();


//tf.zeros (shape, dtype?) function
// const x = tf.zeros([2, 2]) ;



const x = tf.tensor([[2, 3], [4, 5], [6, 7]] )
const y = tf.tensor([[1, 2], [3, 4], [5, 6]])

const z = tf.tensor([[2], [4], [6], [7]])

const s = tf.tensor([[2,4], [6,7]])

const d = s.reshape([4,1])

// const result = x.add(y)
// const result = x.sub(y)
// const result = x.mul(y)
//const result = x.div(y)
//const result = x.square()

const result = z.add(d)

document.getElementById("test").innerHTML = d;
d.print();
