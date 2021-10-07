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
                <Icon icon="mdi:unity" style={{ fontSize: '24px' }}/> {props.text}
            </Button>
    )
}