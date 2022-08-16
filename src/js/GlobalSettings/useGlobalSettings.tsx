import * as React from "react";
import { DEFAULT_GLOBAL_SETTINGS_CONTEXT_VALUE, GlobalSettingsContext } from "./GlobalSettingsProvider";

export default function useGlobalSettings() {
  const globalSettings = React.useContext(GlobalSettingsContext);

  if (!globalSettings) {
    console.error("useGlobalSettings must be used within a GlobalSettingsProvider");
    return DEFAULT_GLOBAL_SETTINGS_CONTEXT_VALUE;
  }

  return globalSettings;
}
