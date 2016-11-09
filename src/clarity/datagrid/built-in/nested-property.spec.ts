import {NestedProperty} from "./nested-property";

export default function(): void {
    describe("NestedProperty (internal)", function() {
        it("accesses root properties", function() {
            this.property = new NestedProperty("a");
            expect(this.property.getPropValue({a: 42})).toBe(42);
        });

        it("accesses deep properties", function() {
            this.property = new NestedProperty("my.deep.prop");
            expect(this.property.getPropValue({my: {deep: {prop: 42}}})).toBe(42);
        });

        it("returns gracefully undefined when any of the intermediate properties is missing", function() {
            this.property = new NestedProperty("my.deep.prop");
            expect(this.property.getPropValue({})).toBeUndefined();
            expect(this.property.getPropValue({my: {}})).toBeUndefined();
            expect(this.property.getPropValue({my: {deep: {}}})).toBeUndefined();
        });
    });
};