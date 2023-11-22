import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  link: {
    display: 'inline-flex',
    flexDirection: 'row' as const,
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.v2.contentLight,
    padding: '2px 8px',
    borderRadius: '4px',
    '&:hover': {
      color: theme.palette.text.primary,
      backgroundColor: '#3F466D',
      transition: 'color 0.1s',
    },
  },
  icon: {},
});
