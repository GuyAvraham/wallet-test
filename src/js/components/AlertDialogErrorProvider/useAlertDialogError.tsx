import * as React from "react";
import { AlertDialogContext } from "./AlertDialogErrorProvider";

export default function useAlertDialogError() {
  const alertDialogError = React.useContext(AlertDialogContext);

  if (alertDialogError === undefined)
    throw new Error(
      "useAlertDialogError must be used within a AlertDialogErrorProvider"
    );

  return alertDialogError;
}
