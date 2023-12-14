import { Command } from "commander";
import { CommandActionType } from "../CommandActionType";

function _validate(this: Command, name: string, options: any, command: string) {
  console.log(`${name} is executed`);
  console.dir(options);
  console.log(command);
}

export const validate: CommandActionType = _validate;
