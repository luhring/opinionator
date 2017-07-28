import { ILanguageSpecificFormatter } from "./ILanguageSpecificFormatter";
import * as $ from "jquery";

export class FormattingManager {
  private readonly languageSpecificFormattersToApply: ILanguageSpecificFormatter[];

  private formatCodeForElement(element: HTMLElement, formatter: ILanguageSpecificFormatter): void {
    const unformattedCode = $(element).text();
    let formattedCode;

    try {
      formattedCode = formatter.format(unformattedCode);
    } catch (formattingError) {
      console.log("Unable to opinionate " + formatter.languageName + " selection...\n", unformattedCode);
      console.log("...because...\n", formattingError);
      return;
    }

    $(element).html(formattedCode);
  };

  private insertHighlightStylesIntoDocument(styleName = "github"): void {
    $("<link/>", {
      rel: "stylesheet",
      type: "text/css",
      href: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/" + styleName + ".min.css"
    }).appendTo("head");
  }

  private assembleCssSelectorStringFromItems(formatter: ILanguageSpecificFormatter): string {
    return formatter.cssSelectorItems.join(", ");
  }

  constructor(languageSpecificFormattersToApply: ILanguageSpecificFormatter[]) {
    this.languageSpecificFormattersToApply = languageSpecificFormattersToApply;
  }

  public formatAllLanguages(): void {
    this.languageSpecificFormattersToApply.forEach((formatter) => {
      $(this.assembleCssSelectorStringFromItems(formatter)).each((index, htmlElment) => {
        this.formatCodeForElement(htmlElment, formatter);
      });
    });
  }

  public insertAllDependenciesIntoDocument(): void {
    this.insertHighlightStylesIntoDocument();
    // others, as added
  }
}
