import OurPassion from "../components/advisors/ourPassion";
import OurTrust from "../components/advisors/ourTrust";
import DefaultLayout from "../components/layout/defaultLayout";
import Header from "../components/layout/header";

export default function Advisors() {
  return (
    <DefaultLayout>
      <header>
        <Header
          pageName="Advisors"
          firstText="Take your"
          imgUrl="https://res.cloudinary.com/phantom1245/image/upload/v1694218764/bank247/20230909_011510_vgsipj.jpg"
          firstTextSpan="business"
          secondText="to the next level."
          secondTextSpan=" "
          firstBtnText="get onboarded"
          secondBtnText="connect with us"
        />
      </header>
      <main>
        <section>
          <OurTrust />
        </section>
        <section>
          <OurPassion />
        </section>
      </main>
    </DefaultLayout>
  );
}
