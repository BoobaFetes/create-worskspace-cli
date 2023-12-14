import { ValidatorResult } from "jsonschema";

export type JsonValidationResult = Pick<
  ValidatorResult,
  "errors" | "throwError" | "valid" | "schema" | "toString"
>;
