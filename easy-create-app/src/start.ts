import { Command } from "commander";
import figlet from "figlet";
import { setup } from "./app-container";
import { ICliSettings } from "./cli-domain";

export const start = (settings: ICliSettings) => {
  const program = new Command();

  console.log(figlet.textSync(settings.name.split("-").join(" "), "Calvin S"));
  console.log();

  setup(program, settings);

  if (!process.argv.slice(2).length) {
    program.outputHelp();
    return;
  }

  program.parse(process.argv);

  const options = program.opts();
  console.dir(options);
};
