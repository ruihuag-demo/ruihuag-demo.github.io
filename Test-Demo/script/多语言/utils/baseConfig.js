const { mkdirs } = require('./mkdirPath')

exports.BaseConfig = (
	// xlsx => js
	xlsxTolocales_entryPath,
	xlsxTolocales_selectSheet = 0,
	xlsxTolocales_outputPath,
	// js => xlsx
	localesToXlsx_entryPath,
	localesToXlsx_outputPath
) => {
	xlsxTolocales_outputPath && mkdirs(xlsxTolocales_outputPath);
	localesToXlsx_entryPath && mkdirs(localesToXlsx_entryPath);

	return {
		xlsxTolocales: {
			entry: {
				// path: './mutilLang.xlsx',
				path: xlsxTolocales_entryPath,
				selectSheet: xlsxTolocales_selectSheet, //default 0 
				// selectSheet: 0, //default 0
				dataIndex: {
					zh_CN: [1, 2],
					zh_TW: [1, 4],
					en_US: [1, 3],
					locales: [0, 1],
					common: [0, 1],
				},
				format: {
					useHead: false,
					dataFormat: {
						locales: ['${key}', 'intl.formatMessage({id:"${value}"})']
					}
				}
			},
			output: {
				// path: './locales/',
				path: xlsxTolocales_outputPath,
				filename: {
					zh_CN: 'zh_CN.js',
					zh_TW: 'zh_TW.js',
					en_US: 'en_US.js',
					locales: 'locales.js',
					common: 'common.js'
				},
				format: {
					allDataFormat: 'module.exports = ${data}',
					dataFormat: {
						locales: {
							base: 'const locales = ${data}',
							object: true,
						}
					}
				}
			}
		},
		localesToXlsx: {
			entry: {
				// path: './locales/',
				path: localesToXlsx_entryPath,
				dataIndex: {
					zh_CN: [1, 2, 'zh_CN.js'],
					zh_TW: [1, 4, 'zh_TW.js'],
					en_US: [1, 3, 'en_US.js'],
					locales: [0, null, 'locales.js'],
				},
				format: {
					addHeader: [
						"name(locales对象的key)",
						"key（多语言文件的key）",
						"zh（中文）",
						"tw（繁体）",
						"en（英文）",
					],
					colPatt: /".+":\s*".+"/gi,
					patt: {
						locales: /.+:\s*.+/gi,
					}
				}
			},
			output: {
				// path: './locales/mutilLang2.xlsx',
				path: localesToXlsx_outputPath,
			}
		},
	}
}