import axios from "axios";

const uploadTrack = async (track, file) => {
  const res = await axios.post("/tracks/create", track);
  let formData = new FormData();
  formData.append("upload", file);
  await axios.post("/tracks/upload?id=" + res.data.id, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

export { uploadTrack };
