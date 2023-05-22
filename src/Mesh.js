import React, {useState,useEffect } from 'react'
import Villa from "./Villa"
import Room from "./Room"
import { useFrame,} from '@react-three/fiber'
import {animated, useSprings} from "@react-spring/three"


function Mesh({cam}) {
  const [Cycle, setCycle] = useState(false)
  const positions = [[0, -10, -22.5], [-4.5,-20.5,-1.75]];
  const { CameraAnimation,canvas} = cam
  const [springProps, setSpringProps] = useSprings(positions.length, () => ({
    position: [0, -120.5, -22.5]  ,
    delay:1000
  }));
 
  const animateToPosition = (i) => {
    setTimeout(() => {
      setSpringProps(index => ({
        position: positions[i],
        config: { mass: 1, tension: 120, friction: 30, damping: 10, precision: 0.0001 },
        onRest: () => {
          if (i < positions.length - 1) {
            animateToPosition(i + 1);
            if (i == 0) {
              setTimeout(()=>{
                setCycle(true)
              },2000)
            }
          }
        }
      }));
    }, 1000);
  }
  useEffect(() => {
  setTimeout(() => {
      animateToPosition(0)
    }, 1000); 
  }, [])
  
    
  
  return (
    <animated.perspectiveCamera position={springProps[0].position} rotation={Cycle ? [0,4.25,0 ] : [0,3.765,0] } >
    <ambientLight/>
    <spotLight position={[1,1,1] } intensity={1}  />
    {
      Cycle ? <Room />:<Villa/>
    } 
    </animated.perspectiveCamera>
  )
}

export default Mesh