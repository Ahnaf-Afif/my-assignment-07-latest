const statusColor = {
  Overdue: "bg-[#FF4D4F] text-white",
  "Almost Due": "bg-[#F6B94C] text-white",
  "On Track": "bg-[#244D3F] text-white",
  "Need Attention": "bg-[#FF4D4F] text-white",
};

const CardUi = ({ friend }) => {
  return (
    <div className="w-full max-w-45.5 rounded-xl border border-[#E9E9E9] bg-white px-6 py-4 cursor-pointer">
      <div className="flex flex-col items-center text-center">
        <img
          src={friend.avatar}
          alt={friend.name}
          className="mb-3 h-14 w-14 rounded-full object-cover"
        />

        <h3 className="text-[15px] font-semibold  text-[#1E293B]">
          {friend.name}
        </h3>

        <p className="mt-1 text-[11px] font-medium text-[#94A3B8]">
          {friend.lastContactDaysAgo}d ago
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-1">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#DCFCE7] px-2 py-0.5 text-[9px] font-medium uppercase  text-[#5F8F71]"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className={`mt-2 rounded-full px-2 py-0.75 text-[9px] font-medium ${
            statusColor[friend.status]
          }`}
        >
          {friend.status}
        </span>
      </div>
    </div>
  );
};

export default CardUi;
