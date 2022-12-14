
function buildChildren_A(dom, list = []) {
	if (!dom || list.length === 0) return;
	list.forEach(({ label, href }) => {
		const newADom = document.createElement('a')
		newADom.setAttribute('href', href)
		newADom.innerText = label
		dom.appendChild(newADom)
	})

}