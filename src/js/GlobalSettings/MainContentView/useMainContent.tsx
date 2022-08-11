import * as React from 'react';
import { IUseMainContent, MainContent } from '../../types/Types';



export const DEFAULT_MAIN_CONTENT_VALUE: MainContent = 'wallet';



export default function useMainContent(): IUseMainContent {

    const [mainContent, setMainContent] = React.useState<MainContent>(DEFAULT_MAIN_CONTENT_VALUE);

    return {mainContent, setMainContent};
}