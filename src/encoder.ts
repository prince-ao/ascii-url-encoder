export const encode = (str: string) => {
	let res = "";
	for (let char of encodeURIComponent(str)) {
		if (char == "(") {
			res += "%28";
		} else if (char == ")") {
			res += "%29";
		} else {
			res += char;
		}
	}
	return res;
};
