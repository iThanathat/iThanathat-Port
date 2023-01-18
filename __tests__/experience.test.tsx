import { render } from "@testing-library/react";
import Experiences from "../pages/experiences";

describe("Experience page", () => {
  it("Renders experience page unchanged", () => {
    const { container } = render(<Experiences />);

    expect(container).toMatchSnapshot();
  });
});
