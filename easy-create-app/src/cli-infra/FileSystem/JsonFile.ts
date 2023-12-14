import { FileBase } from "./FileBase";
import { JsonSchemaFile } from "./JsonSchemaFile";
import { JsonValidationResult } from "./JsonValidationResult";

export class JsonFile extends FileBase {
  public async validate(schema: JsonSchemaFile): Promise<JsonValidationResult> {
    this.resetErrors();

    const result = await schema.validate(this);
    result.errors.forEach((error) => this.errors.push(error));

    return result;
  }
}
