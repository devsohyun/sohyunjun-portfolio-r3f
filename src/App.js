
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import { useControls } from 'leva'
import Images from './Images.js'
import { Particles } from './Particles.js'

export default function App()
{
    const props = useControls({
        focus: { value: 5.1, min: 3, max: 7, step: 0.01 },
        speed: { value: 100, min: 0.1, max: 100, step: 0.1 },
        aperture: { value: 1.8, min: 1, max: 5.6, step: 0.1 },
        fov: { value: 50, min: 0, max: 200 },
        curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 }
    })

    return (
        <>
            <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        
                <ScrollControls damping={4} pages={4}>
                    <Scroll>
                        <Images />
                    </Scroll>
                    <Particles {...props} />
                </ScrollControls>
                
            </Canvas>
        </>
    )
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

