import { SavedTrack } from 'spotify-types';

const apiToken: string =
  'BQDnohYXiFxgtBWlGon2Dx-NPKUNR3Q1_vi-mEC6dC_4H2KXMhths8ph0VvTMWA0nT9TtZiWKVA5oLbdqNBM9iAexxROkoxLUs89Z-W8lC6-edc4iC6ohoxr67OvBpXhfKj3SGeoB1fLszbxvQu18LXSUp8tQWR2pH5JIIv2-PGTIyzjw_YPmOoH_8v7f-VwZ8sYl2VPj6E7WIIO4IxSjWkZTrMvDsrPVtUCL32kKShQqvvDt_3RIhPT9Xp7jh4rZukBi7YSHX0_5asgQSP9W0R58dJWZvkTJ_uDem1FIl-nKDwqpqT23AG8qCuZ4Z5PynfojlDmHwcWz23HHBfulMOI';

export const fetchTracks = async (): Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
