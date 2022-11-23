import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import cx from "classnames";
import React from "react";

interface Props {
  children: React.ReactNode;
  text: string;
}

const Tooltip = (props: Props) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger>{props.children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={4}
          className={cx(
            "radix-side-top:animate-slide-down-fade",
            "radix-side-right:animate-slide-left-fade",
            "radix-side-bottom:animate-slide-up-fade",
            "radix-side-left:animate-slide-right-fade",
            "inline-flex items-center rounded-md px-4 py-2.5",
            "bg-th-primary-light dark:bg-th-primary-dark",
          )}
        >
          <TooltipPrimitive.Arrow className="fill-current" />
          <span
            className="block text-xs leading-none
            text-th-background"
          >
            {props.text}
          </span>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
