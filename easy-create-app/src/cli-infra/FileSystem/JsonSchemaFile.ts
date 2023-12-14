import { Schema, Validator } from "jsonschema";
import { FileBase } from "./FileBase";
import { JsonFile } from "./JsonFile";
import { JsonValidationResult } from "./JsonValidationResult";

export class JsonSchemaFile extends FileBase {
  private validator: Validator;

  private _schema: Schema | null = null;
  public get schema(): Schema | null {
    return this._schema;
  }

  constructor(fullpath: string, validator: Validator = new Validator()) {
    super(fullpath);
    this.validator = validator;
  }

  public addReferenceSchemas(references: Schema[]) {
    references.forEach((reference) => this.addReferenceSchema(reference));
  }

  public addReferenceSchema(reference: Schema) {
    this.validator.addSchema(reference);
  }

  public async loadSchema(): Promise<boolean> {
    if (this._schema) {
      return true;
    }
    try {
      const content = await this.read();
      this._schema = JSON.parse(content || "");
      return true;
    } catch (error) {
      this.addError(error);
    }
    return false;
  }

  public async validate(JsonFile: JsonFile): Promise<JsonValidationResult> {
    const result = this.validator.validate(JsonFile.fullpath, this.schema!);

    result.errors.forEach((error) => this.errors.push(error));

    return result;
  }
}
