import { Command, flags } from "@oclif/command";
const copy = require("copy-template-dir");
const path = require("path");

export default class New extends Command {
  static description = "Generate a new Terra dapp.";

    static examples = [
      `$ rover new my-terra-project
  `,
    ]

  static flags = {
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ 
    name: 'file', 
    required: true,
    description: 'Output directory for new project.',
  }];

  async run() {
    const { args, flags } = this.parse(New);

    const vars = { name: args.file };
    const inDir = path.join(__dirname, "..", "..", "template");
    const outDir = path.join(process.cwd(), args.file);

    copy(inDir, outDir, vars, (err: string | null, createdFiles: string[]) => {
      if (err) throw err;
      createdFiles.forEach((filePath) => this.log(`Created ${filePath}`));
      this.log("done!");
    });
  }
}
