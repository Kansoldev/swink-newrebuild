const GenerateSwinkID = ({
  username,
  currentStep,
  generateIDModal,
  formErrors,
  onClose,
  onSubmit,
  onReset,
  onUpdate,
}) => {
  return (
    <div
      className={`${
        generateIDModal ? "flex" : "hidden"
      } items-center justify-center bg-[#1e1331c9] p-5 fixed top-0 right-0 bottom-0 left-0 z-[9999px]`}
      onClick={onClose}
    >
      <div
        className="fixed bg-white md:w-[450px] m-5 px-6 sm:px-8 pt-10 pb-5 rounded-2xl overflow-hidden z-[9999px] flex flex-col justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {currentStep === 1 && (
          <>
            <h2 className="font-bold text-xl min-[400px]:text-2xl text-center">
              Choose Your Swink ID
            </h2>

            <p className="text-center mt-5 text-gray-700">
              Pick a unique username that will be yours forever
            </p>

            <form onSubmit={onSubmit} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  placeholder="min 5 characters"
                  value={username}
                  onChange={onUpdate}
                  className="bg-gray-200 rounded-2xl w-full px-4 py-3 mt-4"
                />

                <span className="inline-block text-center text-[#ed3548] font-semibold text-sm absolute top-[4.2rem] left-1">
                  {formErrors.username}
                </span>

                <span className="absolute top-7 bottom-0 right-4 left-auto">
                  .swink
                </span>
              </div>

              <button
                type="submit"
                className="bg-[#9639F6] hover:bg-blue-600 text-white text-lg rounded-xl px-5 py-2 mt-9 w-full transition-colors"
              >
                Reserve unique ID
              </button>
            </form>
          </>
        )}

        {currentStep === 2 && (
          <>
            <h2 className="font-bold text-xl min-[400px]:text-2xl text-center">
              You've secured your SWINK ID!
            </h2>

            <p className="text-center mt-5 text-gray-700">
              You are now {`${username}.swink`}
            </p>

            <button
              className="bg-[#9639F6] hover:bg-blue-600 text-white text-center rounded-xl px-5 py-3 mt-7 w-full transition-colors"
              onClick={onReset}
            >
              Back to Swink
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default GenerateSwinkID;
