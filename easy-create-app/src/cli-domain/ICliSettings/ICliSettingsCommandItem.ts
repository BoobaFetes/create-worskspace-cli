import { ICliSettingsCommandArgument } from './ICliSettingsCommandArgument';
import { ICliSettingsCommandOption } from './ICliSettingsCommandOption';

export interface ICliSettingsCommandItem {
  argument?: ICliSettingsCommandArgument;
  options?: ICliSettingsCommandOption[];
}
