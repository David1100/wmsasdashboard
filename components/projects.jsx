import Image from "next/image";

export default function Projects({ data }) {
    return (
        <div className="p-4 border-[1px] border-gray-400 rounded-lg flex flex-col lg:flex-row gap-6 shadow-lg shadow-gray-500">
            <div className="lg:w-[850px] h-[250px] border-[1px] border-gray-600 rounded-lg relative">
                <Image
                    src={data.img}
                    layout="fill" objectFit="cover"
                    className="rounded-lg"
                    alt="Logo"
                />
            </div>
            <div className="p-2 relative w-full">
                <p className="text-gray-400">Proyecto</p>
                <p className="mb-5">{data.name}</p>

                <p className="text-gray-400">Url proyecto</p>
                <a href={data.url} target="_blank">{data.url}</a>

                <p className="text-gray-400 mt-3">Url administrador</p>
                <a href={data.url_admin} target="_blank">{data.url_admin}</a>
                <div className="bg-emerald-500 rounded-full p-3 absolute right-0 top-3 lg:right-0 lg:top-0"></div>
            </div>
        </div>
    )
}