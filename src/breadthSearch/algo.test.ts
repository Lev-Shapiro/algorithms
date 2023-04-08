import { qSearch } from "./algo";

import { easy1, easy2, middle1 } from "./algo.mocks";

describe("qSearch", () => {
    test("should return correct depth for simple array", () => {
        expect(qSearch(easy1)).toEqual(1);
    });

    test("should return correct depth for empty array", () => {
        expect(qSearch(easy2)).toEqual(-1);
    });

    test("should return correct depth for complex array", () => {
        expect(qSearch(middle1)).toEqual(4);
    });
});
