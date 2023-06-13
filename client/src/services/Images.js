const url = "http://localhost:3001";

export default async function ImageService(formData) {
  try {
    const response = await fetch(url + '/api/upload', {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Error uploading image");
    }
    const { imageUrl } = await response.json();
    return imageUrl;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
