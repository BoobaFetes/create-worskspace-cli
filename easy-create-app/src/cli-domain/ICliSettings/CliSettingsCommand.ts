import { ActionNames } from "../ActionName";
import { ICliSettingsCommandItem } from "./ICliSettingsCommandItem";

export type CliSettingsCommand = Record<ActionNames, ICliSettingsCommandItem>;
