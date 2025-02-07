type Params = {
  params: {
    slug: string
  };
};
//

export async function generateMetadata({ params }: any) {
  return { title: `Post: ${params.slug}` };
}

export default async function Page({ params }: any) {
  return <h1>Slug: {params.slug} test</h1>
}
