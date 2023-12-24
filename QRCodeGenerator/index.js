
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {
        message: "Enter URL to generate QR Code",
        name : "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));

  })
  .catch((error) => {
    if (error.isTtyError) {

      // Prompt couldn't be rendered in the current environment
        console.log("error");
    } else {
      // Something else went wrong
        console.log("error");
    }
  });