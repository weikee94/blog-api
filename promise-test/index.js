const fs = require("fs");
const path = require("path");

// callback retrieve content
function getFileContent(fileName, callback) {
  const fullFileName = path.resolve(__dirname, "files", fileName);
  fs.readFile(fullFileName, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    callback(JSON.parse(data.toString()));
  });
}

// callback method: this is what we called callback hell
getFileContent("a.json", (aData) => {
  console.log("a data", aData);
  getFileContent(aData.next, (bData) => {
    console.log("b data", bData);
    getFileContent(bData.next, (cData) => {
      console.log("c data", cData);
    });
  });
});

// promise method
function getFileContentPromise(fileName) {
  const promise = new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, "files", fileName);
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data.toString()));
    });
  });
  return promise;
}

getFileContentPromise("a.json")
  .then((aData) => {
    console.log("a promise data", aData);
    return getFileContentPromise(aData.next);
  })
  .then((bData) => {
    console.log("b promise data", bData);
    return getFileContentPromise(bData.next);
  })
  .then((cData) => {
    console.log("c promise data", cData);
  });

// async await method
readFileData = async () => {
  // 同步写法
  const aData = await getFileContentPromise("a.json");
  console.log("a data: ", aData);
  const bData = await getFileContentPromise(aData.next);
  console.log("b data: ", bData);
  const cData = await getFileContentPromise(bData.next);
  console.log("c data: ", cData);
};

readFileData();

async function readData() {
  const aData = await getFileContentPromise("a.json");
  return aData;
}

async function test() {
  const aData = await readData();
  console.log("test: ", aData);
}

test();
