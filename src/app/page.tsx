import Banner from "./_components/Banner";
import Legacy from "./_components/Legacy";
import Philosophy from "./_components/Philosophy";
import PoweringFuture from "./_components/PoweringFuture";
import TrustedCompanies from "./_components/TrustedCompanies";

const HomePage = () => {
  return (
    <main>
      <Banner />
      <PoweringFuture />
      <Philosophy />
      <TrustedCompanies />
      <Legacy />
    </main>
  );
};

export default HomePage;
