import fs from "fs";
import crypto, { generateKeyPairSync } from "crypto";
export const generateKeys = () => {
  const { privateKey, publicKey } = generateKeyPairSync("rsa", {
    modulusLength: 2048, 
  });

  fs.writeFileSync(
    "private.key",
    privateKey.export({ type: "pkcs1", format: "pem" })
  );

  fs.writeFileSync(
    "public.key",
    publicKey.export({ type: "spki", format: "pem" })
  );
};
