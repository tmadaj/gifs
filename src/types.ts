type images =
  | '480w_still'
  | 'downsized'
  | 'downsized_large'
  | 'downsized_medium'
  | 'downsized_small'
  | 'downsized_still'
  | 'fixed_height'
  | 'fixed_height_downsampled'
  | 'fixed_height_small'
  | 'fixed_height_small_still'
  | 'fixed_height_still'
  | 'fixed_width'
  | 'fixed_width_downsampled'
  | 'fixed_width_small'
  | 'fixed_width_small_still'
  | 'fixed_width_still'
  | 'looping'
  | 'original'
  | 'original_mp4'
  | 'original_still'
  | 'preview'
  | 'preview_gif'
  | 'preview_webp';

export interface IGiphyImage {
  frames?: string;
  hash?: string;
  height: string;
  mp4?: string;
  mp4_size?: string;
  size?: string;
  url?: string;
  webp?: string;
  webp_size?: string;
  width: string;
}

export type TGiphyImages = Record<images, IGiphyImage>;

export interface IGiphyResult {
  alt_text: string;
  id: string;
  images: TGiphyImages;
  url: string;
}

export interface IGiphyPagination {
  count: number;
  offset: number;
  total_count: number;
}
