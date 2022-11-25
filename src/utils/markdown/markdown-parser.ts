import { MarkdownParserString } from './markdown-parser-to-string';
export class MarkdownParser {
  static Parse = async (input: string): Promise<string> => {
    return await MarkdownParserString.Parse(input);
  }
}
