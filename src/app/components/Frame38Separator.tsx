"use client";

// N7 asterisk mark SVG (matches Frame 38 separator graphics)
function AsteriskMark({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden="true">
      <line x1="9" y1="1" x2="9" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="1" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="3" y1="3" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="15" y1="3" x2="3" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

const tickerContent = [
  { type: "mark" },
  { type: "text", value: "N7", blue: true },
  { type: "mark" },
  { type: "text", value: "Say 👋 to the new way of banking" },
  { type: "mark" },
  { type: "text", value: "CB7", blue: true },
  { type: "mark" },
  { type: "text", value: "Say 👋 to the new way of banking" },
];

const doubled = [...tickerContent, ...tickerContent];

export default function Frame38Separator() {
  return (
    <div className="bg-white border-y border-gray-100 py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap items-center gap-0">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            {item.type === "mark" ? (
              <AsteriskMark className="mx-5 text-gray-300 flex-shrink-0" />
            ) : (
              <span className={`text-sm font-bold tracking-wide px-4 ${item.blue ? "text-blue-500" : "text-gray-900"}`}>
                {item.value}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
