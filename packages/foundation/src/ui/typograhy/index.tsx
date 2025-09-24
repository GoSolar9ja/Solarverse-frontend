import BaseTypography, { BaseTypographyProps } from "./base-typography";
type TypographyProps = Omit<BaseTypographyProps, "as">;
const Typography = {
  h1: (props: TypographyProps) => (
    <BaseTypography as="h1" size="h1" {...props} />
  ),
  h2: (props: TypographyProps) => (
    <BaseTypography as="h2" size="h2" {...props} />
  ),
  h3: (props: TypographyProps) => (
    <BaseTypography as="h3" size="h3" {...props} />
  ),
  h4: (props: TypographyProps) => (
    <BaseTypography as="h4" size="h4" {...props} />
  ),
  h5: (props: TypographyProps) => (
    <BaseTypography as="h5" size="h5" {...props} />
  ),
  h6: (props: TypographyProps) => (
    <BaseTypography as="h6" size="h6" {...props} />
  ),
  body1: (props: TypographyProps) => (
    <BaseTypography as="p" size="body1" {...props} />
  ),
  body2: (props: TypographyProps) => (
    <BaseTypography as="p" size="body2" {...props} />
  ),
};

export { Typography };
