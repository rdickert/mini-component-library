import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

// In solution, this is a styled.label instead of a div.
// Then we won't need `pointer-events: none` in the icon. Neat.
// Also is maybe a bit more semantic as inputs usually have labels.
const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  height: var(--height);
  color: ${COLORS.gray700};
`;

const Input = styled.input`
  border: none;
  border-bottom: var(--underline-stroke) ${COLORS.black} solid;
  height: 100%;
  width: 100%;
  padding-left: var(--input-padding-left);

  color: inherit;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: var(--font-size);

  outline-offset: 2px;;
  /* line-height: 1.5rem; */

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:hover {
    color: ${COLORS.black}
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  left: 2px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  pointer-events: none;

  ${Input}:hover + & {
    color: ${COLORS.black}
  }
`;
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated // adding for correctness after watching vid
}) => {
  let style = {};
  let iconSize = 16;

  // in solution, these were set up in an outside config obj, which is maybe nicer.
  if (size === 'small') {
    style = {
      '--width': width + 'px',
      '--height': '1.5rem',
      '--underline-stroke': '1px',
      '--input-padding-left': '24px',
      '--font-size': `${14 /16}rem`
    }
    iconSize = 16;
  } else if (size === 'large') {
    style = {
      '--width': width + 'px',
      '--height': '2rem',
      '--underline-stroke': '2px',
      '--input-padding-left': '36px',
      '--font-size': `${18 /16}rem`
    }
    iconSize = 24;
  } else {
    // maybe a little extreme here throwing, or maybe that's Josh's rec?
    throw new Error('IconInput: invalid size prop passed')
  }

  // I passed `style` with my variables only to the top level component,
  // but the vars are available to child components. I think I prefer this,
  // but whether this is good might depend on the complexity of the component.
  // The fact that these vars are "global" to the component seems logical as
  // long as the var names make sense (you can also reuse a value in multiple places)
  return (
    <Wrapper style={style}>
      <Input placeholder={placeholder} {...delegated} />
      <InputIcon id={icon} size={iconSize} strokeWidth={2} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

export default IconInput;
