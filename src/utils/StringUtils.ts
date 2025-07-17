export function formatDate(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

type ColortType = 'bg' | 'text';

export const getRandomColor = (text: string, type: ColortType = 'text') => {
  let hash = 0;
  const iterationLength = type === 'bg' ? text.length : text.length - 1; // Adjust based on type
  for (let i = 0; i < iterationLength; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).slice(-2);
  }
  return color;
};
