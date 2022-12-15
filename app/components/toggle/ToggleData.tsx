import { ToogleProps } from "./Toggle";

export const toggle = {
  primary: true,
  inactiveLabel: "Deactivated",
  activeLabel: "Activated",
  toggled: false,
  onClick: () => {
    console.log("Toggled");
  },
} as ToogleProps;
