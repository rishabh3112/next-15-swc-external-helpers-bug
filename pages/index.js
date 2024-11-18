import dynamic from "next/dynamic";

const Component = dynamic(() => import("@/components/Component"), {
  loading: () => <>Loading</>,
  ssr: false,
});

export default function Home() {
  return <Component />;
}
