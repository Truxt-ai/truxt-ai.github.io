import Image from 'next/image';
import { StaticImageData } from 'next/image';
import TeamMember01 from '@/public/images/team-member-01.jpg';
import TeamMember02 from '@/public/images/team-member-02.jpg';
import TeamMember03 from '@/public/images/team-member-03.jpg';
import TeamMember04 from '@/public/images/team-member-04.jpg';
import TeamMember05 from '@/public/images/team-member-05.jpg';
import TeamMember06 from '@/public/images/team-member-06.jpg';
import TeamMember07 from '@/public/images/team-member-07.jpg';
import TeamMember08 from '@/public/images/team-member-08.jpg';
import TeamMember09 from '@/public/images/team-member-09.jpg';

type TeamMemberProps = {
  image: StaticImageData;
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
    { image: TeamMember01, name: 'Naveen Kumar', role: 'CEO & Co-founder', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.', delay: 0 },
    { image: TeamMember02, name: 'Gourav Ghoshal', role: 'CTO & Co-founder', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.', delay: 150 },
    { image: TeamMember03, name: 'Ravi Verma', role: 'Community Manager', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.', delay: 300 },
    // { image: TeamMember04, name: 'Anthony McGargle', role: 'Lead Front-end Engineer', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.', delay: 450 },
    // { image: TeamMember05, name: 'Jessie Pietrasiak', role: 'Head of Design', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.', delay: 600 },
    // { image: TeamMember06, name: 'Marina Hoffman', role: 'Front-end Engineer', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.', delay: 750 },
    // { image: TeamMember07, name: 'Tamara Hastings', role: 'Product Developer', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.', delay: 900 },
    // { image: TeamMember08, name: 'Rachel Vervack', role: 'Senior Data Scientist', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.', delay: 1050 },
    // { image: TeamMember09, name: 'Andrew Laurencio', role: 'Front-end Engineer', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.', delay: 1200 },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-sm sm:max-w-5xl sm:flex sm:flex-wrap sm:justify-center justify-center -my-6 sm:-my-8 sm:-mx-3 mx-auto" data-aos-id-team>
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
