export interface FormData {
  email: string;
  name: string;
  subject: string;
  message: string;
}

export interface FormInputProps {
  label: string;
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormTextAreaProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface FormButtonProps {
  label: string;
  type: "button" | "submit" | "reset" | undefined;
}
