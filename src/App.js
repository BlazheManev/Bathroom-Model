import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Wall = ({ position, rotation }) => (
  <mesh position={position} rotation={rotation}>
    <boxGeometry args={[10, 5, 0.1]} />
    <meshStandardMaterial color="white" />
  </mesh>
);

const Floor = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]}>
    <planeGeometry args={[10, 10]} />
    <meshStandardMaterial color="gray" />
  </mesh>
);

const Bathroom = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Wall position={[0, 2.5, -5]} />
      <Wall position={[0, 2.5, 5]} />
      <Wall position={[5, 2.5, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Wall position={[-5, 2.5, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Floor />
      <OrbitControls />
    </Canvas>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bathroom />
      </header>
    </div>
  );
}

export default App;
