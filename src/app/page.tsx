import Banner from "./_components/Banner";
import FutureFinance from "./_components/FutureFinance";
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
      <FutureFinance/>
      <TrustedCompanies />
      <Legacy />
    </main>
  );
};

export default HomePage;
