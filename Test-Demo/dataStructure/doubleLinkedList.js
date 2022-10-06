/*
 * File: doubleLinkedList.js
 * Project: api
 * Author: ruihuag
 * File Created: Thursday, 5th August 2021 4:19:15 pm
 * Modified By: ruihuag
 * Last Modified: Thursday, 5th August 2021 4:20:48 pm
 */

//节点

function Node(element) {
	this.element = element;   //当前节点的元素
	this.next = null;         //下一个节点链接
	this.previous = null;         //上一个节点链接
}

//链表类

function LList() {
	this.head = new Node('head');
	this.find = find;
	this.findLast = findLast;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
	this.dispReverse = dispReverse;
}

//查找元素

function find(item) {
	var currNode = this.head;
	while (currNode.element != item) {
		currNode = currNode.next;
	}
	return currNode;
}

//查找链表中的最后一个元素

function findLast() {
	var currNode = this.head;
	while (!(currNode.next == null)) {
		currNode = currNode.next;
	}
	return currNode;
}


//插入节点

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var currNode = this.find(item);
	newNode.next = currNode.next;
	newNode.previous = currNode;
	currNode.next = newNode;
}

//显示链表元素

function display() {
	var currNode = this.head;
	while (!(currNode.next == null)) {
		console.debug(currNode.next.element);
		currNode = currNode.next;
	}
}

//反向显示链表元素

function dispReverse() {
	var currNode = this.findLast();
	while (!(currNode.previous == null)) {
		console.log(currNode.element);
		currNode = currNode.previous;
	}
}

//删除节点

function remove(item) {
	var currNode = this.find(item);
	if (!(currNode.next == null)) {
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}

var fruits = new LList();

fruits.insert('Apple', 'head');
fruits.insert('Banana', 'Apple');
fruits.insert('Pear', 'Banana');
fruits.insert('Grape', 'Pear');

console.log(fruits.display());
// Apple
// Banana
// Pear
// Grape

console.log(fruits.dispReverse());
// Grape
// Pear
// Banana
// Apple