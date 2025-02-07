type Params = {
  params: any;
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}
//
//
export default async function Page({ params }: Params) {
  const { slug } = await params;
  return <h1>Slug: {slug}</h1>;
}
