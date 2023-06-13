import React, { useState } from "react";
import Category from "./Category";
import Goal from "./Goal";
import { Button, Modal } from "antd";

export default function CategoryList({ items, setItem }) {
  const [modalStates, setModalStates] = useState({});

  const showModal = (itemId) => {
    setModalStates((prevState) => ({ ...prevState, [itemId]: true }));
  };

  const handleOk = (itemId) => {
    setModalStates((prevState) => ({ ...prevState, [itemId]: false }));
  };

  const handleCancel = (itemId) => {
    setModalStates((prevState) => ({ ...prevState, [itemId]: false }));
  };

  return (
    <div className="category-list">
      {items.map((item) => {
        const itemId = item._id;
        const isModalOpen = modalStates[itemId] || false;

        return (
          <div key={itemId}>
            <button
              type="button"
              onClick={() => showModal(itemId)}
              className="category"
            >
              <Category item={item} setItem={setItem} />
            </button>
            <Modal
              title={item.title}
              visible={isModalOpen}
              onOk={() => handleOk(itemId)}
              onCancel={() => handleCancel(itemId)}
              width={"1000px"}
              okButtonProps={{ style: { backgroundColor: '#8800ff', borderColor: '#8800ff' } }}
            >
              <div style={{ maxHeight: "500px", overflow: "auto" }}>
                <Goal categoryId={itemId} />
              </div>
            </Modal>
          </div>
        );
      })}
    </div>
  );
}
