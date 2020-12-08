import { css } from 'styled-components';

export const fontSizes = {
  large: '18px',
  normal: '16px',
  small: '14px',
  smaller: '12px',
  tiny: '11px',
};

export const fontWeights = {
  bold: 800,
  semiBold: 600,
  medium: 500,
  normal: 400,
};

export const textTinyBold = css`
  font-size: ${fontSizes.tiny};
  font-weight: ${fontWeights.bold};
`;
export const textSmallBold = css`
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
`;
export const textSmallerSemiBold = css`
  font-size: ${fontSizes.smaller};
  font-weight: ${fontWeights.semiBold};
  letter-spacing: -0.1px;
`;
export const textLargeBold = css`
  font-size: ${fontSizes.large};
  font-weight: ${fontWeights.bold};
`;
