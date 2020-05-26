import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled, {css} from "styled-components";
import { Font, Size } from '@atoms/Font'

export interface Props {
  size?: Size;
  children: string;
  to: string;
  exact?: boolean;
}

const Link = styled.a<{ active?: boolean }>`
  position: relative;
  cursor: pointer;
  transition: color 300ms;
  text-decoration: none;
  
  &:hover, &:active, &:focus {
    color: #fff;
  }
  
  &:after {
    content: '';
    background-color: rgba(255, 255, 255, 0.4);
    width: 0;
    left: 50%;
    transition: all 400ms;
  }
  
  ${ props => props.active && css`
    &:after {
        content: '';
        position: absolute;
        bottom: -0.2rem;
        height: 2px;
        border-radius: 2px;
        background-color: #fff;
        width: 100%;
        left: 0;
      }
  ` }
  
`

export const MenuLink: React.FC<Props> = ({ size, children, to, exact }: Props) => {
  const history = useHistory();
  const location = useLocation();
  const navigate = (e: { preventDefault: () => void }): void => {
    e.preventDefault();
    history.push(to);
  }
  if (!to.startsWith('/')) {
    to = `/${ to }`
  }
  const active = exact ? location.pathname === to : location.pathname.startsWith(to);
  return (
      <Link href={ to } active={ active } onClick={ navigate }>
        <Font uppercase bold size={ size } transparent={ !active }>{ children }</Font>
      </Link>
  )
}

export {
  Size,
}
