const Icon = ({ icon, link }) => {
  return (
    <a
      className='hover:text-[#000]'
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      {icon}
    </a>
  );
};

export default Icon;
