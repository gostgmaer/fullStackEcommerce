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

export default function MuiModal({
  heading,
  Content,
  classes,
  maxWidth,
  openModal,
  setOpenModal,
}) {
  const [fullWidth, setFullWidth] = React.useState(true);

  return (
   <div>
     <Dialog
      aria-labelledby="customized-dialog-title"
      fullWidth={true}
      // @ts-ignore
      maxWidth={maxWidth ? maxWidth : "md"}
      className={`${classes ? classes : ""}`}
      open={openModal ? true : false}
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
          height: "auto",
          padding: "0 !important",
        }}
        dividers
      >
        {Content ? Content : "No Data Found Found"}
      </DialogContent>
      {/* <DialogActions></DialogActions> */}

      <IconButton
        aria-label="close"
        onClick={() => setOpenModal(false)}
        className=" absolute top-0 right-0"
      >
        {heading ? heading.icon : <Close />}
      </IconButton>
    </Dialog>
   </div>
  );
}
