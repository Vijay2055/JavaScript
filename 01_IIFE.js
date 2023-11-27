(function chai(){
    console.log(`Hello welcome to iife`)
}) ();

// Note: if you use two iife function then use semicolon to execute both

((user)=>{
    console.log(`Hello from two ${user}`)
})("Vijay")