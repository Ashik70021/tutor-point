
const TeacherLogin = () => {
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border mx-auto mt-16">

            <h1 className="text-3xl font-bold text-center">Login as Teacher</h1>
            <form className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                    <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border"/>
                
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                    <input name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border"   />
                    
                    <div className="flex justify-end text-xs dark:text-gray-600">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded-s border bg-[#255ED6] text-white">Log in</button>
            </form>
           
            <p className="text-lg text-center sm:px-6 dark:text-gray-600"> Dont have an account?
                <a href="/teacherRegister" className="underline dark:text-gray-800 text-[#255ED6]"> Register</a>
            </p>
        </div>
    );
};

export default TeacherLogin;