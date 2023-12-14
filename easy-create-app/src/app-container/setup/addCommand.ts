import { Command } from "commander";
import {
  ActionByCommandType,
  isCommandActionType,
} from "../../cli-application/command";
import { ICliSettingsCommand } from "../../cli-domain";

export function addCommand(
  container: Command,
  name: string,
  current: ICliSettingsCommand,
  action?: ActionByCommandType
) {
  const command = new Command(name);
  container.addCommand(command);

  const { description, argument, options } = current;

  command.description(description || "");

  if (argument) {
    command.argument(
      argument.name,
      argument.description,
      argument.defaultValue
    );
  }
  options?.forEach((o) =>
    command.option(o.flags, o.description, o.defaultValue)
  );
  const _action = action?.[name] as ActionByCommandType | undefined;
  if (isCommandActionType(_action)) {
    command.action(_action);
  }

  const commands = current.commands as Record<string, ICliSettingsCommand>;
  for (const subCommandName in commands) {
    const _subCommandName = subCommandName as keyof Record<
      string,
      ICliSettingsCommand
    >;

    addCommand(command, subCommandName, commands[_subCommandName], _action);
  }
}
