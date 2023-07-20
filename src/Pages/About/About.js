import Page from "../../Components/CredentialProfile/Page";
import Specialization from "../../Components/Specialization/Specialization";
import WorkTogether from "../../Components/WorkTogether/WorkTogether";

const About = () => {
  return (
    <div className='max-w-6xl md:mx-auto mx-10'>
      <div className='grid md:grid-cols-12 gap-20 my-10'>
        <div className='md:col-span-4'>
          <Page></Page>
        </div>
        <div className='md:col-span-8'>
          {/* about info */}
          <div>
            <h1 className='text-2xl font-semibold text-[#f5f5f5] uppercase'>
              About me
            </h1>
            <div className='mt-8'>
              <p className='text-sm text-[#f5f5f5]'>
                Hi, I’m Nur Uddin, a MERN stack developer with a passion for
                creating dynamic and user-friendly web applications.
              </p>
              <p className='mt-2 text-sm text-[#f5f5f5]'>
                My Hobby I'm passionate about coding and constantly expending my
                knowledge learning new things
              </p>
              <p className='mt-2 text-sm text-[#f5f5f5]'>
                I enjoy learning new skills and exploring new challenges in the
                field of web development. I’m always open to new opportunities
                and collaborations.
              </p>
            </div>
          </div>
          <div className='my-5'>
            <Specialization></Specialization>
          </div>
          <div>
            <WorkTogether></WorkTogether>
          </div>
          {/* about info */}
        </div>
      </div>
    </div>
  );
};

export default About;
