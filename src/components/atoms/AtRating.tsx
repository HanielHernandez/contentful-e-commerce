export interface AtRatingPorps {
  rating: number;
  id: string;
}

export const AtRating = ({ rating, id }: AtRatingPorps) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;

  return (
    <div className="flex items-center  space-x-1 text-yellow-500">
      {[...Array(fullStars)].map((_, index) => (
        <span key={`${id}-fullstars-${index}`} className="material-icons">
          star
        </span>
      ))}
      {hasHalfStar && <span className="material-icons">star_half</span>}
      {[...Array(5 - Math.ceil(roundedRating))].map((_, index) => (
        <span
          key={`${id}-${index + fullStars + 1}`}
          className="material-icons text-neutral-300"
        >
          star
        </span>
      ))}
    </div>
  );
};
