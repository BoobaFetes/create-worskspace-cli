import { Command } from "commander";
import { ICliSettings } from "../../cli-domain";
import { Commands } from "./Commands";
import { Program } from "./Program";

export const setup = (cli: Command, settings: ICliSettings) => {
  Program(cli, settings);
  Commands(cli, settings);
};
