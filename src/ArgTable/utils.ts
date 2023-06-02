const handleWidth = (width: string | number = '0%') => {
  if (typeof width === 'number') return width;
  if (typeof width === 'string') {
    const reg = /(\d+)(px|%|rem|vw|vh|vmin|vmax|em|ex|ch|cm|mm|in|pc|pt)?/;
    const match = width.match(reg);
    if (match) {
      const [, num, unit] = match;
      if (unit === 'px') return Number(num);
      if (unit === 'em') return Number(num) * 16;
      if (unit === 'rem') return Number(num) * 16;
      if (unit === '%') {
        if (Number(num)) return (100 * Number(num)) / 100;
        return '0%';
      }
      if (unit === 'vw') return (window.innerWidth * Number(num)) / 100;
      if (unit === 'vh') return (window.innerHeight * Number(num)) / 100;
      if (unit === 'ex') return Number(num) * 8;
      if (unit === 'ch') return Number(num) * 8;
      if (unit === 'pc') return Number(num) * 16;
      if (unit === 'in') return Number(num) * 96;
      if (unit === 'pt') return (Number(num) * 96) / 72;
      if (unit === 'cm') return (Number(num) * 96) / 2.54;
      if (unit === 'mm') return (Number(num) * 96) / 25.4;
      if (unit === 'vmin')
        return (Math.min(window.innerWidth, window.innerHeight) * Number(num)) / 100;
      if (unit === 'vmax')
        return (Math.max(window.innerWidth, window.innerHeight) * Number(num)) / 100;
      return Number(num);
    }
  }
  return 100;
};
export { handleWidth };
