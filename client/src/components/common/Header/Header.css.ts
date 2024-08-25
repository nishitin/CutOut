// src/components/Common/Header.css.ts
import { style } from '@vanilla-extract/css';

export const headerStyle = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#333',
  color: 'white',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});
