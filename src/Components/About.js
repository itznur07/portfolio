import Page from "./CredentialProfile/Page";

const About = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='grid grid-cols-12 gap-20 my-10'>
        <div className='col-span-4'>
          <Page></Page>
        </div>
        <div className='col-span-8'>
          {/* about info */}
          <div>
            <h1 className='text-2xl font-bold text-[#f5f5f5] uppercase'>About me</h1>
            <p>
              Hi, I’m Nur Uddin, a MERN stack developer with a passion for
              creating dynamic and user-friendly web applications.
            </p>
            <p>
              My Hobby I'm passionate about coding and constantly expending my
              knowledge learning new things
            </p>
            <p>
              I enjoy learning new skills and exploring new challenges in the
              field of web development. I’m always open to new opportunities and
              collaborations.
            </p>
          </div>
          {/* about info */}
        </div>
      </div>
    </div>
  );
};

export default About;
