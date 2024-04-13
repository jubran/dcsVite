import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { useMockedUser } from 'src/hooks/use-mocked-user';

import Label from 'src/components/label';

// ----------------------------------------------------------------------

export default function NavUserShort() {
  const { user } = useMockedUser();

  return (
    <Stack
      sx={{
        px: 10,
        py: 8,
        pb: 2,
        textAlign: 'center',
      }}
    >
      <Stack alignItems="center">
        <Box sx={{ position: 'relative' }}>
          <Avatar src={user?.photoURL} alt={user?.displayName} sx={{ width: 48, height: 48 }}>
            {user?.displayName?.charAt(0).toUpperCase()}
          </Avatar>

          <Label
            color="success"
            variant="filled"
            sx={{
              top: -6,
              px: 0.5,
              left: 40,
              height: 20,
              position: 'absolute',
              borderBottomLeftRadius: 2,
            }}
          >
            3
          </Label>
        </Box>

        <Stack spacing={0.5} sx={{ mb: 2, mt: 1.5, width: 1 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.displayName}
          </Typography>

          <Typography variant="body2" noWrap sx={{ color: 'text.disabled' }}>
            {user?.displayName}
          </Typography>
        </Stack>
        {/* <Button
          variant="contained"
          color="error"
          href={paths.minimalUI}
          target="_blank"
          rel="noopener"
          sx={{
            color: 'white',
            width: '100px',
            fontFamily: 'GE-SS-Two-Light',
            fontWeight: 'bold',
          }}
        >
          خروج
        </Button> */}
      </Stack>
    </Stack>
  );
}
