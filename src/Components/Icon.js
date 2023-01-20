const Icon = ({ icon, link }) => {
  return (
    <a
      className='hover:text-[#fff]'
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      {icon}
    </a>
  );
};

export default Icon;
