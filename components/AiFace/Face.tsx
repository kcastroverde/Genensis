import {
  SelectiveBloom,
  EffectComposer,
  Selection,
  Select,
} from "@react-three/postprocessing";
import Image3d from "./Image3d";
import { useRef, useEffect } from "react";
import { Group } from "three";

export default function Face() {
  const ref = useRef<Group | null>(null);

  useEffect(() => {
    function onMouseMove(ev: MouseEvent) {
      if (!ref.current) return;
      ref.current.rotation.y = 0.1 * ((ev.clientX / window.innerWidth) * 2 - 1);
      ref.current.rotation.x =
        0.07 * ((ev.clientY / window.innerHeight) * 2 - 0.25);
    }
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <group position={[0, 0, -10]} ref={ref}>
      <group position={[1.3, 0, 0]}>
        <Image3d
          src="/aiFace/cabelloLineaIzq.png"
          position={[-6.2, -2.3, -2.5]}
          scale={7.7}
        />
        <Selection>
          <EffectComposer>
            <SelectiveBloom
              intensity={0.25}
              luminanceThreshold={0.1}
              luminanceSmoothing={0.1}
              height={300}
            />
          </EffectComposer>
          <Select enabled>
            <Image3d
              src="/aiFace/cabello1Izq.png"
              position={[-4.7, 0.8, -1]}
              scale={1.1}
            />
            <Image3d
              src="/aiFace/cabello2Izq.png"
              position={[-5.5, 5.3, -1]}
              scale={1.8}
            />
            <Image3d
              src="/aiFace/cabello3Izq.png"
              position={[-3.4, 3.8, 0]}
              scale={0.8}
            />
            <Image3d
              src="/aiFace/bordeSupIzq.png"
              position={[-4.2, 8.5, -2]}
              scale={7}
            />
            <Image3d
              src="/aiFace/cabelloComisuraIzq.png"
              position={[-0.6, 7.4, -0.6]}
              scale={0.22}
            />
            <Image3d
              src="/aiFace/cabelloComisuraDer.png"
              position={[0.2, 7.4, -0.6]}
              scale={0.45}
            />
            <Image3d
              src="/aiFace/cabelloSuperiorDer.png"
              position={[3.2, 3.95, -2.5]}
              scale={6.5}
            />
            <Image3d
              src="/aiFace/cabelloCurvaDer.png"
              position={[3.9, -6.8, -2.5]}
              scale={6}
            />
            <Image3d
              src="/aiFace/cejaIzq.png"
              position={[-1.8, 3.54, 0]}
              scale={2.5}
            />
            <Image3d
              src="/aiFace/ojoIzq.png"
              position={[-1.7, 2.4, -0.3]}
              scale={2.15}
            />
            <Image3d
              src="/aiFace/cejaDer.png"
              position={[2.1, 3.4, 0]}
              scale={2.5}
            />
            <Image3d
              src="/aiFace/ojoDer.png"
              position={[1.9, 2.3, -0.3]}
              scale={2.15}
            />
            <Image3d src="/aiFace/nariz.png" position={[0, 0, 0.2]} scale={2} />
            <Image3d
              src="/aiFace/narizInicio.png"
              position={[0.6, 2.2, 0]}
              scale={0.25}
            />
            <Image3d
              src="/aiFace/comisuraLabio.png"
              position={[-2, -1.41, 0]}
              scale={0.19}
            />
            <Image3d
              src="/aiFace/boca.png"
              position={[-0.3, -2, -0.1]}
              scale={3.1}
            />
            <Image3d
              src="/aiFace/bordeRostroBlanco.png"
              position={[0, 0.6, -1.5]}
              scale={9.4}
            />
          </Select>
        </Selection>
      </group>
    </group>
  );
}
