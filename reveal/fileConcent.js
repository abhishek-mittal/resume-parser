const fs = require('fs'),
 pdfConvertor = require('../convertor/pdf').pdfConvertor
 path = require('path'),
 msConvertor = require('../convertor/msword').msConvertor
 sanitize = require('text-sanitizer');


// console.log("child are ",module.parent)
let Path_File = path.join(__dirname,theFile)   


if (path.extname(Path_File).toLowerCase() == '.pdf'){

    pdfConvertor(Path_File, (err, data) => {
        if (err) console.error(Error("We Found an error!"));
        contentWriter(data)
    })
}

if (path.extname(Path_File).toLowerCase() == '.docx') {
    msConvertor(Path_File, (err, data) => {
        if (err) console.error(Error("We Found an error!"));
        contentWriter(data)
    })
}

// if (path.extname(Path_File).toLowerCase() == '.txt') {
//     msConvertor(Path_File, (err, data) => {
//         if (err) console.error(Error("We Found an error!"));
//         contentWriter(data)
//     })
// }

function contentWriter(data) {
        console.log(typeof data)
         data = sanitize(data, ['trim']);
         fs.writeFile(path.join(__dirname,"../content.txt"),data, (error, result) => {
             if (error) return process.exit(1)
             console.log('Data Successfully Written to the target!', " times take ", new Date() - start1 )
            });
            
}