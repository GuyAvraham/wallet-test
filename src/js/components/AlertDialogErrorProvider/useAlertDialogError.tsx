import * as React from "react";
import { AlertDialogContext, DEFAULT_ALERT_DIALOG_CONTEXT_VALUE } from "./AlertDialogErrorProvider";

export default function useAlertDialogError() {
  const alertDialogError = React.useContext(AlertDialogContext);

  if (!alertDialogError) {
    console.error(
      "useAlertDialogError must be used within a AlertDialogErrorProvider"
    );
    return DEFAULT_ALERT_DIALOG_CONTEXT_VALUE;
  }

  return alertDialogError;
}
