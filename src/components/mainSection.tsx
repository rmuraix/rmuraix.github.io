import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faGithub);

function MainSection() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="w-screen pt-4 text-center text-6xl text-black">
          Ryota<span className="font-bold">Murai</span>
        </h1>
        <p className="pb-4 pt-2">University Student</p>
        <button className="inline-flex items-center rounded bg-black px-4 py-2 text-gray-50 hover:bg-gray-800">
          <a href="https://github.com/rmuraix">
            <FontAwesomeIcon icon={faGithub} color="white" size="lg" />
            <span className="pl-1">GitHub | @rmuraix</span>
          </a>
        </button>
      </div>
    </>
  );
}
export default MainSection;
