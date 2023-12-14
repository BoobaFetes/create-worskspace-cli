import { CliSettingsSchemaCommands } from "./CliSettingsSchemaCommands";
import { ICliSettingsCommand } from "./ICliSettingsCommand";

export type CliSettingsRootCommands = {
  schema: ICliSettingsCommand<CliSettingsSchemaCommands>;
  create: ICliSettingsCommand;
  update: ICliSettingsCommand;
};
