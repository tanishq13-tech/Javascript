// For each

const coding = ["js", "rb", "py"]
// coding.forEach(function (val) {
//     // console.log(val);
// })
coding.forEach(() => {
    // console.log(val);
})

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);  
})

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    },    
    {
        languageName: "python",
        languageFileName: "py"
    },    
    {
        languageName: "java",
        languageFileName: "java"
    }   
]
mycoding.forEach((item) => {
    console.log(item.languageName);
    
})