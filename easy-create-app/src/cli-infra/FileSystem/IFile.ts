export interface IFile {
  readonly errors: Error[];
  readonly fullpath: string;
  readonly name: string;
  readonly extension: string;

  read(): Promise<string | null>;
  append(value: string): Promise<boolean>;
  write(value: string): Promise<boolean>;
}
