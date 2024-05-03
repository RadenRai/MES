import TemplatePointers from "./components/TemplatePointers";

function LandingIntro() {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200 flex justify-center items-center">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <div className="text-center mt-12">
            <img src="./LRS.jpeg" alt="Dashwind Admin Template" className="w-48 inline-block" />
          </div>
          
          {/* Importing pointers component */}
          <TemplatePointers />
          
        </div>
      </div>
    </div>
  );
}

export default LandingIntro;
