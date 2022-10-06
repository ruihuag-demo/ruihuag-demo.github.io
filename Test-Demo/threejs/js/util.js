function TextureLoader(url) {
	return new Promise((resolve) => {
		new THREE.TextureLoader().load(url, function (texture) {
			resolve(texture)
		})
	})
}

async function BoxBufferGeometry(config) {
	const geometry = new THREE.BoxBufferGeometry(...config.geometry);
	const texture = await TextureLoader(config.url)
	const mesh = new THREE.MeshBasicMaterial({ map: texture })
	const cube = new THREE.Mesh(geometry, mesh);
	cube.rotation.x = config.rotation.x
	cube.position.x = config.position.x
	cube.position.y = config.position.y
	cube.position.z = config.position.z
	cube.castShadow = true
	return cube
}


async function Render(config) {
	const { renderer, scene, camera, list = {} } = config
	for (let i = 0; i < list.length; i++) {
		const cube = await BoxBufferGeometry(list[i])
		scene.add(cube)
	}

	renderer.render(scene, camera)
}