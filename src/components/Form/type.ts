export interface FormType {
    firstName: string;
    lastName: string;
    description: string;
    country: number;
    notificationType: number[];
    notficationPush: number;
    files: FileList | null;
  }