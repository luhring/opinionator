import { ILanguageSpecificFormatter } from "./ILanguageSpecificFormatter";
import * as prettier from "prettier";
import * as highlight from "highlight.js";

export class JavaScriptFormatter implements ILanguageSpecificFormatter {
  public readonly cssSelectorItems: string[] = [
    "div.language-javascript > pre > code",
    "div.highlight-source-js > pre",
    "pre > code.javascript",
    "pre.javascript > code"
  ];

  public readonly languageName: string = "JavaScript";

  public format(unformattedCode: string) {
    const prettierOutput = prettier.format(unformattedCode);
    const trimmedOutput = prettierOutput.trim();
    const formattedCode = highlight.highlight("JavaScript", trimmedOutput).value;

    return formattedCode;
  }
}
