/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NavBarHeaderOverridesProps = {
    NavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    "logo-87"?: PrimitiveOverrideProps<ViewProps>;
    Vector38604958?: PrimitiveOverrideProps<IconProps>;
    Vector38604959?: PrimitiveOverrideProps<IconProps>;
    Vector38604960?: PrimitiveOverrideProps<IconProps>;
    Vector38604961?: PrimitiveOverrideProps<IconProps>;
    Vector38604962?: PrimitiveOverrideProps<IconProps>;
    Vector38604963?: PrimitiveOverrideProps<IconProps>;
    Vector38604964?: PrimitiveOverrideProps<IconProps>;
    Vector38604965?: PrimitiveOverrideProps<IconProps>;
    Vector38604966?: PrimitiveOverrideProps<IconProps>;
    Vector38604967?: PrimitiveOverrideProps<IconProps>;
    Vector38604968?: PrimitiveOverrideProps<IconProps>;
    Vector38604969?: PrimitiveOverrideProps<IconProps>;
    "Frame 32129767076"?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Search?: PrimitiveOverrideProps<TextProps>;
    Account?: PrimitiveOverrideProps<TextProps>;
    "Frame 32129767081"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type NavBarHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarHeaderOverridesProps | undefined | null;
}>;
export default function NavBarHeader(props: NavBarHeaderProps): React.ReactElement;
