import React from 'react';
import styled from 'styled-components';
// import './Button.css';

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #f1baa1;
  color: white;
  background: #f1baa1;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #bd613c;
    border-color: #bd613c;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// const Button = ({ type, onClick, children }) => {
//   return (
//     <button type={type} onClick={onClick} className="button">
//       {children}
//     </button>
//   );
// };

export default Button;
