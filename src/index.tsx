import React from 'react';
import { enableLocalization, registerComponent } from './uxp';
import { IContextProvider } from 'uxp/components';
import { BillsView } from './views/bills/BillsView';
import './global.scss';


export interface BaseUXProps {
    uxpContext?: IContextProvider;
    isPreview?: boolean;
    [key: string]: any; // configured props from the settings panel are passed here
}


/**
 * Energy Bill Recording — object search of uploaded bills.
 * Upload dialog, details panel and the edit form are all driven from this view via URL params.
 */
const Ebr: React.FunctionComponent<BaseUXProps> = (_props: BaseUXProps) => {
    return <BillsView />;
};


registerComponent({
    id: "ebr",
    component: Ebr,
    configs: {
        props: []
    },
    defaultProps: {}
});


enableLocalization();
