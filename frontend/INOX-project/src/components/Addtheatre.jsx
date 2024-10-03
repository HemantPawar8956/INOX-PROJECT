import React from 'react'

const Addtheatre = () => {
  return (
    <div className="theatre-main-container">
      <section className="theatre-form-section">
        <div className="theatre-form-container">
          <h2>Theatre Details</h2>
          <form>
            <div className="theatre-form-group">
              <label htmlFor="theatreName">Theatre Name:</label>
              <input
                type="text"
                id="theatreName"
                name="theatreName"
                placeholder="Enter theatre name"
                required
              />
            </div>

            <div className="theatre-form-group">
              <label htmlFor="theatreAddress">Theatre Address:</label>
              <input
                type="text"
                id="theatreAddress"
                name="theatreAddress"
                placeholder="Enter theatre address"
                required
              />
            </div>

            <div className="theatre-form-group">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter city"
                required
              />
            </div>

            <div className="theatre-form-group">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="Enter state"
                required
              />
            </div>

            <div className="theatre-form-actions">
              <button type="button" className="theatre-update-btn">
                Update
              </button>
              <button type="reset" className="theatre-delete-btn">
                Delete
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Addtheatre
