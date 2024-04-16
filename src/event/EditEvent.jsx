import React, { useEffect, useState } from 'react'

function EditEvent({id=0, name="", date="", location="", description="", fees="", handleSubmit}) {

    const [e_name, setName] = useState(name)
    const [e_date, setDate] = useState(date)
    const [e_location, setLocation] = useState(location)
    const [e_description, setDescription] = useState(description)
    const [e_fees, setFees] = useState(fees)

    useEffect(() => {
        setName(name)
        setDate(date)
        setLocation(location)
        setDescription(description)
        setFees(fees)
    }, [name, date, location, description, fees])

    const handleReset = () => {
        setName(name)
        setDate(date)
        setLocation(location)
        setDescription(description)
        setFees(fees)
    }
    
    const handleInput = e => {
        // const form = new FormData(e.target.closest("form"))
        // console.log(Object.fromEntries(form))
    }

    const Submit = e => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        const event = Object.fromEntries(formdata)
        handleSubmit(event)
    }

    const IsEmpty = () => {
        return(
            e_name === "" || e_date === "" || e_location === "" || e_description === "" || e_fees === ""
        )
    } 

return (
    <>
          <form onInput={handleInput} onSubmit={Submit}
          style={{
            display: IsEmpty() ? 'none' : 'block',
          }}>
            <table>
                <tbody>
                    <tr hidden><td><input type="hidden" name='id' value={id} /></td></tr>
                      <tr>
                          <th><label htmlFor="e_name">Name</label></th>
                          <td><input type="text" id="e_name" name="name" value={e_name} onChange={e => setName(e.target.value)} /></td>
                      </tr>
                      <tr>
                          <th><label htmlFor="e_date">Date</label></th>
                          <td><input type="date" id="e_date" name="date" value={e_date} onChange={e => setDate(e.target.value)} /></td>
                      </tr>
                      <tr>
                          <th><label htmlFor="e_location">Location</label></th>
                          <td><input type="text" id="e_location" name="location" value={e_location} onChange={e => setLocation(e.target.value)} /></td>
                      </tr>
                      <tr>
                          <th><label htmlFor="e_description">Description</label></th>
                          <td><textarea id="e_description" name="description" value={e_description} onChange={e => setDescription(e.target.value)}></textarea></td>
                      </tr>
                      <tr>
                          <th><label htmlFor="e_fees">Fees</label></th>
                          <td><input type="e_number" id="fees" name="fees" value={e_fees} onChange={e => setFees(e.target.value)} /></td>
                      </tr>
                      <tr>
                          <th></th>
                          <td>
                              <input type="submit" value="Submit" disabled={IsEmpty()} />
                              <input type="reset" value="Reset" onClick={handleReset} />
                              <input type="button" value="Cancel" />
                          </td>
                      </tr>

                </tbody>
                
            </table>            
        </form>
    </>
  )
}

export default EditEvent