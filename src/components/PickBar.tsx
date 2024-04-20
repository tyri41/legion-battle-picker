import { Button } from "flowbite-react";
import { FC } from "react";
import { map } from "remeda";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";

export type PickBarProps = {
    items: { key: string; label: string }[];
    onClick: (key: string) => void;
    className?: string;
};

export const PickBar: FC<PickBarProps> = ({ items, className = "" }) => {
    return (
        <div className="w-full max-w-[600px] flex flex-wrap gap-4 p-4 bg-gray-800 rounded-full">
            {map(items, ({ key, label }) => (
                <Button pill key={key} size="sm" className={cn("", className)}>
                    {label}
                    <Icons.bigX className="w-4 ml-2" />
                </Button>
            ))}
        </div>
    );
};
