/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarketingFooterOverridesProps = {
    MarketingFooter?: PrimitiveOverrideProps<FlexProps>;
    "Frame 405"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 403"?: PrimitiveOverrideProps<FlexProps>;
    "Thank you for using our app :)29766990"?: PrimitiveOverrideProps<TextProps>;
    "Thank you for using our app :)38605280"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    "logo-87"?: PrimitiveOverrideProps<ViewProps>;
    Vector38615301?: PrimitiveOverrideProps<IconProps>;
    Vector38615302?: PrimitiveOverrideProps<IconProps>;
    Vector38615303?: PrimitiveOverrideProps<IconProps>;
    Vector38615304?: PrimitiveOverrideProps<IconProps>;
    Vector38615305?: PrimitiveOverrideProps<IconProps>;
    Vector38615306?: PrimitiveOverrideProps<IconProps>;
    Vector38615307?: PrimitiveOverrideProps<IconProps>;
    Vector38615308?: PrimitiveOverrideProps<IconProps>;
    Vector38615309?: PrimitiveOverrideProps<IconProps>;
    Vector38615310?: PrimitiveOverrideProps<IconProps>;
    Vector38615311?: PrimitiveOverrideProps<IconProps>;
    Vector38615312?: PrimitiveOverrideProps<IconProps>;
    "\u00A9 2023 AWS Amplify UI. All rights reserved."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MarketingFooterProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MarketingFooterOverridesProps | undefined | null;
}>;
export default function MarketingFooter(props: MarketingFooterProps): React.ReactElement;
