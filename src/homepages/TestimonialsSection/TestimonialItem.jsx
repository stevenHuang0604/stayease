function TestimonialItem({ name, feedback, title, avatar }) {
  return (
    <div className="rounded-xl border-2 border-solid border-slate-200 bg-slate-50 p-6 transition-all duration-200 hover:border-violet-200 hover:shadow-xl">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-start gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <img src={avatar} className="w-fill h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center gap-[2px]">
            <h4 className="text-lg font-bold">{name}</h4>
            <span className="text-xs text-slate-400">{title}</span>
          </div>
        </div>
        <div className="text-sm text-slate-600">{feedback}</div>
      </div>
    </div>
  );
}

export default TestimonialItem;
