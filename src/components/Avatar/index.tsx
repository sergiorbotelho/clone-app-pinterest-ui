import React from "react";
import { Image, ImageProps } from "react-native";

import { styles } from "@/components/Avatar/styles";

export function Avatar({ selected, ...rest }: AvatarProps & ImageProps) {
  return (
    <Image style={[styles.image, selected && styles.selected]} {...rest} />
  );
}
