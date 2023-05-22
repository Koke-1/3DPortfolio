import React, { useRef,useState } from 'react'
import {Canvas} from "@react-three/fiber"
import {animated,useSpring} from "@react-spring/web"
import Mesh from "./Mesh.js"


function App() {

  const [CameraAnimation, setCameraAnimation] = useState(false)
  const canvas = useRef()

  const colorAnimation = useSpring({
    from: { '--color': 'red' },
    to: { '--color': 'blue' },
    config: { duration: 2000 }, // Specify the duration in milliseconds
  });
  
  return (
    <>
    <div>
      <animated.div > 
        
      </animated.div>
    </div>
    <Canvas ref={canvas} style={{backgroundColor:"skyblue"}} onClick={()=>setCameraAnimation(true)} >   
        <Mesh cam={{CameraAnimation,setCameraAnimation,canvas}} />
    </Canvas>
    </>
  )
}

export default App