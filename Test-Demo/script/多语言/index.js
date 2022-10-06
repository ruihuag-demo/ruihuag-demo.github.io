const { readXlsxtToWriteFile } = require('./utils/readXlsx');
const { localesToXlsx } = require('./utils/localesToXlsx')
const { BaseConfig } = require('./utils/baseConfig')
/**
 * 使用最好先复制一份到temp文件夹中
 * toJS/ toXlsx 不要同时设置为true
 */

const configList = [
	{
		xlsxTolocales_entryPath: './mutilLang.xlsx',
		xlsxTolocales_selectSheet: 1,
		xlsxTolocales_outputPath: './locales/messageTemplate/',
		// toJs: true,
		localesToXlsx_entryPath: './locales/messageTemplate/',
		localesToXlsx_outputPath: './locales/messageTemplate/locales.xlsx',
		toXlsx: true,
	},
	{
		// xlsxTolocales_entryPath: './mutilLang.xlsx',
		xlsxTolocales_entryPath: './locales/recallClass/locales.xlsx',
		xlsxTolocales_selectSheet: 0,
		toJs: true,
		xlsxTolocales_outputPath: './locales/recallClass/',
		localesToXlsx_entryPath: './locales/recallClass/',
		localesToXlsx_outputPath: './locales/recallClass/locales.xlsx',
		// toXlsx: true,
	},
	// {
	// 	xlsxTolocales_entryPath: './mutilLang.xlsx',
	// 	xlsxTolocales_selectSheet: 1,
	// 	xlsxTolocales_outputPath: './locales/messageTemplate/',
	// 	localesToXlsx_entryPath: './locales/',
	// 	localesToXlsx_outputPath: './locales/mutilLang3.xlsx',
	// },
]

configList.forEach(item => {
	const {
		toJs = false, toXlsx = false,
		// xlsx => js
		xlsxTolocales_entryPath,
		xlsxTolocales_selectSheet,
		xlsxTolocales_outputPath,
		// js => xlsx
		localesToXlsx_entryPath,
		localesToXlsx_outputPath,
	} = item;

	const config = BaseConfig(
		xlsxTolocales_entryPath,
		xlsxTolocales_selectSheet,
		xlsxTolocales_outputPath,
		localesToXlsx_entryPath,
		localesToXlsx_outputPath
	)

	// 生成 js 文件
	toJs && readXlsxtToWriteFile(config.xlsxTolocales)
	// 生成 xlsx 文件
	toXlsx && localesToXlsx(config.localesToXlsx)
})
