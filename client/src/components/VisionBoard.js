import React from "react";
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import "../App.css";
import ImageService from '../services/Images';



export default function VisionBoard() {
  const [uploadedImages, setUploadedImages] = useState([]);

  const onDrop = async (acceptedFiles) => {
    const formData = new FormData();
    formData.append('image', acceptedFiles[0]);

    try {
      const imageUrl = await ImageService(formData);
      console.log(imageUrl, 'imaaage')
      setUploadedImages([...uploadedImages, imageUrl]);
    } catch (error) {
      console.error(error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <button className="">Upload</button>
      </div>
      <div>
        {uploadedImages.map((imageUrl) => (
          <img key={imageUrl} src={imageUrl}/>
        ))}
      </div>
    </div>
  );
}
