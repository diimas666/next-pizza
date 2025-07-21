import { Container } from '@/components/shared/Container';
import Filters from '@/components/shared/Filters';
import { Title } from '@/components/shared/Title';
import TopBar from '@/components/shared/Top-Bar';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Усі піци" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* филтрация  */}
          <div className="w-[250px]">
            <Filters /> 
            </div>

          {/* список товаров   */}

          <div className="flex-1">
            <div className="flex flex-col gap-16">Список товаров</div>
          </div>
        </div>
      </Container>
    </>
  );
}
