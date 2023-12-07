import React from "react";

const sizeClasses = {
  txtFutura15: "font-futura font-medium",
  txtFuturaBTMedium22: "font-futuramdbt font-normal",
  txtFutura13: "font-futura font-medium",
  txtKaleko105W00Bold27Teal900: "font-bold font-kalekowbold",
  txtRectaW01MediumCondensed64WhiteA700:
    "font-medium font-rectawmediumcondensed",
  txtFutura15Teal900: "font-futura font-medium",
  txtFutura17: "font-futura font-medium",
  txtNeufreitBold18: "font-neufreit font-normal",
  txtKaleko105W00Bold12: "font-bold font-kalekowbold",
  txtKaleko105W00Bold27: "font-bold font-kalekowbold",
  txtKaleko105W00Bold14: "font-bold font-kalekowbold",
  txtKaleko105W00Bold15: "font-bold font-kalekowbold",
  txtRectaW01MediumCondensed64: "font-medium font-rectawmediumcondensed",
  txtNeufreitBold20: "font-neufreit font-normal",
  txtKaleko105W00Bold15Teal900: "font-bold font-kalekowbold",
  txtKaleko105W00Bold14WhiteA700: "font-bold font-kalekowbold",
  txtNeufreitDemiBold15: "font-neufreit font-normal",
  txtFutura20: "font-futura font-medium",
  txtFutura20Teal900: "font-futura font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
