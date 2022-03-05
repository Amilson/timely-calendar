export function hasServiceAndHandlingProperties(context: any): boolean {
  return Object.prototype.hasOwnProperty.call(context, 'mainService');
}
