export interface ILanguageSpecificFormatter {
  readonly cssSelectorItems: string[];
  readonly languageName: string;
  format: (unformattedCode: string) => string;
}
