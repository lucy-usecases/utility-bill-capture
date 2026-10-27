import React, { FunctionComponent, memo, useCallback, useEffect, useState } from 'react';
import { ButtonComponent, FileInput, Modal, useUXPContext } from 'uxp/components';
import './UploadBillDialog.scss';

interface UploadBillDialogProps {
    isOpen: boolean;
    onClose: () => void;
    /** Called with the chosen file. The upload itself runs in the background, so this returns immediately. */
    onUpload: (file: File) => void;
}

const AllowedTypes = ['application/pdf', 'image/*'];

const UploadBillDialogBase: FunctionComponent<UploadBillDialogProps> = ({ isOpen, onClose, onUpload }) => {
    const uxpContext = useUXPContext();
    const [file, setFile] = useState<File | null>(null);
    const [isValid, setIsValid] = useState(false);

    // start fresh every time the dialog opens
    useEffect(() => {
        if (!isOpen) return;
        setFile(null);
        setIsValid(false);
    }, [isOpen]);

    const handleUpload = useCallback(() => {
        if (!file || !isValid) return;
        onUpload(file);
        onClose();
    }, [file, isValid, onUpload, onClose]);

    return (
        <Modal
            show={isOpen}
            onClose={onClose}
            title={uxpContext.$L('ebr.upload.title')}
            showCloseButton
            className="ebr_uploadbill"
        >
            <div className="ebr_uploadbill__body">
                <div className="ebr_uploadbill__hint">{uxpContext.$L('ebr.upload.hint')}</div>

                <FileInput
                    value={file ?? undefined}
                    onChange={(f, valid) => {
                        setFile(f);
                        setIsValid(valid);
                    }}
                    allowedTypes={AllowedTypes}
                    preview={{ showName: true, showPreview: false }}
                    dropAreaIcon="fal file-arrow-up"
                    dropAreaLabel={uxpContext.$L('ebr.upload.drop-label')}
                />

                <div className="ebr_uploadbill__actions">
                    <ButtonComponent
                        title={uxpContext.$L('ebr.action.cancel')}
                        variant="secondary"
                        onClick={onClose}
                    />
                    <ButtonComponent
                        title={uxpContext.$L('ebr.action.upload')}
                        leftIcon="fal cloud-arrow-up"
                        variant="primary"
                        disabled={!file || !isValid}
                        onClick={handleUpload}
                    />
                </div>
            </div>
        </Modal>
    );
};

export const UploadBillDialog = memo(UploadBillDialogBase);
