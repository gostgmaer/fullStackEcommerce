import { Paper, styled } from "@mui/material";

export const Item = styled(Paper)(({ theme }) => ({
  
    ...theme.typography.body2,
    padding: theme.spacing(0),

    color: theme.palette.text.secondary,
  }));