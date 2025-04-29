import Image from "next/image";
export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div
          className="relative w-[300px] h-[300px] 
          sm:w-[350px] sm:h-[350px]"
        >
          <Image
            src="/demo_1.png"
            fill
            className="object-contain dark:hidden"
            alt="demo image"
          />
          <Image
            src="/demo_1_dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="demo image"
          />
        </div>
        <div className="relative h-[350px] w-[350px]  hidden md:block">
          <Image
            src="/demo_2.png"
            fill
            className="object-contain dark:hidden"
            alt="demo image"
          />
          <Image
            src="/demo_2_dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="demo image"
          />
        </div>
      </div>
    </div>
  );
};
