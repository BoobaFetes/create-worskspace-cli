import path from "path";
import { JsonFile } from "./JsonFile";
import { JsonSchemaFile } from "./JsonSchemaFile";

const registry = {
  ".schema": (fullpath: string) => new JsonSchemaFile(fullpath),
  ".json": (fullpath: string) => new JsonFile(fullpath),
};

export const FileInstanceByExtention = (fullpath: string) => {
  const extension = path.extname(fullpath) as keyof typeof registry;
  return registry[extension]?.(fullpath);
};
