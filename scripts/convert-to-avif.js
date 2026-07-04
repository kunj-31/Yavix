const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

async function convert() {
  const allFiles = getAllFiles(publicDir);
  const imageExtensions = ['.png', '.jpg', '.jpeg'];
  
  console.log(`Found ${allFiles.length} total files in public/ directory.`);
  let successCount = 0;
  
  for (const file of allFiles) {
    const ext = path.extname(file).toLowerCase();
    if (imageExtensions.includes(ext)) {
      const outputFilePath = file.substring(0, file.length - ext.length) + '.avif';
      console.log(`Converting: ${path.relative(publicDir, file)} -> ${path.relative(publicDir, outputFilePath)}`);
      
      try {
        await sharp(file)
          .avif({ quality: 80, effort: 4 })
          .toFile(outputFilePath);
        
        // Remove original file after verifying AVIF creation
        if (fs.existsSync(outputFilePath)) {
          fs.unlinkSync(file);
          successCount++;
        }
      } catch (err) {
        console.error(`❌ Failed to convert ${file}:`, err.message);
      }
    }
  }
  console.log(`🎉 Conversion process complete! Successfully converted ${successCount} images to AVIF.`);
}

convert();
