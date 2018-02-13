var mammoth = require("mammoth");

function msConvertor(pdfPath, callback) {
    mammoth.extractRawText({path: pdfPath})
    .then(function(result){
    var text = result.value; // The raw text
    console.log(text);
    callback(null,text)
    })
    .done();
}

module.exports.msConvertor = msConvertor
