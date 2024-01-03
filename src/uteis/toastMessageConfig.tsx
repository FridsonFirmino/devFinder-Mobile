import { View, Text } from "react-native";
import { BaseToastProps, InfoToast } from "react-native-toast-message";
import { colors } from "./colors";
import { JSX } from "react";

/*
  1. Create the config
*/
export const toastConfig = {
  info: (props: JSX.IntrinsicAttributes & BaseToastProps) =>(
    <InfoToast
      {...props}
      style={{ borderLeftColor: colors.text_Blue }}
      contentContainerStyle={{ paddingHorizontal: 15, backgroundColor: colors.bg_Secundary }}
      text1Style={{
        color: colors.text_Blue,
        fontSize: 17,
        fontFamily: 'SpaceMono_700Bold'
      }}
      text2Style={{
        color: colors.text_White,
        fontSize: 14,
        fontFamily: 'SpaceMono_400Regular',
      }}
    />
  ),
};
