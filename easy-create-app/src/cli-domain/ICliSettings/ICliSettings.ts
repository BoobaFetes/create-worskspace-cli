import { CliSettingsCommand } from './CliSettingsCommand';

export interface ICliSettings {
  name: string;
  description: string;
  version: string;
  command: CliSettingsCommand;
}
