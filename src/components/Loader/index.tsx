const Loading = () => {
  return (
    <div className="flex fixed inset-0 z-50 items-center justify-center bg-opacity-50">
      <div
        className={
          "animate-spin rounded-full border-6 border-t-gray-300  text-white h-10 w-10"
        }
      />
    </div>
  );
};

export default Loading;
