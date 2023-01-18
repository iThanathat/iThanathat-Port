import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "../../components/NavBar";

const onToggleTheme = jest.fn();

describe("NavBar Component", () => {
  beforeEach(() => {
    render(<NavBar theme="corporate" onToggleTheme={onToggleTheme} path="/" />);
  });
  it("Render navbar with profile picture, name, experiences, source and toggle theme button", () => {
    const profilePic = screen.getByRole("img", { name: /ithanathat/i });
    const name = screen.getByText(/iThanathat/i);
    const experiencesButton = screen.getByText(/experiences/i);
    const sourceButton = screen.getByRole("link", { name: /source/i });
    const toggleThemeButton = screen.getByTestId("toggle-theme-button");

    expect(profilePic).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(experiencesButton).toBeInTheDocument();
    expect(sourceButton).toBeInTheDocument();
    expect(toggleThemeButton).toBeInTheDocument();
  });

  it("Render experiences link and has href to path /experiences", async () => {
    const experiencesButton = screen.getByText(/experiences/i);

    expect(experiencesButton).toHaveAttribute("href", "/experiences");
  });

  it("Render source link and has href to path of GitHub repo", () => {
    const sourceButton = screen.getByRole("link", { name: /source/i });

    expect(sourceButton).toHaveAttribute(
      "href",
      "https://github.com/iThanathat/iThanathat-Space"
    );
  });
});

describe("NavBar with dark theme", () => {
  beforeEach(() => {
    render(<NavBar theme="dark" onToggleTheme={onToggleTheme} path="/" />);
  });

  it("Render a sun icon button", () => {
    const sunButton = screen.getByTestId("sun-button");
    expect(sunButton).toBeInTheDocument();
  });
});

describe("NavBar with corporate theme", () => {
  beforeEach(() => {
    render(<NavBar theme="corporate" onToggleTheme={onToggleTheme} path="/" />);
  });

  it("Render a moon icon button", () => {
    const moonButton = screen.getByTestId("moon-button");
    expect(moonButton).toBeInTheDocument();
  });
});
