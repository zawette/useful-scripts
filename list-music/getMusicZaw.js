const fs = require("fs")
const mm = require("music-metadata")

fs.readdir("..", async (err, files) => {
  const filesTypes = ["mp3", "wav"]
  const audioFiles = files.filter((file) =>
    filesTypes.some((ft) => file.includes(ft))
  );
  var outputFile = fs.createWriteStream("musicList.txt");
  outputFile.write("My Music List \n")

  const afLength= audioFiles.length
  for (const [index,af] of audioFiles.entries()) {
    const metadata = await mm.parseFile("../"+af);
    const buffer = metadata.common.title
      ? `${metadata.common.artist} - ${metadata.common.title} - ${metadata.common.album}`
      : af
      console.log(`${index} of ${afLength} -  ${buffer}`)
    outputFile.write(buffer + "\n")
  }
  outputFile.end()
});
