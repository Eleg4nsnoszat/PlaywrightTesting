let CryptoJSUtil = require("crypto-js");


const SALT = process.env.SALT || "defaultSalt";

export function encrypt(text : string){
    const cipherTect = CryptoJSUtil.AES.encrypt(text, SALT).toString();
}

export function decyrpt(cipherText: string){
    const bytes = CryptoJSUtil.AES.decrypt(cipherText, SALT);
    const originalText = bytes.toString(CryptoJSUtil.enc.Utf8);
    return originalText;
}