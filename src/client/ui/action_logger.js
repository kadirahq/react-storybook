import React from 'react';

const preStyle = {
  color: '#666',
  overflowY: 'auto',
  padding: '8px',
  boxSizing: 'border-box',
  border: '1px solid #ECECEC',
  borderRadius: 4,
  backgroundColor: '#FFF',
  margin: '0',
  position: 'absolute',
  top: '30px',
  right: 0,
  bottom: 0,
  left: 0,
};

const wrapStyle = {
  position: 'relative',
  height: '100%',
};

const headStyle = {
  fontFamily: `
    -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto",
    "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif
  `,
  float: 'left',
  color: '#444',
  letterSpacing: '2px',
  fontSize: 12,
  margin: '0 0 0 5px',
};

const btnStyle = {
  background: 'transparent',
  border: 'none',
  color: '#8A8A8A',
  float: 'right',
  fontSize: '13px',
  outline: 'none',
};

const ActionLogger = ({ actionLog, onClear }) => (
  <div style={wrapStyle}>
    <h3 style={headStyle}>ACTION LOGGER</h3>
    <button style={btnStyle} onClick={onClear}>⌫</button>
    <pre style={preStyle}>{actionLog}</pre>
  </div>
);

ActionLogger.propTypes = {
  actionLog: React.PropTypes.string.isRequired,
  onClear: React.PropTypes.func,
};

export default ActionLogger;
