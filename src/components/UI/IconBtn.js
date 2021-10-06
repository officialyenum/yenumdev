import React from "react";
import Button from "@material-tailwind/react/Button";
import { Icon } from '@iconify/react';

export default function IconBtn(props) {
    return (
        <a
            href={props.clickUrl} 
            alt={props.text}
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: "none"}}
            className="mx-5"
            >
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
        </a>
    )
}