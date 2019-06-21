const fs = require("fs");

/* Fixes unresolved urls for images and fonts in spublic/stylesheets/main.<hash>.css 
  Run with
  node ./resolve-url.js  ./dist/public/stylesheets  main "../"
*/
let content = "";
const pathToDir = process.argv[2];
const filePartialName = process.argv[3];
// hardcoded oldValue because when I pass this on CL: /url\(public\//g  it gets converted to  /url(public//g
// I cant get around it so far:
const oldValue = /url\(public\//g;
const newValue = process.argv[4];

if (process.argv.length <= 4) {
  console.log(
    `Error: four arguments required: ${__filename} path/to/directory  filePartialName  newValue`
  );
  process.exit(-1);
}

function isStringContains(str, searchStr) {
  return str.includes(searchStr);
}

function processFile(file, text) {
  // // console.log(text);
  // replace public/fonts and public/images with ../fonts
  const newtext = text.replace(/url\(public\//g, newValue);
  // // console.log(newtext);
  fs.writeFile(file, newtext, err => {
    if (err) throw err;
    console.log(
      `${file} saved with these changes: url(public/ replaced with ${newValue}`
    );
  });
}

function displayFileContents(someVar, callback) {
  let filename = "some.css";

  fs.readdir(pathToDir, function fn(err, items) {
    // console.log(`2. ${filename}`);

    for (let i = 0; i < items.length; i++) {
      if (isStringContains(items[i], filePartialName)) {
        filename = items[i];
        // console.log(`3. ${filename}`);

        callback(filename);
      }
    }
    // console.log(`5. ${filename}`);
  });

  // console.log(`1. ${filename}`);
}

function readFile(nameOfFile) {
  // console.log(`4. entering readFile with ${nameOfFile}`);
  fs.readFile(`${pathToDir}/${nameOfFile}`, "utf8", function read(err, data) {
    // console.log(`6. inside readFile with ${nameOfFile}`);
    if (err) {
      throw err;
    }
    content = data;
    // // console.log(`7. Processing content: ${content}`);
    processFile(`${pathToDir}/${nameOfFile}`, content);
  });
}

displayFileContents("stuff", readFile);
