import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';

export default function index({ open, setOpen, Body }) {

    return (
        <Dialog maxWidth="md" fullWidth={true} disableBackdropClick disableEscapeKeyDown open={open} onClose={() => { setOpen(false) }} aria-labelledby="form-dialog-title">

            <Body />

        </Dialog>
    )
}
