import { SavedTrack } from 'spotify-types';

const apiToken: string =
  'BQD73JXKLjwVBOqAfFUE1U8u6APZ4W9d6oC6j_r5dJy_4H4kuSOXZPIryD1bI6toFMWEF3MMJP6ZCBdDSPBNW96DiCeaFjUJOstLpSJi4eX8zPuOaDT07BSedYClEHwyckwi-8Xyr8j0_Vgj4fpJ2Im0MOHX4_SsLJfel4RxF4V1X6hIQXvqXPRjYKerRjoW5WVj49cbUaFPB90SBnxZTvtONW3EafY2VKqzE9H9jvifGZUCeoZ8QxRST1sRouYI4YB308awenMPTsD7FstEbPTQs9EWnU_8Y_dwCvs3e56E_wPRBP24l7KOwqIxQjGqztRtZZ-Zn4QWBbXB5ztR7CXU';

export const fetchTracks = async (): SavedTrack => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};
