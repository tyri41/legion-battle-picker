import { FC } from "react";
import { map } from "remeda";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export type PickBarProps = {
    items: { key: string; label: string }[];
    onClick: (key: string) => void;
    className?: string;
};

export const PickBar: FC<PickBarProps> = ({
    items,
    className = "",
    onClick,
}) => {
    return (
        <div className="w-full max-w-[600px] min-h-[68px] flex flex-wrap gap-4 p-4 bg-gray-800 rounded-3xl">
            {map(items, ({ key, label }) => (
                <Button
                    key={key}
                    size="sm"
                    className={cn("bg-gray-700 rounded-full", className)}
                    variant="secondary"
                    onClick={() => onClick(key)}
                >
                    {label}
                    <Icons.bigX className="w-4 ml-2" />
                </Button>
            ))}
        </div>
    );
};
