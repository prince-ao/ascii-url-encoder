export const decode = (str: string) => {
	let res = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] == "%") {
			const hold = str[i + 1] + str[i + 2];
			switch (hold) {
				case "20":
					res += " ";
					break;
				case "24":
					res += "$";
					break;
				case "26":
					res += "&";
					break;
				case "27":
					res += "'";
					break;
				case "28":
					res += "(";
					break;
				case "29":
					res += ")";
					break;
				case "2B":
					res += "+";
					break;
				case "2C":
					res += ",";
					break;
				case "2F":
					res += "/";
					break;
				case "3A":
					res += ":";
					break;
				case "3B":
					res += ";";
					break;
				case "3C":
					res += "<";
				case "3D":
					res += "=";
					break;
				case "3E":
					res += ">";
					break;
				case "3F":
					res += "?";
					break;
				case "40":
					res += "@";
					break;
				default:
					res += str[i] + str[i + 1] + str[i + 2];
			}
			i += 2;
		} else if (str[i] == "_") {
			res += ":";
		} else {
			res += str[i];
		}
	}
	console.log(res);
	return res;
};