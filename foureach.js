let a = ["ant", "bat", "cat",42];
a.forEach(function(i){
    console.log(i)
});
let soliloquy = "To be, or not to be, that is a question";
Array.from(soliloquy).forEach(function(i){
    console.log(i)
});

a.forEach((item) => {
  console.log(item);
});
