import { classNamesToTypeDefinitions, ExportType } from "../../lib/typescript";

describe("classNamesToTypeDefinitions", () => {
  describe("named", () => {
    it("converts an array of class name strings to type definitions", () => {
      const definition = classNamesToTypeDefinitions(
        ["myClass", "yourClass"],
        "named"
      );

      expect(definition).toEqual(
        "export const myClass: string;\nexport const yourClass: string;\n"
      );
    });

    it("returns null if there are no class names", () => {
      const definition = classNamesToTypeDefinitions([], "named");

      expect(definition).toBeNull;
    });
  });

  describe("default", () => {
    it("converts an array of class name strings to type definitions", () => {
      const definition = classNamesToTypeDefinitions(
        ["myClass", "yourClass"],
        "default"
      );

      expect(definition).toEqual(
        "interface Styles {\n  'myClass': string;\n  'yourClass': string;\n}\n\ndeclare const styles: Styles;\n\nexport default styles;\n"
      );
    });

    it("returns null if there are no class names", () => {
      const definition = classNamesToTypeDefinitions([], "default");

      expect(definition).toBeNull;
    });
  });

  describe("invalid export type", () => {
    it("returns null", () => {
      const definition = classNamesToTypeDefinitions(
        ["myClass"],
        "invalid" as ExportType
      );

      expect(definition).toBeNull;
    });
  });
});
