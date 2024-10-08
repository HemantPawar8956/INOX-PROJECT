import React, { useContext } from 'react';
import { globalVar } from './../globalContext/GlobalContext';

const UpdateNotify = () => {
  let { updateNotify,setupdateNotify} = useContext(globalVar);

  const handleCancel = () => {
    setupdateNotify(false); 
  };

  const handleUpdate = () => {
    console.log('Notification updated');
    setupdateNotify(false); 
//    Api dalni h to update in the database 
  };

  return (
    updateNotify && (
      <div className="update-modal-backdrop-updatenotify" onClick={handleCancel}>
        <div className="update-modal-container-updatenotify" onClick={(e) => e.stopPropagation()}>
          <h2 className="update-modal-title-updatenotify">Updating the Item</h2>
          <p className="update-modal-message-updatenotify">
           <strong> You have selected to update this item.</strong>
            <br />
            If this was the action that you wanted to do, please confirm your choice, or cancel and return to the page.
          </p>
          <div className="update-modal-actions-updatenotify">
            <button className="btn-updatenotify update-cancel-btn-updatenotify" onClick={handleCancel}>
              Cancel
            </button>
            <button className="btn-updatenotify update-confirm-btn-updatenotify" onClick={handleUpdate}>
              Update Notification
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default UpdateNotify;
