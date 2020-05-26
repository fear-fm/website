import styled from "styled-components";

export enum Size {
  small,
  large,
}

export interface Props {
  bold?: boolean;
  size?: Size;
  transparent?: boolean;
  uppercase?: boolean;
}

export const Font = styled.span<Props>`
  color: ${ props => props.transparent ? 'rgba(255, 255, 255, 0.4)' : '#fff' };
  font-size: ${ props => props.size === Size.large ? '1rem' : '0.75rem' };
  font-weight: ${ props => props.bold ? 600 : 300 };
  text-transform: ${ props => props.uppercase ? 'uppercase' : 'none' };
`
