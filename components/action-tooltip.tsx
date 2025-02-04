"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@radix-ui/react-tooltip";

interface ActionTooltipProps {
    label: string;
    children?: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}

export const ActionTooltip = ({
    label,
    children,
    side,
    align,
}: ActionTooltipProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent side={side} align={align}>
                    <p className="font-semibold text-sm capitalize bg-black/90 p-2 m-2 rounded-lg">
                        {label.toLocaleLowerCase()}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
