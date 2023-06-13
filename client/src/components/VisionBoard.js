import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "../App.css";
import ImageService from "../services/Images";
import { getAllImages } from "../services/Images";

export default function VisionBoard() {
  const [uploadedImages, setUploadedImages] = useState([]);

  const onDrop = async (acceptedFiles) => {
    const formData = new FormData();
    formData.append("image", acceptedFiles[0]);
    // console.log(formData, 'server')
    try {
      // console.log(formData, 'server')
      const image = await ImageService(formData);
      console.log(image, 'server')
      setUploadedImages([...uploadedImages, image]);
    } catch (error) {
      console.error(error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await getAllImages();
        // console.log(images, 'Gary images')
        setUploadedImages(images);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div><button className="image-grid" type="button">
    Upload
    </button>
    <div className="vision-board">
    <div {...getRootProps()}>
      <input {...getInputProps()} />
    </div>
    <div className="image-grid-container">
      {uploadedImages.map((image) => (
        <img key={image._id} src={image.imageUrl} alt="Uploaded" className="image-grid-item" />
      ))}
    </div>
  </div>
  </div>
  );
}
