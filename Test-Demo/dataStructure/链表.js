export  class LinkedList{
	// next = undefined
	// head = undefined
	// key = undefined
	// target = undefined
	constructor(key, target){
		this.head = undefined
		this.next = undefined
		this.key = key
		this.target = target
	}
	prepend(key, value){
		const newNode =new LinkedList(key, value)
		function nextLoop(currentNode){
			if(!currentNode){
				return newNode
			}
			currentNode.head= nextLoop(currentNode.head)
			return currentNode
		}
		this.head = nextLoop(this.head)
		return this
	}
	append(key, value){
		const newNode =new LinkedList(key, value)
		function nextLoop(currentNode){
			if(!currentNode){
				return newNode
			}
			currentNode.next= nextLoop(currentNode.next)
			return currentNode
		}
		this.next = nextLoop(this.next)
		return this
	}
}

const link = new LinkedList(1,111)
link.prepend(0,110)
link.prepend(-1,109)
link.prepend(-2,108)
// console.log(link.append(2,112))
link.append(2,112)
link.append(4, 114)
console.log(link)