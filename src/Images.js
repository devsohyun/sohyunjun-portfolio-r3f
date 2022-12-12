import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll, Image as ImageImpl } from '@react-three/drei'

export default function Images() {
    const { width, height } = useThree((state) => state.viewport)
    const data = useScroll()
    const group = useRef()
    const margin = 0.2
    useFrame(() => {
      group.current.children[0].material.zoom = 1 + data.range(0, 1) / 3
      group.current.children[1].material.zoom = 1 + data.range(0, 1) / 3
      group.current.children[2].material.zoom = 1 + data.range(0, 1) / 3
      group.current.children[3].material.zoom = 1 + data.range(0, 1) / 3
      group.current.children[4].material.zoom = 1 + data.range(0, 1) / 3
    })
    return (
      <group ref={group}>
        <Image position={[0, -height, 0]} scale={[width / 2, width / 3, 1]} rotation={[0, -0.1, 0]} url="/img1.jpg" />
        <Image position={[0, -height-(width/3 + margin), 0]} scale={[width / 2, width / 3, 1]} rotation={[0, -0.1, 0]} url="/img2.jpg" />
        <Image position={[0, -height-(width/3 + margin)*2, 0]} scale={[width / 2, width / 3, 1]} rotation={[0, -0.1, 0]} url="/img3.jpg" />
        <Image position={[0, -height-(width/3 + margin)*3, 0]} scale={[width / 2, width / 3, 1]} rotation={[0, -0.1, 0]} url="/img4.jpg" />
        <Image position={[0, -height-(width/3 + margin)*4, 0]} scale={[width / 2, width / 3, 1]} rotation={[0, -0.1, 0]} url="/img5.jpg" />
      </group>
    )
}

function Image({ c = new THREE.Color(), ...props}) {
    const ref = useRef()
    const [hovered, hover] = useState(false)
    useFrame(() => {
      console.log(ref.current.position)
      ref.current.material.color.lerp(c.set(hovered ? 'white' : '#ccc'), hovered ? 0.4 : 0.05)
      ref.current.position.lerp((hovered ? {x:ref.current.position.x, y:ref.current.position.y, z:0.5} : {x:ref.current.position.x, y:ref.current.position.y,z:0} ), hovered ? 0.1 : 0.05)
    })
    return <ImageImpl ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} {...props} />
}


