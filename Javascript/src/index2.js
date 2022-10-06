/*
 * @Author: ruihuag
 * @Date: 2021-09-10 14:44:37
 * @LastEditTime: 2021-09-10 14:55:46
 * @LastEditors: ruihuag
 * @Description:
 * @FilePath: \src\index2.js
 * Copyright (c) 2004-2021 i-Sprint Technologies, Inc.
 *  address:
 *  All rights reserved.
 *
 *  This software is the confidential and proprietary information of
 *  i-Sprint Technologies, Inc. ('Confidential Information').  You shall not
 *  disclose such Confidential Information and shall use it only in
 *  accordance with the terms of the license agreement you entered into
 *  with i-Sprint.
 */
const routers = [
	{
		key: 'test1',
		id: 'test1',
		path: '/test1',
		title: 'test1',
		icon: 'VideoCameraOutlined',
		// exact: true,
		children: [{
			key: 'test2',
			id: 'test2',
			path: '/test1/test2',
			title: 'test2',
			// icon: 'VideoCameraOutlined',
			exact: true,
		}]
	},
	{
		key: 'test3',
		id: 'test3',
		path: '/test3',
		title: 'test3',
		icon: 'VideoCameraOutlined',
		// exact: true,
		children: [{
			key: 'test4',
			id: 'test4',
			path: '/test3/test4',
			title: 'test4',
			// icon: 'VideoCameraOutlined',
			exact: true,
		}, {
			key: 'test6',
			id: 'test6',
			path: '/test3/test6',
			title: 'test6',
			// icon: 'VideoCameraOutlined',
			// exact: true,
			children: [{
				key: 'test7',
				id: 'test7',
				path: '/test3/test6/test7',
				title: 'test7',
				// icon: 'VideoCameraOutlined',
				exact: true,
			}]
		}]
	},
	{
		key: 'test5',
		id: 'test5',
		path: '/test5',
		title: 'test5',
		icon: 'VideoCameraOutlined',
		exact: true,
	},
];

const find = (list, url) => {
	const result = []
	const findPath = (list) => {
		list.map(item => {
			const { children, ...rest } = item;
			if (url === rest.path) {
				result.push(rest)
				return;
			}
			if (url.indexOf(item.path) > -1 && children && children.length > 0) {
				result.push(rest)
			}
			if (children && children.length > 0) findPath(children)
		})
	}
	findPath(list)
	return result;
}

console.log(JSON.stringify(find(routers, "/test3/test6/test7"), null, 2))