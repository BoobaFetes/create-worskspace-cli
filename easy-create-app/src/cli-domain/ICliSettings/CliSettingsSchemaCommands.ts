import { ICliSettingsCommand } from "./ICliSettingsCommand";

export type CliSettingsSchemaCommands = {
  get: ICliSettingsCommand;
  validate: ICliSettingsCommand;
};
