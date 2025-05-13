function FeatursBox({ indx, arr, scroll }) {

  return (
    <div
      className="w-full h-auto flex gap-x-2 transition duration-200 ease-in-out overflow-x-scroll snap-x snap-mandatory"
      ref={scroll}
    >
      {arr.map((_, index) => (
        <div
          className="sm:w-2/6 w-full h-auto border-2 border-primary overflow-hidden shrink-0"
          key={index}
        >
          <i className="ri-graduation-cap-line text-3xl bg-primary rounded-br-lg w-12 h-12 flex justify-center items-center text-white"></i>
          <div className="space-y-2 px-2 mt-2 pb-3">
            <h2 className="text-xl font-semibold text-primary self-center">
              100 students trained
            </h2>
            <p className="text-md text-black">
              We have successfully trained over 100 students, equipping them
              with vital computer skills for the modern workforce.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatursBox;
