import { render, screen } from "@testing-library/react";
import Introduction from "../../components/Introduction";

describe("Introduction component", () => {
  it("render h1 with text Hi, I'm Brain and Welcome to iThanathat's Space.", () => {
    render(<Introduction />);
    const greetingText = screen.getByText(/Hi, I'm Brain/i);
    const welcomeText = screen.getByText(/Welcome to iThanathat's Space./i);
    expect(greetingText).toBeInTheDocument();
    expect(welcomeText).toBeInTheDocument();
  });

  it("render profile image", () => {
    render(<Introduction />);
    const image = screen.getByRole("img", { name: "iThanathat" });
    expect(image).toBeInTheDocument();
  });

  it("render contact section with social media link", () => {
    render(<Introduction />);
    const contactHeading = screen.getByText(/contact/i);
    const email = screen.getByText(/Email: ithanathat.brain@gmail.com/);
    const githubLink = screen.getByTestId("github");
    const facebookLink = screen.getByTestId("facebook");
    const instagramLink = screen.getByTestId("instagram");
    const linkedinLink = screen.getByTestId("linkedin");

    expect(contactHeading).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
    expect(facebookLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });
});
