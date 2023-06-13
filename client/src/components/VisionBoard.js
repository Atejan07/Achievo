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
    try {
      const image = await ImageService(formData);
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
        setUploadedImages(images);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, [uploadedImages]);

  return (
    <div>
      <div>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <button className="image-grid" type="button">
            Upload
          </button>
        </div>
        <div className="vision-board">
          <div className="image-grid-container">
            {uploadedImages.map((image) => (
              <div className="image-container" key={image._id}>
                <img
                  src={image.imageUrl}
                  alt="Uploaded"
                  className="image-grid-item"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
