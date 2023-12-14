import { CliSettingsRootCommands } from "./CliSettingsRootCommands";

export interface ICliSettings {
  name: string;
  description: string;
  version: string;
  commands: CliSettingsRootCommands;
}
