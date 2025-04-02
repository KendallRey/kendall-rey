import React, { ComponentProps } from "react";

type ChipProps = ComponentProps<'span'>;

export const Chip: React.FC<ChipProps> = ({ className = '', ...props}) => {
  return <span role="status" className={`${className} border rounded-xl py-1 px-2 text-sm`} {...props}/>;
};

