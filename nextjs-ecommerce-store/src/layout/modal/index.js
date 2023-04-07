import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { Close, Padding } from "@mui/icons-material";
import { useGlobalContext } from "@/context/globalContext";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function MuiModal({ heading, Content }) {
  const { openModal, setOpenModal } = useGlobalContext();
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState(false);

  return (
    <Dialog
      aria-labelledby="customized-dialog-title"
      fullWidth={true}
      maxWidth={false}
      // className={class?class:''}
      open={openModal}
    >
      {heading && (
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {heading ? heading.title : "Modal Heading for web"}
          <IconButton aria-label="close" onClick={() => setOpenModal(false)}>
            {heading ? heading.icon : <Close />}
          </IconButton>
        </DialogTitle>
      )}

      <DialogContent
        sx={{
          width: "100%",
          height:'auto',
          padding:'0 !important'
        }}
        dividers
      >
        {Content ? Content : "No Data Found Found"}
      </DialogContent>
      {/* <DialogActions></DialogActions> */}
    </Dialog>
  );
}
