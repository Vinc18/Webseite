import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const PrivatePage = () => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/login'); // Umleiten auf Login-Seite, wenn kein Token vorhanden ist
        return;
      }

      try {
        const response = await axios.get('https://api.vincentwitzmann.com/api/auth', {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(response);

        if (response.status == 200) {
          setAuth(true);
        } else {
          router.push('/login'); // Umleiten, wenn die Authentifizierung fehlschlägt
        }
      } catch (error) {
        console.error('Fehler bei der Token-Überprüfung:', error);
        setError('Authentication failed. Please login again.');
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return <div>Laden...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl mb-8">Private Dokumente</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl mb-4">Dokument 1</h2>
        {/* <embed src="/docs/example1.pdf" width="100%" height="600px" /> */}
        <h2 className="text-2xl mt-8 mb-4">Dokument 2</h2>
        {/* <embed src="/docs/example2.pdf" width="100%" height="600px" /> */}
      </div>
    </div>
  );
};

export default PrivatePage;