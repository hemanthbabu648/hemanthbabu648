import config from '../../config';

export const getAllProjects = async () => {
  try {
    const response = await fetch(`${config.APPS_API_URL}/projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error('Error fetching projects:', error);
  }
};
