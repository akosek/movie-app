const editJsonFile = require("edit-json-file");

const file = editJsonFile(`app.json`);

const currentBuildNumber = file.get("expo.android.versionCode");
const newBuildNumber = currentBuildNumber + 1;

file.set("expo.android.versionCode", newBuildNumber);
file.set("expo.ios.buildNumber", newBuildNumber.toString());
file.save();

console.log(`Buildnumber was bumped to ${newBuildNumber}`);
