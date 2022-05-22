const crypto = require('crypto-js')
const fs = require('fs')
exports.getfileHash = function (filename){
    const fileBuffer = fs.readFileSync(filename.toString());
    const hashSum = crypto.SHA256(fileBuffer);
    return hashSum.toString();
};
exports.gettextMD5 = function(text){
    return crypto.MD5(text).toString();
}