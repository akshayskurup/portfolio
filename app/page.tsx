import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import NavBar from "@/components/Navbar";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";

export default function Home() {
  return (
    <>
    <header className='sticky top-0 bg-[#18181B] p-4 md:p-6 flex items-center justify-center'>
      <NavBar />
    </header>
    
    <main className="flex flex-col items-center px-4 md:px-6">
      <section className="mt-10 w-full max-w-[45rem]">
        {/* Profile Section */}
        <div className='md:flex justify-between'>
        <div className='md:hidden'>
            <Image className="rounded-md md:mr-5" src={'/profile.jpeg'} width={100} height={130} alt="profile-picture" />
          </div>
          <div>
            <h1 className='text-white text-2xl md:text-5xl font-extrabold mt-3 md:mt-0'>Akshay S Kurup</h1>
            <p className='mt-2 md:mt-2 font-medium md:text-lg text-zinc-400'>Dreaming up the next big idea.</p>
          </div>
          
          {/* Mobile profile image - hidden on desktop */}
          
          
          {/* Desktop profile image - hidden on mobile */}
          <div className='hidden md:block'>
            {/* <img className='w-[100px] h-[130px] rounded-md md:mr-5' src={profile} alt="profile" /> */}
            <Image className='rounded-md md:mr-5 max-h-32' width={100} height={130} src={'/profile.jpeg'} alt="profile-picture" />
          </div>
        </div>
        
        {/* Bio Section */}
        <p className='md:max-w-[70%] mt-3 md:-mt-5 mb-8 text-zinc-500 font-medium'>
          Self-taught software developer adept at mastering and implementing new technologies.
        </p>
        
        {/* GitHub Calendar */}
        <GitHubCalendar 
          style={{ width: "80rem" }} 
          username="akshayskurup" 
          colorScheme="dark" 
        />
        
        {/* Skills Section */}
        <h2 className='mt-8 text-2xl md:text-4xl text-white font-bold'>Skills</h2>
        <div className='w-full flex items-center justify-center min-h-[200px]'>
          <ul className='flex flex-wrap justify-center items-center gap-4'>
            {[
              "HTML", "CSS", "JavaScript", "TypeScript", "TailwindCSS", "Node.js", "Express.js",
              "React.js", "Next.js", "Redux", "Recoil", "MongoDB", "PostgreSQL", "Docker"
            ].map((skill, index) => (
              <li key={index} className='bg-zinc-800 text-white px-3 py-1 rounded-full text-sm'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <CurrentlyPlaying />
      </section>
    </main>
  </>
  );
}
