import React from "react";
import { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import "../App.css";


export default function VisionBoard() {
    const [uploadedImages, setUploadedImages] = useState([]);

    const onDrop = async (acceptedFiles) => {
      const formData = new FormData();
      formData.append('image', acceptedFiles[0]);
  
      try {
        const response = await axios.post('/api/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        const { imageUrl } = response.data;
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
         <button className="">Drop</button>
        </div>
        <div>
          {uploadedImages.map((imageUrl) => (
            <img key={imageUrl} src={imageUrl} alt="Uploaded" />
          ))}
        </div>
      </div>
    );
  };
  
