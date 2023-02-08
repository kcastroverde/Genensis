import { Canvas, useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { TextureLoader } from "three";
import styles from "./AiFace.module.css";
import Face from "./Face";
import Image3d from "./Image3d";

export default function AiFace() {
  const lightTx = useLoader(TextureLoader, "/aiFace/luz.png");
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    let mounted = true;
    setTimeout(() => {
      if (mounted) setAppear(true);
    }, 400);
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className={styles.container + " " + (appear ? "" : styles.hidden)}>
      {appear && (
        <Canvas style={{ height: "100%" }}>
          <Face />
          <Image3d
            src="/aiFace/baseHolograma.png"
            position={[0, -12, -20]}
            scale={25}
          />
          <mesh position={[1, 1, -20]}>
            <planeGeometry
              args={[110, (110 / lightTx.image.width) * lightTx.image.height]}
            />
            <meshBasicMaterial map={lightTx} transparent={true} opacity={0.3} />
          </mesh>
        </Canvas>
      )}
    </div>
  );
}
