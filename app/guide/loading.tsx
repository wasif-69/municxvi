const Loading = () => {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#061222]">
        <div className="flex flex-col items-center gap-6">
  
          {/* Spinner */}
          <div
            className="
              h-14
              w-14
              rounded-full
              border-2
              border-[#C9A227]/20
              border-t-[#C9A227]
              animate-spin
            "
          />
  
          {/* Text */}
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
            Loading
          </p>
  
        </div>
      </main>
    );
  };
  
  export default Loading;