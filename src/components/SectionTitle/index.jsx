export default function SectionTitle({ children }) {
  return (
    <h3 className="font-bold text-4xl text-center px-10 [text-shadow:_1px_4px_0_rgb(0_0_0_/_100%)] max-2xl:px-0 max-lg:[text-shadow:_1px_3px_0_rgb(0_0_0_/_100%)]">
      {children}
    </h3>
  );
}
