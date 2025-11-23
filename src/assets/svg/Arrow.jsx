const Arrow = () => {
  return (
    <svg className="ml-5 fill-n-1 " width="24" height="24">
      {/* <path d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414z" /> */}
      <path className="hover:text-color-1 transition" d="M15.707 5.293a1 1 0 0 0-1.414 0L8.293 11.293a1 1 0 0 0 0 1.414l6 6a1 1 0 1 0 1.414-1.414L10.414 12l5.293-5.293a1 1 0 0 0 0-1.414z" />

    </svg>
  );
};

export default Arrow;
