import Image from "next/image"
import Link from "next/link"

const Diabetes = () => {
  return (
    <div className=" flex items-center justify-center w-full h-full">
      <div className=" flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 rounded-xl border border-white w-full h-full p-6">
        <Image src={require('../public/lungs.jpg')} alt="" className="w-full md:w-64  rounded-lg  " />
        <div className="flex items-start justify-center flex-col gap-4 md:gap-6">
          <div className=" text-3xl md:text-5xl text-left text-white leading-relaxed font-bold">
            Lung Cancer
          </div>
          <div className="max-w-xl text-base md:text-xl text-left text-white/70 leading-relaxed font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequuntur voluptates repellendus distinctio, vero earum atque veniam? Eius libero rem cupiditate cumque id? Quod excepturi porro reiciendis officiis animi assumenda?
          </div>
          <div className=" flex items-center justify-center w-full md:w-auto bg-blue-600 px-10 py-3 hover:bg-blue-500 transition cursor-pointer rounded-full ">
            <Link href="/diabetes" className="text-white h-full font-semibold text-base ">
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diabetes
