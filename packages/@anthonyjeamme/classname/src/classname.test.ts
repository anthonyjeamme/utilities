import classNameModule from "./classname";
import { ClassNameModuleConfig, TClassNameList } from "./classname";

describe("classNameModule", () => {
  let styles: Record<string, string>;
  let config: Partial<ClassNameModuleConfig>;

  beforeEach(() => {
    styles = {
      component: "component__hashed",
      active: "active__hashed",
      "type-user": "type-user__hashed",
    };

    config = {
      globalPrefix: ":",
      keepUnfoundValues: false,
    };
  });

  test("should return valid class names", () => {
    const className = classNameModule(styles, config);

    const result = className("component", { active: true, type: "user" });
    expect(result.className).toBe(
      "component__hashed active__hashed type-user__hashed",
    );
  });

  test("should handle keys with spaces correctly", () => {
    const className = classNameModule({ "some key": "someValue" }, config);
    const result = className("some key");
    expect(result.className).toBe("someValue");
  });

  test("should handle empty input", () => {
    const className = classNameModule(styles, config);
    const result = className();
    expect(result.className).toBe("");
  });

  test("should handle globalPrefix correctly", () => {
    const className = classNameModule(styles, config);

    const result = className(":global", "component");
    expect(result.className).toBe("global component__hashed");
  });

  test("should handle unfound values according to config", () => {
    const className = classNameModule(styles, {
      ...config,
      keepUnfoundValues: true,
    });

    const result = className("nonExistent", "component");
    expect(result.className).toBe("nonExistent component__hashed");
  });

  test("should not include unfound values if keepUnfoundValues is false", () => {
    const className = classNameModule(styles, config);

    const result = className("nonExistent", "component");
    expect(result.className).toBe("component__hashed");
  });

  test("should handle null and undefined", () => {
    const className = classNameModule(styles, config);
    const list: TClassNameList = [
      "component",
      null,
      undefined,
      { active: true, type: null, color: undefined },
    ];

    const result = className(...list);
    expect(result.className).toBe("component__hashed active__hashed");
  });
});
