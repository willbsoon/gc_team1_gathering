export interface AlertDialogOption {
  title?: string;
  content: string;
  okString?: string;
  backPageNum?: number;
  restoreFocus?: boolean;
  cssString?: string;

  link?: string;
  linkDescription?: string;

  redirect?: boolean;
}
