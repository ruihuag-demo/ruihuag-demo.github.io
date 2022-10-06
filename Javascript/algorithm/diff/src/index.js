import {
	init,
	classModule,
	propsModule,
	styleModule,
	eventListenersModule,
	h,
} from "snabbdom";

const patch = init([
	// Init patch function with chosen modules
	classModule, // makes it easy to toggle classes
	propsModule, // for setting properties on DOM elements
	styleModule, // handles styling on elements with support for animations
	eventListenersModule, // attaches event listeners
]);

const container = document.getElementById("container");
const btn = document.getElementById('btn');

// const vnode = h('h1', { key: 'a' }, 'hello h1 ')
// console.log(vnode, '---vnode---')

// patch(container, vnode)

// const vnode2 = h('h1', { key: 'a' }, 'hello div ')
// btn.onclick = function () {
// 	patch(vnode, vnode2);
// }
const vnode = h('ul', {}, [
	h('li', { key: 'a' }, 'a'),
	h('li', { key: 'b' }, 'b'),
	h('li', { key: 'c' }, 'c')
])
console.log(vnode, '---vnode---')

patch(container, vnode)

const vnode2 = h('ul', {}, [
	h('li', { key: 'b' }, 'b'),
	h('li', { key: 'c' }, 'c'),
	h('li', { key: 'a' }, 'a')
])
// const vnode2 = h('h1', { key: 'a' }, 'hello div ')
btn.onclick = function () {
	patch(vnode, vnode2);
}