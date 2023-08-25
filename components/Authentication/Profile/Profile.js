import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const user = useUser();
  const router = useRouter();
  if (user) {
    router.push('/cart');
  } else {
    router.push('/login');
  }
};

export default Profile;
