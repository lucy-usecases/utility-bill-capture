import React, { FunctionComponent, memo, useCallback, useMemo } from 'react';
import {
    DynamicFormFieldProps,
    executeConfig,
    FormSectionProps,
    SlideInForm,
    useAlert,
    useUXPContext,
} from 'uxp/components';
import { Bill, BillServices } from '../../services';
import { getExtractedFields, toFieldLabel } from '../../utils';

interface BillFieldsFormProps {
    isOpen: boolean;
    bill: Bill | null;
    onClose: () => void;
    afterSave: (id: string) => void;
}

const BillFieldsFormBase: FunctionComponent<BillFieldsFormProps> = ({ isOpen, bill, onClose, afterSave }) => {
    const uxpContext = useUXPContext();
    const alerts = useAlert();

    const extractedFields = useMemo(() => getExtractedFields(bill), [bill]);

    const formStructure = useMemo((): FormSectionProps[] => {
        const fields: DynamicFormFieldProps[] = Object.entries(extractedFields).map(([key, value]) => {
            if (typeof value === 'number') {
                return { name: key, label: toFieldLabel(key), type: 'number', value, allowZero: true, allowNegative: true };
            }
            const text = value === null || value === undefined ? '' : typeof value === 'object' ? JSON.stringify(value) : String(value);
            return { name: key, label: toFieldLabel(key), type: text.length > 80 ? 'textarea' : 'text', value: text };
        });

        return [{ title: uxpContext.$L('ebr.details.extracted-fields'), columns: 2, fields }];
    }, [extractedFields]);

    const handleSave = useCallback(
        async (data: Record<string, any>) => {
            if (!bill) return;
            const { error } = await executeConfig(uxpContext, BillServices.update(bill.id, data));
            if (error) {
                alerts.error(uxpContext.$L('ebr.message.update-failed'));
                return;
            }
            afterSave(bill.id);
        },
        [bill, afterSave]
    );

    return (
        <SlideInForm
            formType="dynamic"
            title={uxpContext.$L('ebr.form.edit-title')}
            isOpen={isOpen && !!bill}
            formStructure={formStructure}
            onSave={handleSave}
            onCancel={onClose}
            direction="right"
        />
    );
};

export const BillFieldsForm = memo(BillFieldsFormBase);
