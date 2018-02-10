var mammoth = require("mammoth");
var fs = require('fs');

mammoth.extractRawText({path: "./shubham.docx"})
    .then(function(result){
        var text = result.value; // The raw text
        console.log(text);
        fs.writeFile("./test.txt", text);
        var messages = result.messages;
    })
    .done();