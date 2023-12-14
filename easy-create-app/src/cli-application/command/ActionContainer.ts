import { CommandActionType } from "./CommandActionType";

export type ActionContainer = Record<string, CommandActionType>;

export function isActionContainer(
  something: CommandActionType | any
): something is ActionContainer {
  return !!Object.keys(something).length;
}
