function downloadCanvas(canvas) {
	const blobUrl = canvas.toDataURL()
	const anchor = document.createElement('a')
	if ('download' in anchor) {
		anchor.style.visibility = 'hidden';
		anchor.href = blobUrl;
		anchor.download = name;

		document.body.appendChild(anchor);
		var evt = document.createEvent('MouseEvents');
		evt.initEvent('click', true, true);
		anchor.dispatchEvent(evt);

		document.body.removeChild(anchor);
	} else {
		location.href = blobUrl;
	}
}