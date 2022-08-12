import * as React from 'react';
import { MetamaskContext } from './MetamaskProvider';



export default function useMetamask() {

    const metamask = React.useContext(MetamaskContext)

    if(metamask === undefined) throw new Error('useMetamask must be used within a MetamaskProvider');
    
    return metamask;
}