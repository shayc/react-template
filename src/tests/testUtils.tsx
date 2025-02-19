import { render } from "@testing-library/react";
import React, { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router";
import { i18n } from "../i18n/i18n";

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }: { children: ReactNode }) => (
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </MemoryRouter>
    ),
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
