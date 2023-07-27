const yauzl = require("yauzl");
const fs = require("fs");
const path = require("path");

// Function to extract the zip file contents to a new folder
function extractZip(zipFilePath, destinationFolder) {
  yauzl.open(zipFilePath, { lazyEntries: true }, (err, zipfile) => {
    if (err) throw err;

    zipfile.readEntry();
    zipfile.on("entry", (entry) => {
      // Check if the entry is a directory (ends with the platform-specific path separator)
      if (entry.fileName.endsWith(path.sep)) {
        // Create the directory in the destination folder
        const folderPath = path.join(destinationFolder, entry.fileName);
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        zipfile.readEntry();
      } else {
        // Extract the file and write its contents to the destination file
        zipfile.openReadStream(entry, (err, readStream) => {
          if (err) throw err;
          const filePath = path.join(destinationFolder, entry.fileName);

          const writeStream = fs.createWriteStream(filePath);
          readStream.pipe(writeStream);
          readStream.on("end", () => {
            zipfile.readEntry();
          });
        });
      }
    });

    zipfile.on("end", () => {
      console.log("Extraction completed successfully!");
    });
  });
}

// Usage

const main = (serviceName) => {
  if (!serviceName) {
    throw new Error("Service name is required");
  }

  const zipFilePath = "./boilerplate.zip";
  const destinationFolder = "../services/" + serviceName;

  fs.mkdirSync(destinationFolder, { recursive: true });

  extractZip(zipFilePath, destinationFolder);
};

main("amazing-service");
