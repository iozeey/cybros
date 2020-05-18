import React from "react";
import PropTypes from "prop-types";
import { Typography, IconButton, Box, Modal } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { portfolioPopUpStyles } from "../../assets/css/_portfolio";


const PortfolioPopup = ({
  openModal,
  onClose,
  title,
  children,
  onCancel,
  onSubmit,
  submitText,
  cancelText,
  isSubmitDisabled,
  contentClassName,
}) => (
  <Modal open={openModal} onClose={onClose}>
    <IconButton onClick={onClose} data-tc="close-popup" className="close">
      <CloseOutlined />
    </IconButton>
    <Typography className="title">{title}</Typography>
    {children}
    {(cancelText || submitText) && (
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        {cancelText && (
          <Button variant="contained" color="secondary" onClick={onCancel}>
            {cancelText}
          </Button>
        )}
        {submitText && (
          <Button
            variant="contained"
            onClick={onSubmit}
            disabled={isSubmitDisabled}
          >
            {submitText}
          </Button>
        )}
      </Box>
    )}
  </Modal>
);

PortfolioPopup.propTypes = {
  children: PropTypes.shape(),
  openModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  submitText: PropTypes.string,
  cancelText: PropTypes.string,
  isSubmitDisabled: PropTypes.bool,
  contentClassName: PropTypes.string,
};

export default withStyles(portfolioPopUpStyles)(PortfolioPopup);
