import { encode, decode } from "../src/index";
import { expect } from "chai";

describe("ASCII URL Encoder/Decoder", () => {
	describe("decode()", () => {
		it("should return '(Illustrati. Arte mondo) Paolo Piva (editor) - Architettura medievale. La pietra e la figura. Ediz. illustrata-Jaca Book (2019)'", () => {
			expect(
				decode(
					"%28Illustrati.%20Arte%20mondo%29%20Paolo%20Piva%20%28editor%29%20-%20Architettura%20medievale.%20La%20pietra%20e%20la%20figura.%20Ediz.%20illustrata-Jaca%20Book%20%282019%29"
				)
			).to.equal(
				"(Illustrati. Arte mondo) Paolo Piva (editor) - Architettura medievale. La pietra e la figura. Ediz. illustrata-Jaca Book (2019)"
			);
		});
	});
	describe("encode()", () => {
		it("should return '%28Monumenta%20Vaticana%20Selecta%29%20Hugo%20Brandenburg%20-%20Le%20prime%20chiese%20di%20Roma.%20IV-VII%20secolo.%20Ediz.%20illustrata-Jaca%20Book%20%282021%29'", () => {
			expect(
				encode(
					"(Научно-популярная серия РФФИ) А. П. Черняев - Радиационные технологии_ наука, народное хозяйство, медицина-Изд-во Московского ун-та (2019)"
				)
			).to.equal(
				"%28%D0%9D%D0%B0%D1%83%D1%87%D0%BD%D0%BE-%D0%BF%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%B0%D1%8F%20%D1%81%D0%B5%D1%80%D0%B8%D1%8F%20%D0%A0%D0%A4%D0%A4%D0%98%29%20%D0%90.%20%D0%9F.%20%D0%A7%D0%B5%D1%80%D0%BD%D1%8F%D0%B5%D0%B2%20-%20%D0%A0%D0%B0%D0%B4%D0%B8%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8_%20%D0%BD%D0%B0%D1%83%D0%BA%D0%B0%2C%20%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D0%B5%20%D1%85%D0%BE%D0%B7%D1%8F%D0%B9%D1%81%D1%82%D0%B2%D0%BE%2C%20%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D0%B0-%D0%98%D0%B7%D0%B4-%D0%B2%D0%BE%20%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%83%D0%BD-%D1%82%D0%B0%20%282019%29"
			);
		});
	});
});
