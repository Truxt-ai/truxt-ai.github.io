type TeamMember = {
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
};

const teamMembers: TeamMember[] = [
    {
        name: 'Naveen Kumar',
        role: 'Founder, CEO',
        bio: 'Sarah has a PhD in Computer Science from Stanford. Previously led AI research at DeepMind and founded two successful startups.',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQEEFapjHaLR9w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703351265781?e=2147483647&v=beta&t=g8VbnTPzR4FfCrv0ZXq8577asEgSZxjUgQqU22iEt3c'
    },
    {
        name: 'Anubhav Singh',
        role: 'Founding Engineer, CTO',
        bio: "Michael has a Master's in Computer Science from MIT. Former Tech Lead at Google, specializing in distributed systems.",
        imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQG5K5n2FQ8luA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710606069056?e=1735776000&v=beta&t=JtNntpI-ZtpKhjIqo7TUGhJYQeU2TD2je7bbycLfYqs'
    },
    {
        name: 'Gourav Ghoshal',
        role: 'Head of Engineering',
        bio: 'Lisa brings 15 years of engineering experience from Amazon Web Services, where she led the serverless computing division.',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQH_XbtbU5muAQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694282914121?e=1735776000&v=beta&t=a-z2zr2EYI0cGpKBVSNgXXmyqCRClY_KdT57b3abS88'
    },
    {
        name: 'Naveen Kumar',
        role: 'Founder, CEO',
        bio: 'Sarah has a PhD in Computer Science from Stanford. Previously led AI research at DeepMind and founded two successful startups.',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQEEFapjHaLR9w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703351265781?e=2147483647&v=beta&t=g8VbnTPzR4FfCrv0ZXq8577asEgSZxjUgQqU22iEt3c'
    },
    {
        name: 'Anubhav Singh',
        role: 'Founding Engineer, CTO',
        bio: "Michael has a Master's in Computer Science from MIT. Former Tech Lead at Google, specializing in distributed systems.",
        imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQG5K5n2FQ8luA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710606069056?e=1735776000&v=beta&t=JtNntpI-ZtpKhjIqo7TUGhJYQeU2TD2je7bbycLfYqs'
    },
];

export const metadata = {
    title: 'Team - Truxt',
    description: 'Page description'
};

import Hero from './hero';
import ProfileCard from '@/components/utils/profile-card';

export default function Faq() {
    return (
        <>
            <Hero />
            <div className='teams-section w-10/12 m-auto grid grid-cols-3 gap-5 my-24 mt-0'>
                {teamMembers.map((member, index) => {
                    return <ProfileCard member={member} key={index} />;
                })}
            </div>
        </>
    );
}
