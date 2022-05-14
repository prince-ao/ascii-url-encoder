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
					"(Monumenta Vaticana Selecta) Hugo Brandenburg - Le prime chiese di Roma. IV-VII secolo. Ediz. illustrata-Jaca Book (2021)"
				)
			).to.equal(
				"%28Monumenta%20Vaticana%20Selecta%29%20Hugo%20Brandenburg%20-%20Le%20prime%20chiese%20di%20Roma.%20IV-VII%20secolo.%20Ediz.%20illustrata-Jaca%20Book%20%282021%29"
			);
		});
	});
});
