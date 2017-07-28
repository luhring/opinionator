// One or more required node modules include PEM files.  The presence of PEM files causes errors when packaging a Chrome extension.  Thus, these files must be removed prior to packaging.

const fs = require("fs");

const filePathsToRemove = [
  "node_modules/public-encrypt/test/test_key.pem",
  "node_modules/public-encrypt/test/test_rsa_privkey.pem",
  "node_modules/public-encrypt/test/test_rsa_pubkey.pem"
];

const handleUnlinkError = (error, filePath) => {
  if (error) {
    const noSuchFileOrDirectoryErrorCode = "ENOENT";

    if (error.code === noSuchFileOrDirectoryErrorCode) {
      console.log("(File was already absent:", filePath, ")");
    } else {
      console.error(error.code);
    }
  }
}

const removeFileAtPath = (filePath) => {
  fs.unlink(filePath, (error) => handleUnlinkError(error, filePath));
}

filePathsToRemove.forEach(removeFileAtPath);
