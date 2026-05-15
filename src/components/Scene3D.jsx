import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";

function MouseMovingCodeField() {
  const groupRef = useRef();
  
  const colors = ["#3b82f6", "#6366f1", "#10b981", "#94a3b8"]; 
  const symbols = [
    '< >', '{ }', '[ ]', '=>', 'import', 'export', 'const', 'let', 
    'function', 'return', 'props', 'state', 'hooks', 'render', 
    'div', 'section', '...', '&&', '||', '===', 'async', 'await'
  ];

  const instances = useMemo(() => {
    const count = 35;
    return Array.from({ length: count }).map((_, i) => ({
      text: symbols[Math.floor(Math.random() * symbols.length)],
      position: [
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 5
      ],
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 0.3 + Math.random() * 0.4,
      speed: 0.5 + Math.random()
    }));
  }, []);

  useFrame((state) => {
    const { x, y } = state.mouse;
    if (groupRef.current) {
      // Mouse tracking with lerp-like smoothness
      groupRef.current.rotation.y = (x * 0.2);
      groupRef.current.rotation.x = (-y * 0.2);
    }
  });

  return (
    <group ref={groupRef}>
      {instances.map((inst, i) => (
        <Float key={i} speed={inst.speed} rotationIntensity={0.2} floatIntensity={0.5}>
          <Text
            position={inst.position}
            color={inst.color}
            fontSize={inst.size}
            font={undefined} 
            anchorX="center"
            anchorY="middle"
            fillOpacity={0.3}
          >
            {inst.text}
          </Text>
        </Float>
      ))}
    </group>
  );
}

const Scene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75 }}
        // Clock warning ko prevent karne ke liye:
        shadows={false}
        onCreated={({ gl }) => {
          // Extra optimization if needed
          gl.setClearColor('#030303', 0);
        }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
        <MouseMovingCodeField />
      </Canvas>
    </div>
  );
};

export default Scene3D;