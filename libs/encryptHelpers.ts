import CryptoJS from 'crypto-js'

const key = process.env.NEXT_PUBLIC_KEY || ''

const encryptAES = (text: string) => {
  return CryptoJS.AES.encrypt(text, key).toString();
};

const decryptAES = (encryptedBase64: string) => {

  const decrypted = CryptoJS.AES.decrypt(encryptedBase64, key)
  if (decrypted) {
    try {
      const str = decrypted.toString(CryptoJS.enc.Utf8)
      if (str.length > 0) {
        return str
      } else {
        return 'error 1'
      }
    } catch (e) {
      return 'error 2'
    }
  }
  return 'error 3'
}

export { encryptAES, decryptAES };
