import React, { useState } from "react";
import "./Toggle.css";

export interface ToogleProps {
  primary?: boolean;
  inactiveLabel: string;
  activeLabel: string;
  toggled: boolean;
  onClick: Function;
}

export const Toggle = (data: ToogleProps) => {
  const { inactiveLabel, activeLabel, toggled, onClick } = data;
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <div className="toggle-container">
      <label className="toggle-label">
        <input
          className="toggle-input"
          type="checkbox"
          defaultChecked={isToggled}
          onClick={callback}
        />
        <span className="toggle-span" />
        <strong className="toggle-strong">
          {isToggled ? activeLabel : inactiveLabel}
        </strong>
      </label>
    </div>
  );
};

export default Toggle;
