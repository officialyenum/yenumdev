import React from "react";
import Button from "@material-tailwind/react/Button";
import { Icon } from '@iconify/react';

export default function IconBtn(props) {
    return (
            <Button
                color={props.color}
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
            >
                <Icon icon={props.icon} style={{ fontSize: '36px' }}/> 
                <p className="cursive">
                    {props.text}
                </p>
            </Button>
    )
}