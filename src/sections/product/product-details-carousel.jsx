import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { alpha, styled, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function ProductDetailsCarousel({ product }) {
  const theme = useTheme();

  return <Box>Home</Box>;
}

ProductDetailsCarousel.propTypes = {
  product: PropTypes.object,
};
