const App = () => {
  return (
    <main className="bg-primary-blue min-h-[100vh] flex justify-center items-center">
      <div className="border rounded-3xl max-w-xs bg-primary-white">
        <div className="px-5 pt-5">
          <img
            src="../images/image-qr-code.png"
            alt="qr code"
            className="rounded-xl"
          />
        </div>
        <h1 className="text-2xl text-center text-primary-darkBlue font-outfit font-bold pt-4 px-2">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-center text-primary-grayishBlue font-outfit pt-3 pb-9 px-6">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </main>
  );
};

export default App;
