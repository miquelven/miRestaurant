export default function SectionTextContent({ children }) {
  return (
    <p className="font-light text-lg leading-8 [text-shadow:_1px_4px_0_rgb(0_0_0_/_100%)] px-5 text-center max-2xl:px-0 max-lg:text-base max-lg:leading-7 max-lg:[text-shadow:_1px_2px_0_rgb(0_0_0_/_100%)] max-sm:text-sm max-sm:leading-6">
      {children}
    </p>
  );
}
