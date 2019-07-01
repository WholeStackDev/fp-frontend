import * as mm from "music-metadata-browser";

const fileSelectHandler = (event, onFileSelected) => {
  (async (files, onFileSelected) => {
    const results = [];
    for (const file of files) {
      let meta = await mm.parseBlob(file);
      results.push({
        fileName: file.name || "",
        title: meta.common.title || "",
        speaker: meta.common.artist || "",
        event: "",
        eventYear: meta.common.year || null,
        fileSize: file.size || 0,
        duration: meta.format.duration || 0,
        file: file
      });
    }
    onFileSelected(results);
  })(event.target.files, onFileSelected);
};

export { fileSelectHandler };
