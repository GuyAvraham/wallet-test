import * as React from 'react';
import { GlobalSettingsContext } from './GlobalSettingsProvider';



export default function useGlobalSettings() {

    const globalSettings = React.useContext(GlobalSettingsContext)

    if(globalSettings === undefined) throw new Error('useGlobalSettings must be used within a GlobalSettingsProvider');

    return globalSettings;
}