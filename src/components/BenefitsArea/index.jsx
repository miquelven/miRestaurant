import Container from "../Container";
import SectionTextDecoration from "../SectionTextDecoration";
import SectionTitle from "../SectionTitle";

import benefitsData from "../../data/benefitsData";

export default function BenefitsArea() {
  return (
    <section className="my-20">
      <Container>
        <div className="flex flex-col gap-3 mb-28">
          <SectionTextDecoration>Por que nos escolher</SectionTextDecoration>
          <SectionTitle>Alguns Benefícios</SectionTitle>
        </div>

        <ul className="grid grid-cols-4 gap-10 max-xl:gap-4 max-lg:grid-cols-3 max-lg:gap-y-6 max-md:grid-cols-2 max-md:gap-10 max-sm:gap-4">
          {benefitsData.map((benefits) => (
            <li
              key={benefits.id}
              className="even:bg-black/40 px-4 pt-4 pb-2 rounded-md shadow-md shadow-black/40 flex flex-col justify-center items-center gap-10 hover:even:bg-black/45 hover:odd:bg-black/10 max-lg:last:col-start-2 max-lg:last:col-end-3 max-md:py-7"
            >
              {benefits.icon}
              <div className="flex flex-col gap-4 text-center max-xl:gap-8 ">
                <h6 className="font-semibold text-xl max-sm:text-base">
                  {benefits.title}
                </h6>
                <p className="font-light leading-7 max-sm:text-xs max-sm:leading-5 ">
                  {benefits.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
