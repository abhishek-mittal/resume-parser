const PDFParser = require("pdf2json")

function pdfConvertor(pdfPath, callback) {
    let pdfParser = new PDFParser(this, 1);
    
    pdfParser.loadPDF(pdfPath);
    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", pdfData => {
        callback(null,pdfParser.getRawTextContent())
    });
}

module.exports.pdfConvertor = pdfConvertor