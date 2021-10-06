import React from "react";
import Button from "@material-tailwind/react/Button";
import { Icon } from '@iconify/react';

export default function PrimaryButton() {
    return (
        <Button
            color="lightBlue"
            buttonType="filled"
            size="xl"
            rounded={true}
            block={false}
            iconOnly={true}
            ripple="light"
        >
            <Icon icon="mdi:unity" />
        </Button>
    )
}