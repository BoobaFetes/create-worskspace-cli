import { Command } from "commander";
import { ICliSettings } from "../../cli-domain";

export const Program = (cli: Command, settings: ICliSettings) => {
  cli
    .name(settings.name)
    .version(settings.version)
    .description(settings.description);
};
