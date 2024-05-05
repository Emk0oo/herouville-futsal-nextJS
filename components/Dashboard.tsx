import Image from "next/image";
import React from "react";

const nomDeMarque = "Herouville Futsal";

const Dashboard = () => {
  return (
    <main id="dashboard" className="w-full h-screen bg-slate-200 ">
      <aside id="sidebar" className="w-1/6 h-full bg-white">
        <div id="marque" className="flex flex-row px-5 items-center gap-2">
          <Image src="/logo.png" alt="logo" width={75} height={75} />
          <h1 className="text-xl font-bold text-bleuNuitHerouville">
            {nomDeMarque}
          </h1>
        </div>
        <div id="content" className="flex flex-col gap-4 p-4">
          <div id="menu" className="flex flex-col gap-4 p-4">
            <a
              href="#"
              className="flex flex-row items-center text-lg  border rounded-xl p-3 bg-indigo-500 text-white gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M17.5 2.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25V9.5a.75.75 0 0 1-1.5 0V7.25H14.5a.75.75 0 0 1 0-1.5h2.25V3.5a.75.75 0 0 1 .75-.75"
                  clip-rule="evenodd"
                />
                <path
                  fill="currentColor"
                  d="M2 6.5c0-2.121 0-3.182.659-3.841C3.318 2 4.379 2 6.5 2c2.121 0 3.182 0 3.841.659C11 3.318 11 4.379 11 6.5c0 2.121 0 3.182-.659 3.841C9.682 11 8.621 11 6.5 11c-2.121 0-3.182 0-3.841-.659C2 9.682 2 8.621 2 6.5m11 11c0-2.121 0-3.182.659-3.841C14.318 13 15.379 13 17.5 13c2.121 0 3.182 0 3.841.659c.659.659.659 1.72.659 3.841c0 2.121 0 3.182-.659 3.841c-.659.659-1.72.659-3.841.659c-2.121 0-3.182 0-3.841-.659C13 20.682 13 19.621 13 17.5m-11 0c0-2.121 0-3.182.659-3.841C3.318 13 4.379 13 6.5 13c2.121 0 3.182 0 3.841.659c.659.659.659 1.72.659 3.841c0 2.121 0 3.182-.659 3.841C9.682 22 8.621 22 6.5 22c-2.121 0-3.182 0-3.841-.659C2 20.682 2 19.621 2 17.5"
                />
              </svg>
              Tableau de bord
            </a>
            <a
              href="#"
              className="flex flex-row items-center text-lg text-slate-800  rounded-xl p-3 hover:bg-indigo-500 hover:text-white gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M11.943 1.25H13.5a.75.75 0 0 1 0 1.5H12c-2.378 0-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386v-1.5a.75.75 0 0 1 1.5 0v1.557c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m4.827 1.026a3.503 3.503 0 0 1 4.954 4.953l-6.648 6.649c-.371.37-.604.604-.863.806a5.34 5.34 0 0 1-.987.61c-.297.141-.61.245-1.107.411l-2.905.968a1.492 1.492 0 0 1-1.887-1.887l.968-2.905c.166-.498.27-.81.411-1.107c.167-.35.372-.68.61-.987c.202-.26.435-.492.806-.863zm3.893 1.06a2.003 2.003 0 0 0-2.832 0l-.376.377c.022.096.054.21.098.338c.143.413.415.957.927 1.469a3.875 3.875 0 0 0 1.807 1.025l.376-.376a2.003 2.003 0 0 0 0-2.832m-1.558 4.391a5.397 5.397 0 0 1-1.686-1.146a5.395 5.395 0 0 1-1.146-1.686L11.218 9.95c-.417.417-.58.582-.72.76a3.84 3.84 0 0 0-.437.71c-.098.203-.172.423-.359.982l-.431 1.295l1.032 1.033l1.295-.432c.56-.187.779-.261.983-.358c.251-.12.49-.267.71-.439c.177-.139.342-.302.759-.718z"
                  clip-rule="evenodd"
                />
              </svg>
              Actualités
            </a>
            <a
              href="#"
              className="flex flex-row items-center text-lg text-slate-800  rounded-xl p-3 hover:bg-indigo-500 hover:text-white gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                />
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.193-.013h4.113c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827c.26.02.506.045.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.945c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c.233-.031.48-.056.739-.076V2.5A.75.75 0 0 1 7 1.75M5.71 4.89c-1.005.135-1.585.389-2.008.812c-.423.423-.677 1.003-.812 2.009c-.023.17-.042.35-.058.539h18.336c-.016-.19-.035-.369-.058-.54c-.135-1.005-.389-1.585-.812-2.008c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14M2.75 12c0-.854 0-1.597.013-2.25h18.474c.013.653.013 1.396.013 2.25v2c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008c-.423.423-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14h-4c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812c-.423-.423-.677-1.003-.812-2.009c-.138-1.027-.14-2.382-.14-4.289z"
                  clip-rule="evenodd"
                />
              </svg>
              Calendrier
            </a>
            <a
              href="#"
              className="flex flex-row items-center text-lg text-slate-800  rounded-xl p-3 hover:bg-indigo-500 hover:text-white gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                />
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.254c.418-.004.868-.004 1.355-.004h1.79c.487 0 .938 0 1.355.004V5A2.25 2.25 0 0 0 12 2.75m3.75 2.557V5a3.75 3.75 0 0 0-7.5 0v.307c-.135.01-.265.021-.391.035c-.878.095-1.613.293-2.265.74a4.75 4.75 0 0 0-.63.516c-.566.552-.905 1.234-1.17 2.076c-.257.819-.465 1.859-.727 3.166l-.019.095c-.376 1.883-.673 3.367-.758 4.549c-.088 1.208.034 2.223.606 3.104c.191.294.414.565.664.81c.752.734 1.724 1.052 2.925 1.204c1.176.148 2.69.148 4.61.148h1.81c1.921 0 3.434 0 4.61-.148c1.201-.152 2.174-.47 2.925-1.204a4.75 4.75 0 0 0 .664-.81c.572-.88.694-1.896.607-3.104c-.086-1.182-.382-2.666-.76-4.549l-.018-.095c-.261-1.307-.47-2.347-.727-3.166c-.265-.842-.604-1.524-1.17-2.076a4.747 4.747 0 0 0-.63-.516c-.652-.447-1.387-.645-2.265-.74a11.401 11.401 0 0 0-.39-.035M8.02 6.833c-.747.08-1.208.233-1.578.486a3.25 3.25 0 0 0-.431.354c-.321.313-.56.735-.786 1.451c-.23.733-.424 1.693-.695 3.052c-.39 1.948-.667 3.34-.744 4.416c-.077 1.062.052 1.693.368 2.179c.13.2.283.387.454.554c.415.405 1.008.655 2.065.789c1.07.135 2.49.136 4.476.136h1.703c1.986 0 3.404-.001 4.475-.136c1.057-.134 1.65-.384 2.065-.789a3.25 3.25 0 0 0 .454-.554c.316-.486.445-1.117.369-2.18c-.078-1.076-.355-2.467-.744-4.415c-.272-1.359-.465-2.32-.696-3.052c-.225-.716-.465-1.138-.786-1.451a3.246 3.246 0 0 0-.43-.354c-.37-.253-.832-.405-1.579-.486c-.763-.082-1.743-.083-3.129-.083H11.15c-1.386 0-2.366.001-3.13.083"
                  clip-rule="evenodd"
                />
              </svg>
              Boutique
            </a>
            <a
              href="#"
              className="flex flex-row items-center text-lg text-slate-800  rounded-xl p-3 hover:bg-indigo-500 hover:text-white gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="m2.782 11.225l.396-.262c.594-.393.987-.654 1.265-.887c.264-.221.364-.369.416-.507c.052-.138.076-.315.025-.656c-.054-.36-.175-.815-.359-1.504l-.167-.625a9.205 9.205 0 0 0-1.576 4.44m2.75-5.84a.76.76 0 0 1 .024.074l.429 1.602c.17.638.315 1.177.382 1.631c.035.233.053.46.042.687l2.5 1.053a1.75 1.75 0 0 1 .18-.16l1.838-1.404c.098-.075.203-.139.312-.19v-2.71a3.527 3.527 0 0 1-.608-.284c-.398-.229-.847-.56-1.377-.952L7.876 3.715a9.263 9.263 0 0 0-2.344 1.67m4.007-2.306l.572.422c.573.423.953.702 1.268.883c.298.171.47.214.618.216c.147.001.32-.038.622-.203c.318-.174.704-.445 1.286-.855l.622-.438a9.233 9.233 0 0 0-2.538-.354a9.21 9.21 0 0 0-2.45.329m6.646.678a.756.756 0 0 1-.095.08l-1.354.954c-.54.38-.995.702-1.397.922c-.197.108-.396.2-.6.267v2.697c.108.052.213.116.311.191l1.837 1.405c.066.05.127.104.184.162l2.56-1.06c-.01-.225.008-.451.043-.683c.067-.454.212-.993.382-1.63l.429-1.602a.653.653 0 0 1 .008-.029a9.266 9.266 0 0 0-2.308-1.674m3.48 3.095l-.149.557c-.184.689-.305 1.145-.359 1.504c-.05.34-.027.518.025.656c.052.138.152.286.416.507c.278.233.67.494 1.265.887l.328.217a9.203 9.203 0 0 0-1.526-4.328m3.055 5.55c.004-.133.007-.267.007-.402c0-5.936-4.807-10.75-10.738-10.75C6.057 1.25 1.25 6.064 1.25 12s4.807 10.75 10.739 10.75c5.625 0 10.238-4.33 10.7-9.84a.749.749 0 0 0 .03-.508m-1.543.567L20 12.19c-.55-.363-1.016-.67-1.367-.966a3.56 3.56 0 0 1-.458-.452l-2.613 1.082a1.75 1.75 0 0 1-.067.324l-.721 2.337c-.026.082-.056.16-.092.236l1.468 1.698c.225-.075.46-.12.704-.148c.456-.052 1.014-.052 1.673-.052h1.668a9.17 9.17 0 0 0 .98-3.281m-1.951 4.781h-.656c-.713 0-1.184.001-1.544.042c-.341.04-.506.107-.625.194c-.12.086-.237.22-.382.533c-.153.33-.303.777-.528 1.453l-.226.68a9.263 9.263 0 0 0 3.96-2.902m-5.7 3.372l.555-1.663c.208-.627.385-1.156.578-1.572c.087-.187.183-.364.295-.528l-1.434-1.66a1.693 1.693 0 0 1-.416.051h-2.23c-.133 0-.263-.015-.388-.043L9.21 17.332c.12.171.222.357.313.555c.194.416.37.945.579 1.572l.565 1.697a9.294 9.294 0 0 0 2.86-.034m-4.58-.385l-.254-.765c-.226-.676-.376-1.124-.529-1.453c-.145-.312-.262-.447-.381-.533c-.12-.087-.284-.155-.625-.194c-.36-.04-.832-.042-1.544-.042H4.75a9.258 9.258 0 0 0 4.195 2.987m-5.15-4.46a.752.752 0 0 1 .202-.027h1.656c.66 0 1.217 0 1.673.052c.235.027.46.069.676.139l1.304-1.662a1.754 1.754 0 0 1-.105-.263l-.721-2.337a1.75 1.75 0 0 1-.068-.328l-2.55-1.075a3.58 3.58 0 0 1-.456.45c-.352.294-.817.601-1.367.965l-1.236.817c.127 1.17.47 2.273.991 3.27m8.192-6.269a.247.247 0 0 0-.15.052L10 11.464a.249.249 0 0 0-.087.273l.722 2.337a.248.248 0 0 0 .237.176h2.23a.246.246 0 0 0 .238-.176l.722-2.337a.25.25 0 0 0-.087-.273l-1.837-1.405a.246.246 0 0 0-.15-.05"
                  clip-rule="evenodd"
                />
              </svg>
              Equipe
            </a>
          </div>
          <div
            id="logout"
            className="flex flex-row absolute p-4 bottom-0 left-0 px-5"
          >
            <a href="#" className="flex flex-row items-center text-lg text-red-600 gap-2 p-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M0 4.447C0 1.996 2.03024 0 4.52453 0H9.48564C11.9748 0 14 1.99 14 4.437V15.553C14 18.005 11.9698 20 9.47445 20H4.51537C2.02515 20 0 18.01 0 15.563V14.623V4.447Z"
                  fill="#CC5F5F"
                />
                <path
                  d="M19.7792 9.4548L16.9334 6.5458C16.6393 6.2458 16.166 6.2458 15.8728 6.5478C15.5807 6.8498 15.5816 7.3368 15.8748 7.6368L17.434 9.2298H15.9391H7.54875C7.13483 9.2298 6.79883 9.5748 6.79883 9.9998C6.79883 10.4258 7.13483 10.7698 7.54875 10.7698H17.434L15.8748 12.3628C15.5816 12.6628 15.5807 13.1498 15.8728 13.4518C16.0199 13.6028 16.2118 13.6788 16.4046 13.6788C16.5955 13.6788 16.7873 13.6028 16.9334 13.4538L19.7792 10.5458C19.9204 10.4008 20.0003 10.2048 20.0003 9.9998C20.0003 9.7958 19.9204 9.5998 19.7792 9.4548Z"
                  fill="#CC5F5F"
                />
              </svg>
              Se déconnecter
            </a>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default Dashboard;
