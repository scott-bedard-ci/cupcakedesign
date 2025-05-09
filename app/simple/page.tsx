export default function SimplePage() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-xl md:text-2xl font-bold mb-4">Cupcake Alert</h1>

      <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 border border-[#da1e28] bg-[#da1e28]/10 rounded-md text-black max-w-md">
        <div className="flex-shrink-0">
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#da1e28] flex items-center justify-center text-white">
            <span className="font-bold text-xs md:text-sm">!</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-semibold">Title</h3>
          <p className="mt-1 text-sm md:text-base">Alert message</p>
        </div>
        <button className="flex-shrink-0 text-black hover:text-[#da1e28] transition-colors" aria-label="Close alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:w-5 md:h-5"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  )
}
