// Immediately Invoked Function Expressions (IIFE)
// Jo function immediately execute ho jaye
// it is used to remove the pollution created by global scope
// two iife likhne ke liye senicolon lagana jaruri hai taaki computer ko pta ho kha pr execution ko rokna hai and agla start krna hai

(function chai() {   // named iife
    console.log(`DB Connected`);
} )();

((name) => {   // unnamed iife
    console.log(`DB Connected To ${name}`);
    
})("User")