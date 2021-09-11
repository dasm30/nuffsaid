import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import React from 'react';

// TODO: remove (forwardRef) when fixed, workaround for material-ui warning
export const Alert = React.forwardRef((props: AlertProps, ref) => {
  return <MuiAlert ref={ref} elevation={6} variant="filled" {...props} />;
});
