import { Container, ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-28 lg:py-36">
      <p className="font-serif text-[5rem] leading-none text-maroon">404</p>
      <h1 className="t-h1 mt-6">This page could not be found</h1>
      <p className="t-lead mt-5 measure">The link may be out of date, or the page may have moved. Try one of these instead.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/">Go to the homepage</ButtonLink>
        <ButtonLink href="/courses" variant="secondary">Browse programmes</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">Contact the college</ButtonLink>
      </div>
    </Container>
  );
}
