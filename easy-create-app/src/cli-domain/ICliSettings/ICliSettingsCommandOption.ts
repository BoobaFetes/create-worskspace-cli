export interface ICliSettingsCommandOption {
  flags: string;
  description?: string | undefined;
  defaultValue?: string | boolean | string[] | undefined;
}
