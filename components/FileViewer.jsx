export default function FileViewer({ content, filename }) {
  return (
    <div className='file-viewer'>
      <h3>Viewing File: {filename}</h3>
      <pre>
        {content}
      </pre>
    </div>
  )
}