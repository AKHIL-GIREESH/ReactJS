import { useState } from 'react'
import { Rnd } from 'react-rnd'
import 'react-resizable/css/styles.css'
import './App.css'

function App() {
  const [size, setSize] = useState({ width: 140, height: 140 })
  const [position, setPosition] = useState({ x: 0, y: 0 })

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", height: "70vh", width: "100vw", backgroundColor: "green" }}>
      <Rnd
        size={{ width: size.width, height: size.height }}
        position={{ x: position.x, y: position.y }}
        minWidth={100}
        minHeight={100}
        maxWidth={500}
        maxHeight={500}
        bounds="parent"
        onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
        onResizeStop={(e, direction, ref, delta, position) => {
          setSize({ width: parseInt(ref.style.width), height: parseInt(ref.style.height) })
          setPosition(position)
          console.log(size)
        }}
        enableResizing={{
          top: true,
          right: true,
          bottom: true,
          left: true,
          topRight: true,
          bottomRight: true,
          bottomLeft: true,
          topLeft: true
        }}
        style={{ zIndex: 10 }}
      >
        <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: "red",
          borderRadius: "10px",
        }}>
        </div>
      </Rnd>
      <style>
        {`
          .rnd .react-resizable-handle {
            background-color: rgba(0, 0, 0, 0.9);
            border: 2px solid rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            width: 12px;
            height: 12px;
            transition: all 0.2s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .rnd .react-resizable-handle:hover {
            background-color: white;
            border-color: rgba(0, 0, 0, 0.3);
            transform: scale(1.1);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </div>
  )
}

export default App
