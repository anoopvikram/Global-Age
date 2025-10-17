export function TestimonialCard({ rating = 5, text, author }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 min-h-[300px]  h-full">
      {/* stars */}
      <div className="flex gap-2">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-yellow-300 text-xl">★</span>
        ))}
      </div>

      <hr className="border-t border-gray-200" />

      {/* quote */}
      <p className="text-gray-500 italic leading-relaxed flex-1">
        “{text}”
      </p>

      {/* author */}
      <div className="text-black font-medium">
        {author}
      </div>
    </div>
  );
}
