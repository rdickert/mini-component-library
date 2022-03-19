import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';



const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

// hacky (clever?) way to determine the sizing of the select - presuming this is how 
// getDisplayedValue is intended to be used.
const Sizer = styled.div`
  visibility: hidden;
  padding: 12px 16px;
  margin-right: 24px;
`;

const NativeSelect = styled.select`
  font-family:  Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  font-size: ${16/16}rem;
  border-radius: 8px;
  position: absolute;
  top: 0;
  width: 100%;
  border: none;
  outline-color: ${COLORS.primary};
  
  /* hide default arrow */
  -moz-appearance: none;
  -webkit-appearance: none;

  &:hover {
    color: black;
  }
`;

const ChevronWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  right: 12px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  height: 16px;
  color: ${COLORS.gray700};
`;


const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Sizer>
        {displayedValue}
      </Sizer>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <ChevronWrapper>
        <Icon id="chevron-down" size={16} strokeWidth={2} />
      </ChevronWrapper>
    </Wrapper>
  );
};

export default Select;
