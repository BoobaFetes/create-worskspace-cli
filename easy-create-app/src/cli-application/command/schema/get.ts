import { Command } from "commander";
import { CommandActionType } from "../CommandActionType";

function _get(this: Command, name: string, options: any, command: string) {
  console.log(`${name} is executed`);
  console.dir(options);
  console.log(command);
}

export const get: CommandActionType = _get;
