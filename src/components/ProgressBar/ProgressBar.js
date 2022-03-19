/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: var(--height);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--outer-border-radius);
`;

const InnerBarWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${props => `${props.value}%`};
  height: 100%;
  background-color: ${COLORS.primary};
`;


const ProgressBar = ({ value, size }) => {
  let outerStyle = {};
  let innerStyle = {};
  switch (size) {
    case 'large': {
      outerStyle = {
        '--height': '24px',
        '--padding': '4px',
        '--outer-border-radius': '8px',
      };
      innerStyle = {
        '--bar-border-radius': '4px'
      }
      break;
    }
    case 'small': {
      outerStyle= {
        '--height': '8px',
      };
      innerStyle = {
        '--bar-border-radius': '4px'
      }
      break;
    }
    default: { // medium
      outerStyle = {
        '--height': '12px',
      };
      innerStyle = {
        '--bar-border-radius': '4px'
      }
      break;
    }
  }

  return (
    <Wrapper style={outerStyle}>
      <InnerBarWrapper style={innerStyle}>
        <Bar 
          role="progressbar" 
          aria-valuenow={value} 
          aria-valuemin="0" 
          aria-valuemax="100"
          value={value}
        >
          <VisuallyHidden>
            { `progress: ${value}% complete`  }
          </VisuallyHidden>
        </Bar>
      </InnerBarWrapper>
    </Wrapper>
    );
};

export default ProgressBar;
