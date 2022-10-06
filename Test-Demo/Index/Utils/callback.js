/*
 * @Author: ruihuag
 * @Date: 2021-08-12 17:02:51
 * @LastEditTime: 2021-08-12 18:37:55
 * @LastEditors: ruihuag
 * @Description: 封装回调函数
 * @FilePath: \Test-Demo\Index\Utils\callback.js
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

const message = (obj) => {
	console.log(obj)
}


/**
 * config
 *  {
 * 	type 提示类型
 * 	code 提示码
 * 	msg 提示信息
 * 	priority 1: 比res.message 优先级更加高
 * 	priority 0: 比res.message 优先级更加低, default
 * }
 */
const callbackUtils = (
	res,
	{
		successMsgFlag = true,
		successMsg = "",
		errorMsgFlag = true,
		errorMsg = "",
		addConfig = []
	}) => {
	if (addConfig.length > 0) {
		const strategyObj = {};
		addConfig.map(item => {
			const { code, type, ...other } = item
			code && type && (strategyObj[String(item.code)] = { type, ...other });
		})
		if (res.code && Object.keys(strategyObj).includes(res.code)) {
			if (strategyObj[res.code].priority) message({ ...strategyObj[res.code] });
			else message({ ...strategyObj[res.code], msg: res.message });
			return strategyObj[res.code].result || true;
		}
	}
	if (res && res.code === "0") {
		successMsgFlag && message({ type: "success", msg: successMsg || res.message });
		return true;
	} else {
		errorMsgFlag && message({ type: "error", msg: errorMsg || res.message });
		return false;
	}
};

const strategyFlag = {
	'default': { successMsgFlag: true, errorMsgFlag: true, }, // 全提示
	'': { successMsgFlag: true, errorMsgFlag: true, }, // 全提示
	'all': { successMsgFlag: true, errorMsgFlag: true, },// 全提示
	'error': { successMsgFlag: false, errorMsgFlag: true, },// 只提示错误信息
	'success': { successMsgFlag: true, errorMsgFlag: false, }, // 只提示成功的提示
	'none': { successMsgFlag: false, errorMsgFlag: false, }, // 没有提示
}

const callback = (res, { flag = 'default', ...config }) => {
	return callbackUtils(res, { ...strategyFlag[flag], ...config })
}

// 开始测试
const resSuccess = {
	code: "0",
	message: 'success-msg'
}

const resError = {
	code: "123",
	message: 'error-msg'
}

// console.log(callback(resSuccess))
// callback(resSuccess, { flag: 'default' })
// console.log(callback(resError))
// callback(resError, { flag: 'default' })


let flag = "";
// callback(resSuccess, { successMsg: 'successmsgllll', successMsgFlag: true, errorMsgFlag: false })
console.log(callback(resError, { addConfig: [{ code: '123', type: '123123123', msg: 'config msg', priority: 1, result: 123 }] })) // callback(resError, { flag, errorMsg: '123213' })