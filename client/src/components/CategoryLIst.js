import React from "react";
import { useState } from "react";
import Category from "./Category";
import Goal from "./Goal";
import { Button, Modal } from "antd";

export default function CategoryList({ items, setItem }) {

  console.log(items, 'items')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="category-list">
      {items.map((item) => {
        return (
          <div key={item._id}>
            <button type="button" onClick={showModal} className="category">
              <Category item={item} setItem={setItem}></Category>
            </button>
            <Modal
              title={item.title}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              bodyStyle={{ height: "500px" }}
              width={"1000px"}
            >
              <Goal></Goal>
            </Modal>
          </div>
        );
      })}
    </div>
  );
}
