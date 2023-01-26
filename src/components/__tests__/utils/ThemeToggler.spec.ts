/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import ThemeToggler from "@/components/utils/ThemeToggler.vue";
import { describe, expect, it } from "vitest";
import { Theme, useTheme } from "@/stores/theme";
import { createTestingPinia } from "@pinia/testing";

describe("ToggleTheme.vue", () => {
  it("renders the correct icon", () => {
    const wrapper = mount(ThemeToggler, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })],
      },
    });
    const themeHandler = useTheme();

    if (themeHandler.theme === Theme.LIGHT) {
      expect(wrapper.find("svg").attributes("id")).toBe("moon");
    }

    if (themeHandler.theme === Theme.DARK) {
      expect(wrapper.find("svg").attributes("id")).toBe("sun");
    }
  });

  it("change theme after click", async () => {
    const wrapper = mount(ThemeToggler, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })],
      },
    });

    const themeHandler = useTheme();
    const togglerBtn = wrapper.find("#toggleBtn");

    if (themeHandler.theme === Theme.LIGHT) {
      await togglerBtn.trigger("click");
      expect(themeHandler.theme).toBe(Theme.DARK);
      expect(wrapper.find("svg").attributes("id")).toBe("sun");
    }

    if (themeHandler.theme === Theme.DARK) {
      await togglerBtn.trigger("click");
      expect(themeHandler.theme).toBe(Theme.LIGHT);
      expect(wrapper.find("svg").attributes("id")).toBe("moon");
    }
  });
});
