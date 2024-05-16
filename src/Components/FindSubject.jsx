

const FindSubject = () => {
    return (
        <div className="mt-24">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Find Your Subject Specialist</h1>
                <p className="text-xl text-[#292929]">Find Our Specialist to reach your dream goal</p>
            </div>
            <div className="container mx-auto mt-8">
                <div className="grid grid-cols-4 gap-4">
                <button className="px-24 py-4 bg-[#f8faff] text-[#05264e] text-4xl font-bold border-2 rounded-xl">Bangla</button>
                <button className="px-24 py-4 bg-[#f8faff] text-[#05264e] text-4xl font-bold border-2 rounded-xl">English</button>
                <button className="px-24 py-4 bg-[#f8faff] text-[#05264e] text-4xl font-bold border-2 rounded-xl">Math</button>
                <button className="px-24 py-4 bg-[#f8faff] text-[#05264e] text-4xl font-bold border-2 rounded-xl">Biology</button>
                </div>
            </div>
        </div>
    );
};

export default FindSubject;