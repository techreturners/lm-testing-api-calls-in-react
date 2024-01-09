import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { FetchCharacters } from "./fetch_characters";

export const restHandlers = [
  http.get("https://swapi.dev/api/people", () => {
    return HttpResponse.json({ results: [{ name: "Luke Skywalker" }] });
  }),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders character name", async () => {
  render(<FetchCharacters />);
  const text = await screen.findByText("Luke Skywalker");
  console.log(text);
  expect(text).toBeInTheDocument();
});
