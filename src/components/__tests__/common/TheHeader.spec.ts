import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import TheHeader from "@/components/common/TheHeader.vue";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

const wrapper = mount(TheHeader, {
  global: {
    plugins: [createTestingPinia()],
  },
});

describe("TheHeader", () => {
  const headingText = "Where in the world?";

  it("render heading text correctly", async () => {
    render(TheHeader, {
      slots: { default: headingText },
    });

    const header = await screen.findByText(headingText);
    expect(header.innerHTML).toBe(headingText);
  });
});
