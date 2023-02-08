import { Stage, Layer } from "react-konva";
import Konva from "konva";
import useImage from "use-image";
import BinaryNetworkNodeView from "./BinaryNetworkNodeView";
import { useRef, useEffect, useState } from "react";

export interface BinaryNetworkNode {
  name: string;
  left?: BinaryNetworkNode;
  right?: BinaryNetworkNode;
}

export interface BinaryNetworkVisualizerProps {
  rootNode: BinaryNetworkNode | undefined;
}

export interface BinaryNetworkEdge {
  image: HTMLImageElement | undefined;
  nextSameDir: number;
  nextOtherDir: number;
  offsetX: number;
  offsetY: number;
  edgeOffsetX?: number;
  edgeOffsetY?: number;
}

export default function BinaryNetworkVisualizer({
  rootNode,
}: BinaryNetworkVisualizerProps) {
  const [image] = useImage("/binaryNetwork/personajeRed.png");
  const [stageWidth, setStageWidth] = useState(10);
  const stageContainerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!stageContainerRef.current) return;
    setStageWidth(stageContainerRef.current.offsetWidth);
  }, [stageContainerRef]);

  const edges: BinaryNetworkEdge[] = [
    {
      image: undefined,
      nextSameDir: 1,
      nextOtherDir: 1,
      offsetX: 0,
      offsetY: 0,
    },
    {
      image: useImage("/binaryNetwork/edge1.png")[0],
      nextSameDir: 4,
      nextOtherDir: 3,
      offsetX: 60,
      offsetY: 100,
    },
    {
      image: useImage("/binaryNetwork/edge2.png")[0],
      nextSameDir: 4,
      nextOtherDir: 7,
      offsetX: 150,
      offsetY: 40,
      edgeOffsetX: 180,
      edgeOffsetY: -7,
    },
    {
      image: useImage("/binaryNetwork/edge3.png")[0],
      nextSameDir: 5,
      nextOtherDir: 6,
      offsetX: 10,
      offsetY: 140,
    },
    {
      image: useImage("/binaryNetwork/edge4.png")[0],
      nextSameDir: 2,
      nextOtherDir: 9,
      offsetX: 160,
      offsetY: -60,
      edgeOffsetX: 200,
      edgeOffsetY: -60,
    },
    {
      image: useImage("/binaryNetwork/edge5.png")[0],
      nextSameDir: 2,
      nextOtherDir: 8,
      offsetX: 120,
      offsetY: 70,
      edgeOffsetX: 150,
      edgeOffsetY: 50,
    },
    {
      image: useImage("/binaryNetwork/edge6.png")[0],
      nextSameDir: 5,
      nextOtherDir: 3,
      offsetX: -10,
      offsetY: 170,
      edgeOffsetX: 40,
      edgeOffsetY: 210,
    },
    {
      image: useImage("/binaryNetwork/edge7.png")[0],
      nextSameDir: 2,
      nextOtherDir: 1,
      offsetX: 100,
      offsetY: 90,
      edgeOffsetX: 95,
      edgeOffsetY: 90,
    },
    {
      image: useImage("/binaryNetwork/edge1.png")[0],
      nextSameDir: 9,
      nextOtherDir: 7,
      offsetX: 60,
      offsetY: 100,
    },
    {
      image: useImage("/binaryNetwork/edge3.png")[0],
      nextSameDir: 5,
      nextOtherDir: 2,
      offsetX: 10,
      offsetY: 140,
    },
  ];

  function onStageDragged(ev: Konva.KonvaEventObject<DragEvent>) {}

  return (
    <div ref={stageContainerRef} style={{ width: "100%" }}>
      <Stage
        width={stageWidth}
        height={480}
        draggable={true}
        onDragMove={onStageDragged}
      >
        <Layer>
          <BinaryNetworkNodeView
            x={stageWidth / 2}
            y={50}
            node={rootNode}
            image={image}
            edges={edges}
            currentEdge={0}
          />
        </Layer>
      </Stage>
    </div>
  );
}
