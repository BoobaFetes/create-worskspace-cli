import { Command } from "commander";
import { ActionByCommandType } from "../../cli-application";
import { ICliSettings } from "../../cli-domain";
import { Commands } from "./Commands";
import { Program } from "./Program";

export const setup = (
  cli: Command,
  settings: ICliSettings,
  action: ActionByCommandType
) => {
  Program(cli, settings);
  Commands(cli, settings, action);
};
