
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import Images from './Images.js'

export default function App()
{
    return <>
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>

            <ScrollControls damping={4} pages={4}>
                <Scroll>
                    <Images />
                </Scroll>
                <Cube />
            </ScrollControls>
            
        </Canvas>
    </>
}


function Cube() {
    const cubeRef = useRef()
    useFrame((state, delta) => {
        cubeRef.current.rotation.y += 0.5 * delta
    })
    return (
        <mesh ref={cubeRef} position={[0,0,-2]}>
                <boxGeometry />
                <meshNormalMaterial />
        </mesh>
    )
}

