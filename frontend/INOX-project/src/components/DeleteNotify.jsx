import React, { useContext } from 'react';
import { globalVar } from './../globalContext/GlobalContext';

const DeleteNotify = () => {
let {isModalOpen, setIsModalOpen} = useContext(globalVar) 

  const handleCancel = () => {
    setIsModalOpen(false); 
  };
  const handleDelete = () => {
    console.log('Notification deleted');
    setIsModalOpen(false); 
  };
  return (
    isModalOpen && (
      <div className="modal-backdrop-deletenotify" onClick={handleCancel}>
        <div className="modal-container-deletenotify" onClick={(e) => e.stopPropagation()}>
          <h2 className="modal-title-deletenotify">Delete Item</h2>
          <p className="modal-message-deletenotify">
           <strong> You have selected to delete this item.</strong>
            <br />
            If this was the action that you wanted to do, please confirm your choice, or cancel and return to the page.
          </p>
          <div className="modal-actions-deletenotify">
            <button className="btn-deletenotify cancel-btn-deletenotify" onClick={handleCancel}>
              Cancel
            </button>
            <button className="btn-deletenotify delete-btn-deletenotify" onClick={handleDelete}>
              Delete Notification 
             </button>  {/* Put api to delete the selected item */}
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteNotify;
