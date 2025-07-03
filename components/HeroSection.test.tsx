import { render, screen } from "@testing-library/react";
import { HeroSection } from "./HeroSection";

const defaultProps = {
  title: "Test Title",
  subtitle: "Test Subtitle",
  description: "Test description text",
  primaryButtonText: "Primary Button",
  primaryButtonHref: "/primary",
  secondaryButtonText: "Secondary Button",
  secondaryButtonHref: "/secondary",
  imageSrc: "/test-image.png",
  imageAlt: "Test image",
};

describe("HeroSection Component", () => {
  // Rendering tests
  test("renders with default props", () => {
    render(<HeroSection {...defaultProps} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Test description text")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Primary Button" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Secondary Button" })
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Test image" })).toBeInTheDocument();
  });

  test("renders title and subtitle correctly", () => {
    render(
      <HeroSection
        {...defaultProps}
        title="Amazing Product"
        subtitle="For Everyone"
      />
    );

    expect(screen.getByText("Amazing Product")).toBeInTheDocument();
    expect(screen.getByText("For Everyone")).toBeInTheDocument();

    // Verify the subtitle has the highlight color class
    const subtitleElement = screen.getByText("For Everyone");
    expect(subtitleElement).toHaveClass("text-[#FF69B4]");
  });

  // Image position tests
  test("renders with image on the right by default", () => {
    const { container } = render(<HeroSection {...defaultProps} />);

    const flexContainer = container.querySelector(".flex");
    const imageDiv = container.querySelector("img")?.parentElement;
    const textDiv = container.querySelector("h1")?.closest("div");

    expect(flexContainer).toBeInTheDocument();
    expect(imageDiv).toBeInTheDocument();
    expect(textDiv).toBeInTheDocument();

    // Image should come after text in DOM order when position is right
    const children = Array.from(flexContainer?.children || []);
    const textIndex = children.indexOf(textDiv as Element);
    const imageIndex = children.indexOf(imageDiv as Element);

    expect(textIndex).toBeLessThan(imageIndex);
  });

  test("renders with image on the left when specified", () => {
    const { container } = render(
      <HeroSection {...defaultProps} imagePosition="left" />
    );

    const flexContainer = container.querySelector(".flex");
    const imageDiv = container.querySelector("img")?.parentElement;
    const textDiv = container.querySelector("h1")?.closest("div");

    expect(flexContainer).toBeInTheDocument();
    expect(imageDiv).toBeInTheDocument();
    expect(textDiv).toBeInTheDocument();

    // Image should come before text in DOM order when position is left
    const children = Array.from(flexContainer?.children || []);
    const textIndex = children.indexOf(textDiv as Element);
    const imageIndex = children.indexOf(imageDiv as Element);

    expect(imageIndex).toBeLessThan(textIndex);
  });

  // Button tests
  test("renders buttons with correct links", () => {
    render(<HeroSection {...defaultProps} />);

    const primaryButton = screen.getByRole("link", { name: "Primary Button" });
    const secondaryButton = screen.getByRole("link", {
      name: "Secondary Button",
    });

    expect(primaryButton).toHaveAttribute("href", "/primary");
    expect(secondaryButton).toHaveAttribute("href", "/secondary");
  });

  test("renders custom button text", () => {
    render(
      <HeroSection
        {...defaultProps}
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
      />
    );

    expect(
      screen.getByRole("link", { name: "Get Started" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Learn More" })
    ).toBeInTheDocument();
  });

  // Image tests
  test("renders image with correct src and alt", () => {
    render(
      <HeroSection
        {...defaultProps}
        imageSrc="/custom-image.jpg"
        imageAlt="Custom alt text"
      />
    );

    const image = screen.getByRole("img", { name: "Custom alt text" });
    expect(image).toHaveAttribute("src", "/custom-image.jpg");
    expect(image).toHaveAttribute("alt", "Custom alt text");
  });

  test("applies correct image styling", () => {
    render(<HeroSection {...defaultProps} />);

    const image = screen.getByRole("img");
    expect(image).toHaveClass("rounded-lg", "shadow-lg");
  });

  // Styling tests
  test("applies custom background color", () => {
    const { container } = render(
      <HeroSection {...defaultProps} backgroundColor="bg-blue-100" />
    );

    const section = container.querySelector("section");
    expect(section).toHaveClass("bg-blue-100");
  });

  test("applies custom highlight color", () => {
    render(<HeroSection {...defaultProps} highlightColor="text-red-500" />);

    const subtitle = screen.getByText("Test Subtitle");
    expect(subtitle).toHaveClass("text-red-500");
  });

  test("applies default styling classes", () => {
    const { container } = render(<HeroSection {...defaultProps} />);

    const section = container.querySelector("section");
    expect(section).toHaveClass(
      "bg-[#FFF0F5]",
      "pt-8",
      "pb-16",
      "md:pt-12",
      "md:pb-24"
    );
  });

  // Content tests
  test("renders description text", () => {
    render(
      <HeroSection
        {...defaultProps}
        description="This is a longer description text"
      />
    );

    expect(
      screen.getByText("This is a longer description text")
    ).toBeInTheDocument();
  });

  test("applies correct text styling", () => {
    render(<HeroSection {...defaultProps} />);

    const title = screen.getByText("Test Title");
    const description = screen.getByText("Test description text");

    expect(title).toHaveClass(
      "text-4xl",
      "md:text-5xl",
      "font-bold",
      "text-gray-800",
      "mb-4"
    );
    expect(description).toHaveClass("text-lg", "text-gray-600", "mb-6");
  });

  // Layout tests
  test("has responsive layout classes", () => {
    const { container } = render(<HeroSection {...defaultProps} />);

    const flexContainer = container.querySelector(".flex");
    expect(flexContainer).toHaveClass(
      "flex-col",
      "md:flex-row",
      "items-center"
    );

    const textContainer = container.querySelector("h1")?.closest("div");
    expect(textContainer).toHaveClass("md:w-1/2", "mb-8", "md:mb-0");
  });

  test("applies correct margin for left image positioning", () => {
    const { container } = render(
      <HeroSection {...defaultProps} imagePosition="left" />
    );

    const imageContainer = container.querySelector("img")?.parentElement;
    expect(imageContainer).toHaveClass("md:mr-8");
  });

  // Accessibility tests
  test("has proper semantic structure", () => {
    render(<HeroSection {...defaultProps} />);

    // Check for heading hierarchy
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Test Title Test Subtitle");

    // Check for image accessibility
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt", "Test image");
  });

  // Snapshot test
  test("matches snapshot", () => {
    const { container } = render(<HeroSection {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  test("matches snapshot with left image position", () => {
    const { container } = render(
      <HeroSection {...defaultProps} imagePosition="left" />
    );
    expect(container).toMatchSnapshot();
  });
});
