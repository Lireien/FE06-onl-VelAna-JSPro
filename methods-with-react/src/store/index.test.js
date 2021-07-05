import store from "../store"

describe("store MAIN test", () => {
    ["dispatch", "subscribe", "getState"].forEach((m) => {
        test(`${m}`, () => expect(store[m]).toBeDefined());
    });
});