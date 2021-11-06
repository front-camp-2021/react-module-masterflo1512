import { Search } from "./Search";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux", () => {
  const ActualReactRedux = jest.requireActual("react-redux");
  return {
    ...ActualReactRedux,
    useSelector: () => [],
  };
});

jest.mock("react-router-dom", () => {
  const ActualReactRouterDom = jest.requireActual("react-router-dom");
  return {
    ...ActualReactRouterDom,
    Link: ({ children }) => <a>{children}</a>,
  };
});

describe("Search component", () => {
  test("trims user input", async () => {
    const setSearchData = jest.fn();
    const { getByRole } = render(
      <Search
        setSearchData={setSearchData}
        searchData={""}
        totalProducts={10}
      />
    );
    const input = getByRole("searchbox");
    userEvent.type(input, " Hewlett-Packard ");

    await waitFor(() => {
      expect(setSearchData).toHaveBeenCalledWith("Hewlett-Packard");
    });
  });
});
