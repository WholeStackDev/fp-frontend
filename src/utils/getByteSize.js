const getSize = bytes => {
  const abb = ["B", "KB", "MB", "GB", "TB", "PB", "EB"];
  var i = 0;
  var size = bytes;
  while (size > 1024 && i < 6) {
    i++;
    size = size / 1024;
  }
  return Math.round(size * 100) / 100 + abb[i];
};

export default getSize;
