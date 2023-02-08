/* eslint-disable jsx-a11y/alt-text */

import {
  BinaryNetworkEdge,
  BinaryNetworkNode,
} from "./BinaryNetworkVisualizer";
import { Image, Text, Rect } from "react-konva";

export type BinaryNetworkNodeDirection = 1 | -1 | 0;

export interface BinaryNetworkNodeViewProps {
  x: number;
  y: number;
  node: BinaryNetworkNode | undefined;
  image: HTMLImageElement | undefined;
  direction?: BinaryNetworkNodeDirection;
  edges: BinaryNetworkEdge[];
  currentEdge: number;
}

export default function BinaryNetworkNodeView({
  x,
  y,
  direction = 0,
  node,
  image,
  edges,
  currentEdge,
}: BinaryNetworkNodeViewProps) {
  if (!node) return <></>;
  const edgeImage = edges[currentEdge].image;
  const directionLeft = direction || -1;
  const edgeLeft =
    direction == 1
      ? edges[currentEdge].nextOtherDir
      : edges[currentEdge].nextSameDir;
  const directionRight = direction || 1;
  const edgeRight =
    direction != 1
      ? edges[currentEdge].nextOtherDir
      : edges[currentEdge].nextSameDir;
  return (
    <>
      {node.left && (
        <BinaryNetworkNodeView
          node={node.left}
          x={x + edges[edgeLeft].offsetX * directionLeft}
          y={y + edges[edgeLeft].offsetY}
          direction={directionLeft}
          image={image}
          edges={edges}
          currentEdge={edgeLeft}
        />
      )}
      {node.right && (
        <BinaryNetworkNodeView
          node={node.right}
          x={x + edges[edgeRight].offsetX * directionRight}
          y={y + edges[edgeRight].offsetY}
          direction={directionRight}
          image={image}
          edges={edges}
          currentEdge={edgeRight}
        />
      )}
      <Image
        x={x}
        y={y}
        scaleX={0.6 * direction}
        scaleY={0.6}
        image={edgeImage}
        offsetX={edges[currentEdge].edgeOffsetX || edgeImage?.width || 0}
        offsetY={edges[currentEdge].edgeOffsetY || edgeImage?.height || 0}
      />
      <Image
        x={x}
        y={y}
        scaleX={0.6}
        scaleY={0.6}
        image={image}
        offsetX={(image?.width || 0) / 2}
        offsetY={(image?.height || 0) / 2}
      />
      <Rect
        x={x - 50}
        width={100}
        y={y + 26}
        height={20}
        fill="#191529"
        stroke="#23e6f0"
        strokeWidth={2}
        cornerRadius={10}
      />
      <Text
        text={node.name}
        x={x - 50}
        width={100}
        y={y + 32}
        align="center"
        fill="#fff"
        wrap="none"
      />
    </>
  );
}
