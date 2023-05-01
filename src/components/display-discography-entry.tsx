export const DisplayDiscographyEntry = ({ date, title }: { date: string; title: string }) => (
    <div>
      <p className="text-gray-600 font-semibold text-sm">{date}</p>
      <p>{title}</p>
    </div>
  );