import { Command } from "commander";
import { ActionByCommandType } from "../../cli-application";
import { ICliSettings, ICliSettingsCommand } from "../../cli-domain";
import { addCommand } from "./addCommand";

export const Commands = (
  cli: Command,
  settings: ICliSettings,
  action: ActionByCommandType
) => {
  for (const name in settings.commands) {
    const _name = name as keyof ICliSettings["commands"];
    const current = settings.commands[_name] as ICliSettingsCommand;

    addCommand(cli, name, current, action);
  }
};
