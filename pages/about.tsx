import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AboutRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/ricardo-pietroforte');
  }, [router]);
  return null;
}