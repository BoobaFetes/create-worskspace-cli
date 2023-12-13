import { Command } from "commander";
import { ICliSettings } from "../../cli-domain";

export const Commands = (cli: Command, settings: ICliSettings) => {
  for (const name in settings.command) {
    const _name = name as keyof ICliSettings["command"];

    const command = settings.command[_name];
    cli.command(_name);

    if (command.argument) {
      cli.argument(
        command.argument.name,
        command.argument.description,
        command.argument.defaultValue
      );
    }
    command.options?.forEach((o) =>
      cli.option(o.flags, o.description, o.defaultValue)
    );
  }
};
