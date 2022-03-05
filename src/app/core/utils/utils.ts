export function persistNullEmptyUndefined(tp: any): boolean {
  return tp !== null && tp !== undefined && tp !== '';
}

export function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function getRandomColorOpacity(opacity = 0.5) {
  let color = '';
  for (let i = 0; i < 3; i += 1) {
    color += `${Math.floor(Math.random() * 255)},`;
  }
  return `rgba(${color}${opacity})`;
}

export function getRandomString(len: number, charSet?: string): string {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  const randomString: string = new Array(len)
    .fill('1')
    .map(() => {
      return charSet.charAt(Math.floor(Math.random() * charSet.length));
    })
    .join('');
  return randomString;
}
