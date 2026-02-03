import config from '../../config';

export const getAllBlogs = async () => {
  try {
    const response = await fetch(`${config.BLOGS_API_URL}/blogs`);
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    const data = await response.json();
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error('Error fetching blogs:', error);
  }
};

// TODO: Integrate news section in the UI
export const getAllNews = async () => {
  try {
    const response = await fetch(`${config.BLOGS_API_URL}/news`);
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    const data = await response.json();
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error('Error fetching blogs:', error);
  }
};
