import React from "react";
import Button from "@material-tailwind/react/Button";
import { Icon } from "@iconify/react";

export default function IconBtn(props) {
  return (
    <Button
      color={props.color}
      buttonType="filled"
      size="small"
      rounded={false}
      block={false}
      iconOnly={false}
      ripple="light"
    >
      <p className="cursive">{props.text}</p>
      <Icon icon={props.icon} style={{ fontSize: "14px" }} />
    </Button>
  );
}
