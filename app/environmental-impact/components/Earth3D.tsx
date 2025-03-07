'use client'

import { useRef, useEffect, useState } from 'react'
import { useScroll } from 'framer-motion'
import * as THREE from 'three'

export default function Earth3D() {
  const sceneRef = useRef(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start end', 'end start']
  })

  useEffect(() => {
    if (!canvasRef.current) return
    
    // Set up Three.js scene
    const canvas = canvasRef.current
    
    // Create renderer only once
    const newRenderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance' // Favor performance over power consumption
    })
    
    newRenderer.setSize(canvas.clientWidth, canvas.clientHeight)
    newRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Limit pixel ratio for performance
    setRenderer(newRenderer)
    
    // Create scene and camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
    camera.position.z = 4
    
    // Add lighting - simplified for performance
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 3, 5)
    scene.add(directionalLight)
    
    // Create Earth with simpler geometry for performance
    const geometry = new THREE.SphereGeometry(1, 48, 48) // Reduced complexity
    
    // Use a simple material for faster loading
    const earthMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e88e5,
      metalness: 0.2,
      roughness: 0.8
    });
    
    const earthMesh = new THREE.Mesh(geometry, earthMaterial)
    earthMesh.scale.set(2.5, 2.5, 2.5)
    scene.add(earthMesh)
    
    // Create atmosphere glow
    const glowGeometry = new THREE.SphereGeometry(1.02, 32, 32)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x4ade80,
      transparent: true,
      opacity: 0.15
    })
    
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial)
    glowMesh.scale.set(2.6, 2.6, 2.6)
    scene.add(glowMesh)
    
    // Load textures asynchronously
    const loader = new THREE.TextureLoader()
    let loadTexturePromise = Promise.resolve(); // Default to resolved promise
    
    try {
      loadTexturePromise = Promise.all([
        loader.loadAsync('/assets/color-map.webp').catch(() => null),
        loader.loadAsync('/assets/normal-map.webp').catch(() => null)
      ]).then(([colorMap, normalMap]) => {
        if (colorMap) {
          // Update material with loaded textures
          const detailedMaterial = new THREE.MeshStandardMaterial({
            map: colorMap,
            normalMap: normalMap || undefined,
            metalness: 0.2,
            roughness: 0.8
          });
          
          earthMesh.material = detailedMaterial;
        }
      }).catch(error => {
        console.error('Error loading textures:', error);
      });
    } catch (e) {
      console.error('Error setting up texture loading:', e);
    }
    
    // Handle resize
    const handleResize = () => {
      if (!canvas) return
      
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
      newRenderer.setSize(canvas.clientWidth, canvas.clientHeight)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Animation
    let animationFrameId: number
    let lastTime = 0;
    const fps = 30; // Target FPS for efficiency
    const fpsInterval = 1000 / fps;
    
    const animate = (timestamp = 0) => {
      animationFrameId = requestAnimationFrame(animate)
      
      // Limit frame rate for performance
      const elapsed = timestamp - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = timestamp - (elapsed % fpsInterval);
      
      // Get scroll progress to control rotation
      const scrollValue = scrollYProgress.get()
      
      // Set the base rotation from scroll position
      earthMesh.rotation.y = scrollValue * Math.PI * 2
      glowMesh.rotation.y = scrollValue * Math.PI * 2
      
      // Add a subtle automatic rotation
      earthMesh.rotation.y += 0.001
      glowMesh.rotation.y += 0.001
      
      // Add a slight tilt for aesthetics
      earthMesh.rotation.x = 0.1
      glowMesh.rotation.x = 0.1
      
      // Render scene
      newRenderer.render(scene, camera)
    }
    
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      
      // Dispose of resources
      scene.remove(earthMesh)
      scene.remove(glowMesh)
      geometry.dispose()
      glowGeometry.dispose()
      
      if (earthMesh.material instanceof THREE.Material) {
        earthMesh.material.dispose()
      } else if (Array.isArray(earthMesh.material)) {
        (earthMesh.material as THREE.Material[]).forEach(material => material.dispose())
      }
      
      glowMaterial.dispose()
    }
  }, [scrollYProgress])
  
  // Handle renderer disposal when component unmounts
  useEffect(() => {
    return () => {
      if (renderer) {
        // Delay the disposal to avoid the "removeChild" error
        setTimeout(() => {
          renderer.dispose()
        }, 0)
      }
    }
  }, [renderer])

  return (
    <div ref={sceneRef} className="w-full h-full relative">
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(0, 0, 0, 0) 70%)'
        }}
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent to-green-500/10 animate-pulse-slow pointer-events-none"></div>
    </div>
  )
} 