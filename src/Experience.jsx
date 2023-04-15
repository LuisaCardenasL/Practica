import { AccumulativeShadows, OrbitControls, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Floor from './Floor';
import { useRef } from 'react';
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from 'three';
import Geometry from './Geometry';


export default function Experience() {
  const directionalLightRef = useRef();
  const hemisphereLightRef = useRef();
  const pointLightRef = useRef();
  const rectAreaLightRef = useRef();
  const spotLightRef = useRef();

  //useHelper(directionalLightRef, DirectionalLightHelper, 1)
  //useHelper(hemisphereLightRef, HemisphereLightHelper, 0.5)
  //useHelper(pointLightRef, PointLightHelper, 0.5)
  useHelper(spotLightRef, SpotLightHelper, 0.5);

  useHelper(directionalLightRef, DirectionalLightHelper, 1);

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <AccumulativeShadows position={[0, -1.4, 0]} scale={10}>
        <directionalLight position={[1, 2, 3]} castShadow />
      </AccumulativeShadows>
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />
      <ambientLight intensity={0.5} />
      <hemisphereLight ref={hemisphereLightRef} args={['#FFFFFF', '#000000', 0.5]} />
      <pointLight ref={pointLightRef} position={[3, 3, 3]} color={'#FFFFFF'} />
      <rectAreaLight ref={rectAreaLightRef} position={[0, 4, 0]} args={[4, 4, 4, 4]} intensity={1.5} castShadow />
      <spotLight
        ref={spotLightRef}
        position={[-3, 3, 3]}
        angle={0.3}
        penumbra={1}
        color={"#FFFFFF"}
      />
      <ambientLight intensity={0.5} />

      <spotLight
        ref={spotLightRef}
        position={[-3, 3, 3]}
        angle={0.3}
        penumbra={1}
        color={"#FFFFFF"}
      />
      <ambientLight intensity={0.5} />
      <Geometry />
      <Floor />
    </>
  );
}