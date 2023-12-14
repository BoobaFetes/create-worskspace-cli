import { Command } from "commander";

export type CommandActionType = (
  this: Command,
  name: string,
  options: any,
  command: string
) => void;

export function isCommandActionType(
  something: CommandActionType | any
): something is CommandActionType {
  const fn = something as Function;
  return typeof fn === "function";
}
