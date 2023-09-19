import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Slider } from '@mui/material';


export default function Preferences() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Slider
      aria-label="Edad"
      min={0}
      max={20}
      defaultValue={10}
      color="grey"
    />
    </Box>
  );
}
