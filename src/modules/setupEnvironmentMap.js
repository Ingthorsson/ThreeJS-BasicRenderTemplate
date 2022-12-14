import * as THREE from 'three'

export function setupEnvironmentMap() {
    /**
     * Environent Map
     */
    const cubeTextureLoader = new THREE.CubeTextureLoader()
    const environmentMapTexture = cubeTextureLoader.load([
        '/textures/environmentMaps/0/px.png',
        '/textures/environmentMaps/0/nx.png',
        '/textures/environmentMaps/0/py.png',
        '/textures/environmentMaps/0/ny.png',
        '/textures/environmentMaps/0/pz.png',
        '/textures/environmentMaps/0/nz.png'
    ])

    return environmentMapTexture
}