 import React, { useState } from 'react'

 const UploadForm = () => {
    const [file, setFile] = useState(null)
    return (
        <form>
        <label for="image">사진</label>
        <input id="image" type="file" onChange={event => {
          const imageFile = event.target.files[0]
          console.log({ imageFile })
        }} />
        <button type="submit">제출</button>
      </form>
    )
 }

 export default UploadForm