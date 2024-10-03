import React, { useState } from 'react'

const Addmovie = () => {
    const [formData, setFormData] = useState({
        movieName: "",
        genre: "",
        duration: "",
        language: "",
        showTimings: "",
        theatre: "",
      });
    
      let [showModal, setShowModal] = useState(false);
    
    
      let handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      let handleUpdate = () => {
        setShowModal(true);
      };
    
      let handleSave = () => {
        alert("Movie details saved successfully!");
        setShowModal(false);
      };
    return (

    <div class="main-body">
    <section class="center-section">
        <div class="form-container">
            <h2>Movie Details</h2>
            <form action="#">
                <div class="form-group">
                    <label for="movieName">Movie Name:</label>
                    <input type="text" id="movieName" name="movieName" value={formData.movieName}
                onChange={handleChange} placeholder="Enter movie name" required/>
                </div>

                <div class="form-group">
                    <label for="genre">Genre:</label>
                    <input type="text" id="genre" name="genre"  value={formData.genre}
                onChange={handleChange} placeholder="Enter genre" required/>
                </div>

                <div class="form-group">
                    <label for="duration">Duration:</label>
                    <input type="text" id="duration" name="duration"  value={formData.duration}
                onChange={handleChange} placeholder="Enter duration" required/>
                </div>

                <div class="form-group">
                    <label for="language">Language:</label>
                    <input type="text" id="language" name="language" value={formData.language}
                onChange={handleChange} placeholder="Enter language" required/>
                </div>

                <div class="form-group">
             <label for="showTimings">Show Timings:</label>
             <select id="showTimings" name="showTimings"  value={formData.showTimings}
                onChange={handleChange} required>
                 <option value="" disabled selected>Select show timing</option>
                 <option value="10am">10:00 AM</option>
                 <option value="1pm">1:00 PM</option>
                 <option value="4pm">4:00 PM</option>
                 <option value="7pm">7:00 PM</option>
                 <option value="10pm">10:00 PM</option>
             </select>
         </div>
                <div class="form-group">
                    <label for="theatre">Theatre:</label>
                    <select id="theatre" name="theatre"  value={formData.theatre}
                onChange={handleChange}  required>
                        <option value="" disabled selected>Select theatre</option>
                        <option value="theatre1">PVR MGF gurugram</option>
                        <option value="theatre2">PVR Mega Mall gurugram</option>
                        <option value="theatre3">PVR Ambience Mall gurugram</option>
                        <option value="theatre4">INOX world mark gurugram</option>
                        <option value="theatre5">PVR City Centre gurugram</option>
                    </select>
                </div>

                <div class="form-actions">
                    <button type="submit" class="update-btn" onClick={handleUpdate}>Update</button>
                    <button type="reset" class="delete-btn">Delete</button>
                </div>
            </form>
        </div>
    </section>
    {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirm Movie Details</h3>
            <p><strong>Movie Name:</strong> {formData.movieName}</p>
            <p><strong>Genre:</strong> {formData.genre}</p>
            <p><strong>Duration:</strong> {formData.duration}</p>
            <p><strong>Language:</strong> {formData.language}</p>
            <p><strong>Show Timings:</strong> {formData.showTimings}</p>
            <p><strong>Theatre:</strong> {formData.theatre}</p>

            <div className="modal-actions">
              <button className="close" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
   
</div>

)
}

export default Addmovie
