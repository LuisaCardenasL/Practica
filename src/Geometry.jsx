import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Geometry() {
  const PATH = "/static/textures/door/";

  const props = useTexture({
    map: PATH + "albedo.png", //tenia color.jpg
    //displacementMap: PATH + "albedo.png",
    normalMap: PATH + "normal.png",
    roughnessMap: PATH + "roughness.png",
    aoMap: PATH + "ao.png",
    metalnessMap: PATH + "metallic.png",
  });

  return (
    <mesh castShadow rotation-y={Math.PI / 12}>
      <capsuleGeometry args={[1, 1, 4, 8]} />
      <meshStandardMaterial {...props} side={DoubleSide} />
    </mesh>
  );
}
