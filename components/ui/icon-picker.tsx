"use client";

import { useTheme } from "next-themes";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
interface IconPickerProps {
  onChange: (icon: string) => void;
  children: React.ReactNode;
  asChild?: boolean;
}

const IconPicker = (props: IconPickerProps) => {
  const { onChange, children, asChild } = props;
  const { resolvedTheme } = useTheme();
  const currentTheme = (resolvedTheme ?? "light") as keyof typeof themeMap;

  const themeMap = {
    light: Theme.LIGHT,
    dark: Theme.DARK,
  };

  const theme = themeMap[currentTheme];

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <EmojiPicker
          theme={theme}
          onEmojiClick={(data) => onChange(data.emoji)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default IconPicker;