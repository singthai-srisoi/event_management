import React from 'react'

function AddEvent({display, handleAdd}) {

    const Submit = e => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        const event = Object.fromEntries(formdata)
        handleAdd(event)
        e.target.reset()
    }

  return (
    <>
          <form onSubmit={Submit}
              style={{
                  display: display ? 'block' : 'none',
              }}>
              <table>
                  <tbody>
                      {/* <tr hidden><td><input type="hidden" name='id' value={id} /></td></tr> */}
                      <tr>
                          <th><label htmlFor="e_name">Name</label></th>
                          <td><input type="text" id="e_name" name="name" /></td>
                      </tr>
                      <tr>
                          <th><label htmlFor="e_date">Date</label></th>
                          <td><input type="date" id="e_date" name="date" /></td>
                      </tr>
                      <tr>
                          <th><label htmlFor="e_location">Location</label></th>
                          <td><input type="text" id="e_location" name="location" /></td>
                      </tr>
                      <tr>
                          <th><label htmlFor="e_description">Description</label></th>
                          <td><textarea id="e_description" name="description"></textarea></td>
                      </tr>
                      <tr>
                          <th><label htmlFor="e_fees">Fees</label></th>
                          <td><input type="e_number" id="fees" name="fees" /></td>
                      </tr>
                      <tr>
                          <th></th>
                          <td>
                              <input type="submit" value="Add" />
                              <input type="reset" value="Reset" />
                              <input type="button" value="Cancel" />
                          </td>
                      </tr>

                  </tbody>

              </table>
          </form>
    </>
  )
}

export default AddEvent