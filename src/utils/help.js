// 字符串转json
export const JSONParse = (str) => {
	try {
		return JSON.parse(str)
	} catch (e) {
		console.log(e);
		//TODO handle the exception
		return {}
	}
}

// json转字符串
export const JSONToString = (json) => {
	return JSON.stringify(json)
}

export default {
	JSONParse,
	JSONToString
}

// 过滤空字段
export const filterNullEntry = (obj) => {
	return Object.fromEntries(Object.entries(obj).filter(item => {
			return (item[1] ?? "") && String(item[1]).length
	}))
}
