
const TeacherRegister = () => {
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border mx-auto mt-16">

            <h1 className="text-3xl font-bold text-center">Register as Teacher</h1>
            <form className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="Name" className="block dark:text-gray-600">Name</label>
                    <input type="Name" name="Name" id="Name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border"/>
                
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="Educational Institue" className="block dark:text-gray-600">Educational Institue</label>
                    <input type="Educational Institue" name="Educational Institue" id="Educational Institue" placeholder="Educational Institue" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border"/>
                
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                    <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border"/>
                
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                    <input name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border"   />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-600">Confirm Password</label>
                    <input name="password" id="password" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border"   />
                </div>
                <button className="block w-full p-3 text-center rounded-s border bg-[#255ED6] text-white">Register</button>
            </form>
            
            <p className="text-lg text-center sm:px-6 dark:text-gray-600"> Already have account?
                <a href="/teacherLogin" className="underline dark:text-gray-800 text-[#255ED6]"> Login</a>
            </p>
        </div>
    );
};

export default TeacherRegister;