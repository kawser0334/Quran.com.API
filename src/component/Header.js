
export const Header = () => {

    const navItems = [
        {
            id: 1,
            item: "Home",
            url: "#"
        },
        {
            id: 1,
            item: "About us",
            url: "#"
        },
        {
            id: 1,
            item: "SurahList",
            url: "#"
        },
        {
            id: 1,
            item: "Audio",
            url: "#"
        },
        {
            id: 1,
            item: "Contact us",
            url: "#"
        }
    ]


    return (
        <div className=" p-4 bg-stone-900 border-b-2 border-gray-600 shadow-xl flex justify-between items-center ">
            <div>
                <h1 className="ml-6 text-3xl text-red-600 font-bold"><a href="#">Quran.<span className="text-white">Com.API</span></a></h1>
            </div>
            <div className="">
                <ul className="flex justify-between items-center mr-20">
                    {
                        navItems?.map((surah, index) => (
                            <li key={index} className="mx-6 text-lg hover:text-green-500"><a href={surah.url}>{surah.item}</a></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}