import { Card, CardContent } from '@/components/ui/card';

interface Member {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

interface ProfileCardProps {
  member: Member;
}

export default function ProfileCard({ member }: ProfileCardProps = {
  member: {
    name: 'John Doe',
    role: 'Software Engineer',
    bio: 'Passionate about creating efficient and scalable solutions.',
    imageUrl: '/placeholder.svg?height=300&width=300'
  }
}) {
  return (
    <Card key={member.name} className='bg-gray-50 border-0 overflow-hidden w-[80%] mx-auto'>
      <div className='aspect-square overflow-hidden rounded-t-lg'>
        <img src={member.imageUrl} alt={member.name} className='w-full h-full object-cover' />
      </div>
      <CardContent className='p-4 bg-[#f2f2f2]'>
        <h3 className='text-lg font-semibold text-gray-900 mb-0.5'>{member.name}</h3>
        <p className='text-gray-500 text-xs mb-3'>{member.role}</p>
        <p className='text-gray-600 text-xs leading-relaxed'>{member.bio}</p>
      </CardContent>
    </Card>
  );
}