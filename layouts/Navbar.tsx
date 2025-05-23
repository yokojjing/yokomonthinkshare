import Container from 'components/Container';
import Socials from 'components/Socials';
import siteData from 'siteData';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed z-50 w-full bg-gray-100 border border-black">
      <Container>
        <div className="flex justify-between w-full p-4">
          <Link href="/" passHref>
            <div className="text-xl font-bold cursor-pointer ">{siteData?.author}</div>
          </Link>
          <Socials />
        </div>
      </Container>
    </div>
  );
}
