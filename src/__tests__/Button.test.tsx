import React from "react";
import { render } from "@testing-library/react-native";
import { Button } from "@ui/Button";

test("Button render", () => {
  render(<Button>Oi</Button>);
});
