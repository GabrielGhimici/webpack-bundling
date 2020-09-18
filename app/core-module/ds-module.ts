import { format, FormatType } from './formatter';

export function dsDisplay(text: string) {
  return `${format('ds-module', FormatType.Start)}: ${format(text, FormatType.Camel)}`
}
