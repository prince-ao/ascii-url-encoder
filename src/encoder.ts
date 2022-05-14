export const encode = (str: string) => {
	let res = "";
	for (let i = 0; i < str.length; i++) {
		switch (str[i]) {
			case " ":
				res += "%20";
				break;
			case "$":
				res += "%24";
				break;
			case "&":
				res += "%26";
				break;
			case "'":
				res += "%27";
				break;
			case "(":
				res += "%28";
				break;
			case ")":
				res += "%29";
				break;
			case "+":
				res += "%2B";
				break;
			case ",":
				res += "%2C";
				break;
			case "/":
				res += "%2F";
				break;
			case ":":
				res += "%3A";
				break;
			case ";":
				res += "%3B";
				break;
			case "<":
				res += "%3C";
				break;
			case "=":
				res += "%3D";
				break;
			case ">":
				res += "%3E";
				break;
			case "?":
				res += "3F";
				break;
			case "@":
				res += "40";
				break;
			default:
				res += str[i];
		}
	}
	return res;
};