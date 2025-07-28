import React from 'react';

interface VideoEmbedProps {
  src: string;
  title: string;
}

export const VideoEmbed: React.FC<VideoEmbedProps> = ({ src, title }) => (
  <div className="aspect-video w-full">
    <iframe
      src={src}
      title={title}
      className="h-full w-full rounded-2xl"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
); 