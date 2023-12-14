import { ICliSettingsCommandArgument } from "./ICliSettingsCommandArgument";
import { ICliSettingsCommandOption } from "./ICliSettingsCommandOption";

export interface ICliSettingsCommand<
  TCommands extends Record<string, ICliSettingsCommand> = {}
> {
  description?: string;
  argument?: ICliSettingsCommandArgument;
  options?: ICliSettingsCommandOption[];
  commands?: TCommands;
}
