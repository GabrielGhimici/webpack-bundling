import { format, FormatType } from './formatter';

export function crDisplay(text: string) {
  return `${format('cr-module', FormatType.Start)}: ${format(text, FormatType.Capital)}`
}
