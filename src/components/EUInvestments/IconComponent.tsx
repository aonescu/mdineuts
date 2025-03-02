import React from "react";

interface IconComponentProps {
  svgContent: string;
  className?: string;
}

export const IconComponent: React.FC<IconComponentProps> = ({
  svgContent,
  className = "",
}) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};
