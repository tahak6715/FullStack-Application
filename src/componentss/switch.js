import * as React from 'react';
import Switch from '@mui/material/Switch';
import { Stack, Typography } from '@mui/material';

export default function BASwitch(props) {

  const{onClick,checked} = props

  return (
<>
<Stack direction="row" spacing={1} alignItems="center">

    <Typography>Off</Typography>
    <Switch
      checked={checked}
      onChange={onClick}
      inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography>on</Typography>
      </Stack>
      </>
  );
}