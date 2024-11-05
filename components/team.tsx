import Image from 'next/image';

type TeamMemberProps = {
  image: string;
  name: string;
  role: string;
  description: string;
  delay?: number;
};

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role, description, delay = 0 }) => (
  <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay={delay} data-aos-anchor="[data-aos-id-team]">
    <div className="flex flex-col items-center">
      <Image className="rounded-full mb-4" src={image} width={120} height={120} alt={`Team member ${name}`} />
      <h4 className="text-xl font-bold mb-1">{name}</h4>
      <div className="text-blue-600 font-medium mb-2">{role}</div>
      <p className="text-gray-600 text-center mb-3">{description}</p>
      <div className="text-sm text-gray-600 font-medium">
        <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
      </div>
    </div>
  </div>
);

const Team: React.FC = () => {
  const teamMembers = [
    { image: 'https://media.licdn.com/dms/image/v2/D4E03AQEEFapjHaLR9w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703351265781?e=2147483647&v=beta&t=g8VbnTPzR4FfCrv0ZXq8577asEgSZxjUgQqU22iEt3c', name: 'Naveen Kumar', role: 'CEO & Co-founder', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.', delay: 0 },
    { image: 'https://avatars.githubusercontent.com/u/57912157?v=4', name: 'Gourav Ghosal', role: 'Software Engineer', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.', delay: 150 },
    { image: 'https://media.licdn.com/dms/image/v2/C4E03AQFI5FEwYwZBAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1659542006451?e=1736380800&v=beta&t=X9Gb1atM9hyXdmj9XyBkymYYBBBF0RMsL980GJrHrfI', name: 'Ravi Verma', role: 'Software Engineer', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.', delay: 300 },
    { image: 'https://avatars.githubusercontent.com/u/94908262?v=4', name: 'Pratham Saxena', role: 'Software Engineer', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.', delay: 350 },
   ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-sm sm:max-w-5xl sm:flex sm:flex-wrap sm:-my-8 m-auto" data-aos-id-team>
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
