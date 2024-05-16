const Tuiton = () => {
    return (
        <div className="mt-16 container mx-auto gap-8 px-16 grid grid-cols-12">
            <div className="col-span-4">
                <h1 className="text-2xl font-bold p-2">Advance Filter</h1>
                <hr />
                <p className="mt-4 mb-1 text-xl text-[#255ED6]  font-medium">Search</p>
                <input type="text" placeholder="Type here" className="mb-4 input input-bordered w-full max-w-xs" />
                <hr />
                <div className="mt-4">
                    <p className="mt-4 mb-2 text-xl text-[#255ED6]  font-medium">Tution type</p>
                    <div className="form-control">
                        <div className="flex gap-8 mb-2">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                            <div className="text-xl font-normal">All Tuition</div>
                        </div>
                        <div className="flex gap-8 mb-2">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                            <div className="text-xl font-normal">Online Tution</div>
                        </div>
                        <div className="flex gap-8 mb-2">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                            <div className="text-xl font-normal">Home Tution</div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="mt-4">
                    <p className="mt-4 mb-2 text-xl text-[#255ED6]  font-medium">Tution Preferance</p>
                    <div className="form-control">
                        <div className="flex gap-8 mb-2">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                            <div className="text-xl font-normal">All </div>
                        </div>
                        <div className="flex gap-8 mb-2">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                            <div className="text-xl font-normal">Male</div>
                        </div>
                        <div className="flex gap-8 mb-2">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                            <div className="text-xl font-normal">Female</div>
                        </div>
                    </div>
                </div>

            </div>
            {/* tution  */}
            <div className="mb-4 col-span-8 ">
                {/* tution */}
                <div className="mb-6 bg-slate-100 p-6 rounded-xl">
                    <div>
                        <div className="flex justify-between">
                            <h1 className="mt-4 text-2xl font-bold">Raja Bazar, Firm gate, Dhaka</h1>
                            <div>
                                <button className="mt-4 text-xl font-medium py-1 px-4 rounded  border-none bg-[#255ED6] text-white mr-4">Apply</button>
                            </div>
                        </div>
                        <h1 className="mt-4 text-4xl font-bold">Female Tutor Needed For Handwriting</h1>
                        <button className="mt-4 text-lg py-1 px-4 rounded  border-none bg-[#255ED6] text-white mr-4">Home Tutor</button>
                        <button className="mt-4 text-lg py-1 px-4 rounded border-none bg-[#255ED6] text-white">3 Hours ago</button>
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Medium</p>
                                <p className="text-xl font-normal">Professional Skills Development</p>
                            </div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Tutoring Days</p>
                                <p className="text-xl font-normal">4 days / week</p>
                            </div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Prefferd Tutor</p>
                                <p className="text-xl font-normal">Female</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Class</p>
                                <p className="text-xl font-normal">Hand Writing</p>
                            </div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Subject</p>
                                <button className=" text-lg py-1 px-4 rounded  border-none bg-[#255ED6] text-white mr-4">Bangla</button>
                                <button className=" text-lg py-1 px-4 rounded border-none bg-[#255ED6] text-white">English</button>
                            </div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Salary</p>
                                <p className="text-xl font-normal"><span className="text-3xl text-[#255ED6] font-bold ">3000</span>tk / Month</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tution */}
                <div className="mb-6 bg-slate-100 p-6 rounded-xl">
                    <div>
                        <div className="flex justify-between">
                            <h1 className="mt-4 text-2xl font-bold">Raja Bazar, Firm gate, Dhaka</h1>
                            <div>
                                <button className="mt-4 text-xl font-medium py-1 px-4 rounded  border-none bg-[#255ED6] text-white mr-4">Apply</button>
                            </div>
                        </div>
                        <h1 className="mt-4 text-4xl font-bold">Female Tutor Needed For Handwriting</h1>
                        <button className="mt-4 text-lg py-1 px-4 rounded  border-none bg-[#255ED6] text-white mr-4">Home Tutor</button>
                        <button className="mt-4 text-lg py-1 px-4 rounded border-none bg-[#255ED6] text-white">3 Hours ago</button>
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Medium</p>
                                <p className="text-xl font-normal">Professional Skills Development</p>
                            </div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Tutoring Days</p>
                                <p className="text-xl font-normal">4 days / week</p>
                            </div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Prefferd Tutor</p>
                                <p className="text-xl font-normal">Female</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Class</p>
                                <p className="text-xl font-normal">Hand Writing</p>
                            </div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Subject</p>
                                <button className=" text-lg py-1 px-4 rounded  border-none bg-[#255ED6] text-white mr-4">Bangla</button>
                                <button className=" text-lg py-1 px-4 rounded border-none bg-[#255ED6] text-white">English</button>
                            </div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Salary</p>
                                <p className="text-xl font-normal"><span className="text-3xl text-[#255ED6] font-bold ">3000</span>tk / Month</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tution */}
                <div className="mb-6 bg-slate-100 p-6 rounded-xl">
                    <div>
                        <div className="flex justify-between">
                            <h1 className="mt-4 text-2xl font-bold">Raja Bazar, Firm gate, Dhaka</h1>
                            <div>
                                <button className="mt-4 text-xl font-medium py-1 px-4 rounded  border-none bg-[#255ED6] text-white mr-4">Apply</button>
                            </div>
                        </div>
                        <h1 className="mt-4 text-4xl font-bold">Female Tutor Needed For Handwriting</h1>
                        <button className="mt-4 text-lg py-1 px-4 rounded  border-none bg-[#255ED6] text-white mr-4">Home Tutor</button>
                        <button className="mt-4 text-lg py-1 px-4 rounded border-none bg-[#255ED6] text-white">3 Hours ago</button>
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Medium</p>
                                <p className="text-xl font-normal">Professional Skills Development</p>
                            </div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Tutoring Days</p>
                                <p className="text-xl font-normal">4 days / week</p>
                            </div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Prefferd Tutor</p>
                                <p className="text-xl font-normal">Female</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Class</p>
                                <p className="text-xl font-normal">Hand Writing</p>
                            </div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Subject</p>
                                <button className=" text-lg py-1 px-4 rounded  border-none bg-[#255ED6] text-white mr-4">Bangla</button>
                                <button className=" text-lg py-1 px-4 rounded border-none bg-[#255ED6] text-white">English</button>
                            </div>
                            <div>
                                <p className="mt-4 mb-1 text-xl text-[#255ED6]">Salary</p>
                                <p className="text-xl font-normal"><span className="text-3xl text-[#255ED6] font-bold ">3000</span>tk / Month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tuiton;