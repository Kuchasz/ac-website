export const getYoutubeId = (videoUrl: string) => {
    return videoUrl.split("/").slice(-1)[0]!;
};

export const getThumbByVideoUrl = (videoUrl: string) => {
    const id = videoUrl.split("/").slice(-1)[0]!;
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};