export interface IAlertDialogErrorProvider {
  alertDialogError: (
    header: string,
    alertMessage: string,
    buttonMessage: string
  ) => void;
}
