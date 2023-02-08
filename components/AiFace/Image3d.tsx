import { useLoader } from "@react-three/fiber";
import { DoubleSide, TextureLoader } from "three";

export interface Image3dProps {
  src: string;
  scale?: number;
  position?: [number, number, number];
}

export default function Image3d({
  src,
  scale = 1,
  position = [0, 0, 0],
}: Image3dProps) {
  const texture = useLoader(TextureLoader, src);

  return (
    <mesh position={position}>
      <planeGeometry
        args={[scale, (scale / texture.image.width) * texture.image.height]}
      />
      <meshBasicMaterial map={texture} transparent={true} side={DoubleSide} />
    </mesh>
  );
}
