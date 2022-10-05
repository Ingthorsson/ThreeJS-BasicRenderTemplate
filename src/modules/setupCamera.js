import * as THREE from 'three'

export function setupCamera(scene, sizes) {
    /**
     * Camera
     */
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(- 3, 3, 3)
    scene.add(camera)

    return camera

}