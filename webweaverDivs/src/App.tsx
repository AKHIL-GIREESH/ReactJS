import { useState } from 'react'
import { ResizableBox } from 'react-resizable'
import 'react-resizable/css/styles.css'
import './App.css'

function App() {
  const [size, setSize] = useState({ width: 140, height: 140 })

  const onResize = (event: any, { size }: { size: { width: number; height: number } }) => {
    setSize({ width: size.width, height: size.height })
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", height: "70vh", width: "100vw", backgroundColor: "green" }}>
      <ResizableBox
        width={size.width}
        height={size.height}
        onResize={onResize}
        minConstraints={[100, 100]}
        maxConstraints={[500, 500]}
        resizeHandles={['e', 's', 'se', 'w', 'n', 'nw', 'ne', 'sw']}
        axis="both"
        lockAspectRatio={false}
      >
        <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: "red",
          borderRadius: "10px",
          // position: 'relative'
        }}>
        </div>
      </ResizableBox>
      <style>
        {`
          .react-resizable-handle {
            background-color: rgba(0, 0, 0, 0.9);
            border: 2px solid rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            width: 12px;
            height: 12px;
            transition: all 0.2s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .react-resizable-handle:hover {
            background-color: white;
            border-color: rgba(0, 0, 0, 0.3);
            transform: scale(1.1);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
          }
          .react-resizable-handle-e {
            right: -6px;
            top: 50%;
            transform: translateY(-50%);
            cursor: e-resize;
          }
          .react-resizable-handle-w {
            left: -6px;
            top: 50%;
            transform: translateY(-50%);
            cursor: w-resize;
          }
          .react-resizable-handle-s {
            bottom: -6px;
            left: 50%;
            transform: translateX(-50%);
            cursor: s-resize;
          }
          .react-resizable-handle-n {
            top: -6px;
            left: 50%;
            transform: translateX(-50%);
            cursor: n-resize;
          }
          .react-resizable-handle-se {
            bottom: -6px;
            right: -6px;
            cursor: se-resize;
          }
          .react-resizable-handle-sw {
            bottom: -6px;
            left: -6px;
            cursor: sw-resize;
          }
          .react-resizable-handle-ne {
            top: -6px;
            right: -6px;
            cursor: ne-resize;
          }
          .react-resizable-handle-nw {
            top: -6px;
            left: -6px;
            cursor: nw-resize;
          }
          .react-resizable-handle:hover {
            transform: scale(1.1) translateY(-50%);
          }
          .react-resizable-handle-n:hover,
          .react-resizable-handle-s:hover {
            transform: scale(1.1) translateX(-50%);
          }
          .react-resizable-handle-se:hover,
          .react-resizable-handle-sw:hover,
          .react-resizable-handle-ne:hover,
          .react-resizable-handle-nw:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  )
}

export default App
