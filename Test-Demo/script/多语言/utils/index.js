const fs = require('fs')


exports.writeFile = (path, data, callback) => {
	fs.writeFile(path, data, (err, data) => {
		if (err) {
			callback && callback(err, data);
			throw err;
		}
	})
}

exports.writeFileByList = (list = []) => {
	list.forEach((item = {}) => {
		const { path, data, callback } = item;
		fs.writeFile(path, data, (err, data) => {
			if (err) {
				callback && callback(err, data);
				throw err;
			}
		})
	})
}