import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const user = useUser();
  const router = useRouter();
  console.log(user)
  if (user) {
    router.push('/cart');
  } else {
    router.push('/login');
  }
};

export default Profile;
