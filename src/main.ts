import { ILanguageSpecificFormatter } from "./lib/ILanguageSpecificFormatter";
import { FormattingManager } from "./lib/FormattingManager";
import { JavaScriptFormatter } from "./lib/JavaScriptFormatter";
import * as $ from "jquery";

const formatters: ILanguageSpecificFormatter[] = [
  new JavaScriptFormatter(),
  // others, as added
];
const formattingManager = new FormattingManager(formatters);

formattingManager.insertAllDependenciesIntoDocument();
formattingManager.formatAllLanguages();
