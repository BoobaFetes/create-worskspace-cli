import fsPromises from "node:fs/promises";
import path from "node:path";
import * as prettier from "prettier";
import { IFile } from "./IFile";

export abstract class FileBase implements IFile {
  private encoding: BufferEncoding;

  private _errors: Error[] = [];
  public get errors(): Error[] {
    return this._errors;
  }

  public readonly fullpath: string;
  public readonly name: string;
  public readonly extension: string;

  constructor(fullpath: string, encoding: BufferEncoding = "utf-8") {
    this.fullpath = fullpath;
    this.name = path.basename(this.fullpath);
    this.extension = path.extname(this.fullpath);
    this.encoding = encoding;
  }

  public resetErrors(): void {
    this._errors = [];
  }

  public addErrors(errors: Array<Error | unknown>): void {
    this._errors.push(...(errors as Error[]));
  }

  public addError(error: Error | unknown): void {
    this._errors.push(error as Error);
  }

  public async read(): Promise<string | null> {
    try {
      this.resetErrors();

      const data = await fsPromises.readFile(this.fullpath, {
        encoding: this.encoding,
      });

      return data;
    } catch (error) {
      this.addError(error);
    }

    return null;
  }

  public async append(value: string): Promise<boolean> {
    try {
      this.resetErrors();

      await fsPromises.appendFile(this.fullpath, value, {
        encoding: this.encoding,
      });

      if (!(await prettier.check(this.fullpath))) {
        prettier.format(this.fullpath);
      }

      return true;
    } catch (error) {
      this.addError(error);
    }

    return false;
  }

  public async write(value: string): Promise<boolean> {
    try {
      this.resetErrors();

      if (!(await prettier.check(this.fullpath))) {
        prettier.format(this.fullpath);
      }

      await fsPromises.writeFile(this.fullpath, value, {
        encoding: this.encoding,
      });

      return true;
    } catch (error) {
      this.addError(error);
    }

    return false;
  }
}
