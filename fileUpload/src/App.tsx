import { useState } from 'react'
import './App.css'

function App() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [fileUrl, setFileUrl] = useState<string | null>(null) // To store the URL after the upload

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null
    if (selectedFile) {
      setFile(selectedFile)
      setPreviewUrl(URL.createObjectURL(selectedFile))
    }


  }

  const uploadFile = async () => {
    if (!file) {
      alert('Please select a file first')
      return
    }

    const formData = new FormData()
    formData.append('upload', file)

    setUploading(true)

    try {
      const response = await fetch('http://localhost:3000/assets/upload/67cd66055fbe93598792b1f8', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to upload file')
      }

      const data = await response.json()
      setFileUrl(data.imgUrl) // Assuming the response has `imgUrl`
      alert('File uploaded successfully!')
    } catch (error) {
      alert('An error occurred while uploading the file')
      console.error('Error:', error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="App">
      <div style={{ width: 100, height: 100, backgroundColor: "white" }}>
        <input type="file" onChange={handleFileChange} style={{ position: "absolute", opacity: 0, width: 100, height: 100, }} />

      </div>
      <button onClick={uploadFile} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      {/* Show uploaded image URL if available */}
      {fileUrl && (
        <div>
          <p>File uploaded successfully! View it <a href={fileUrl} target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
      )}
      {
        previewUrl &&
        <img src={previewUrl} />
      }
    </div>
  )
}

export default App
