import { SHA256 } from "crypto-js";

export const hashPassword = (string: string | CryptoJS.lib.WordArray) => {
  return SHA256(string).toString();
};
