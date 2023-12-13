const Loader = () => {
  return (
    <div className="w-fit h-fit relative">
      <div
        className="z-0  bg-btn-gradient rounded-full contrast-200 blur-[8px] w-14 h-14 animate-spin"
        style={{
          animationDuration: '0.25s',
        }}
      ></div>
      <div className="absolute position-center bg-neutral-800 rounded-full w-8 h-8 z-10"></div>
    </div>
  );
};

export default Loader;
