import React from 'react';
import Dialog from '@material-ui/core/Dialog';

export default function index({ open, setOpen, Body }) {

    return (
        <Dialog maxWidth="md" fullWidth={true} disableBackdropClick disableEscapeKeyDown open={open} onClose={() => { setOpen(false) }} aria-labelledby="form-dialog-title">
            <Body />
        </Dialog>
    )
}
