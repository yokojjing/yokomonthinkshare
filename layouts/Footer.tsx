import Container from 'components/Container';
import Socials from 'components/Socials';
import siteData from 'siteData'; 

export default function Footer({ blog }) {
  return (
    <footer className="py-4 bg-gray-100 border-l border-r border-b border-black">
      <Container>
        <div className="md:flex md:items-center md:justify-between">
          <Socials />
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-base text-center text-gray-900">{siteData.footerText}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
