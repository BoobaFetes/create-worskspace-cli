import { ActionContainer } from "./ActionContainer";
import { CommandActionType } from "./CommandActionType";

export type ActionByCommandType = Record<
  string,
  ActionContainer | CommandActionType
>;
